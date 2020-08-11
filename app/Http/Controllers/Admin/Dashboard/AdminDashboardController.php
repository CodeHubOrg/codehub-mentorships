<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Requests\MentorMenteeRequest;
use App\Models\MenteeProfile;
use App\Models\MentorProfile;
use App\Models\User;
use App\Models\MentorProfileMenteeProfile;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminDashboardController
{
    public function index()
    {
        $mentors = [];
        $mentorProfiles = MentorProfile::all();
        foreach ($mentorProfiles as $m) {
            $attr = $m->getAttributes();
            $u = $m->user;
            $attr['first_name'] = $u->first_name;
            $attr['last_name'] = $u->last_name;
            $attr['email'] = $u->email;
            $attr['slack_handle'] = $u->slack_handle;
            $mentors[] = $attr;
        }

        $mentees = [];
        $activeMentees = MentorProfileMenteeProfile::pluck('mentee_profile_id')->all();
        $menteeProfiles = MenteeProfile::whereNotIn('id', $activeMentees)->get();
        foreach ($menteeProfiles as $m) {
            $attr = $m->getAttributes();
            $u = $m->user;
            $attr['first_name'] = $u->first_name;
            $attr['last_name'] = $u->last_name;
            $attr['email'] = $u->email;
            $attr['slack_handle'] = $u->slack_handle;
            $mentees[] = $attr;
        }

        $mentoringSummary = [];
        $menteeMentorProfiles = MentorProfileMenteeProfile::all();
        foreach ($menteeMentorProfiles as $m) {
            $summary;
            $activeMentee = $m['mentee_profile_id'];
            $activeMenteeId = MenteeProfile::find($activeMentee)->user_id;
            $mentee = User::find($activeMenteeId); 
            $summary['mentee_first_name'] = $mentee->first_name;
            $summary['mentee_last_name'] = $mentee->last_name;
            $summary['mentee_email'] = $mentee->email;
            
            $activeMentor = $m['mentor_profile_id'];
            $activeMentorId = MenteeProfile::find($activeMentor)->user_id;
            $mentor = User::find($activeMentorId);
            $summary['mentor_first_name'] = $mentor->first_name;
            $summary['mentor_last_name'] = $mentor->last_name;
            $summary['mentor_email'] = $mentor->email;
            $mentoringSummary[] = $summary;
         }



        return Inertia::render('Admin/Dashboard/Index', [
            'mentors' => $mentors,
            'mentees' => $mentees,
            'summary' => $mentoringSummary,
        ]);
    }

    public function store(MentorMenteeRequest $request)
    {
        $validated = $request->validated();

        $mentor = MentorProfile::findOrFail($validated['mentorId']);
        $mentee = MenteeProfile::findOrFail($validated['menteeId']);

        $mentee->mentorProfiles()->attach($mentor);

        return Redirect::route('admin.dashboard.index');
    }
}
