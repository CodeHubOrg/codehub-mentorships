<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Requests\MentorMenteeRequest;
use App\Models\MenteeProfile;
use App\Models\MentorProfile;
use App\Models\MentorProfileMenteeProfile;
use App\Models\User;
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

        $mentorshipSummary = [];
        $menteeMentorProfiles = MentorProfileMenteeProfile::all();
        foreach ($menteeMentorProfiles as $m) {
            $summary;
            $activeMenteeId = $m['mentee_profile_id'];
            $activeMenteeUserId = MenteeProfile::find($activeMenteeId)->user_id;
            $mentee = User::find($activeMenteeUserId);
            $summary['mentee_first_name'] = $mentee->first_name;
            $summary['mentee_last_name'] = $mentee->last_name;
            $summary['mentee_email'] = $mentee->email;

            $activeMentorId = $m['mentor_profile_id'];
            $activeMentorUserId = MentorProfile::find($activeMentorId)->user_id;
            $mentor = User::find($activeMentorUserId);
            $summary['mentor_first_name'] = $mentor->first_name;
            $summary['mentor_last_name'] = $mentor->last_name;
            $summary['mentor_email'] = $mentor->email;
            $mentorshipSummary[] = $summary;
        }

        return Inertia::render('Admin/Dashboard/Index', [
            'mentors' => $mentors,
            'mentees' => $mentees,
            'summary' => $mentorshipSummary,
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
