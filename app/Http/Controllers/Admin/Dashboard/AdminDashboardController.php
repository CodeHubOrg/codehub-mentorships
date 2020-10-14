<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Requests\MentorMenteeRequest;
use App\Models\MenteeProfile;
use App\Models\MentorProfile;
use App\Models\MentorProfileMenteeProfile;
use App\Models\User;
use App\Presenters\MenteeProfilePresenter;
use App\Presenters\MentorProfilePresenter;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminDashboardController
{
    public function index()
    {
        //$h = resolve('\App\Helpers\GeneralHelper');

        $mentors = [];
        $mentorProfiles = MentorProfile::all();

        foreach ($mentorProfiles as $m) {
            $mentor = MentorProfilePresenter::make($m);
            $attr = $mentor->getAttributes();
            $user = $mentor->user;
            $attr['name'] = $user->Name;
            $attr['email'] = $user->email;
            $attr['slackHandle'] = $user->slack_handle;
            $mentors[] = $attr;
        }

        $mentees = [];
        $activeMentees = MentorProfileMenteeProfile::pluck('mentee_profile_id')->all();
        $menteeProfiles = MenteeProfile::whereNotIn('id', $activeMentees)->get();
        foreach ($menteeProfiles as $m) {
            $mentee = MenteeProfilePresenter::make($m);
            $attr = $mentee->getAttributes();
            $user = $mentee->user;
            $attr['name'] = $user->Name;
            $attr['email'] = $user->email;
            $attr['slackHandle'] = $user->slack_handle;
            $mentees[] = $attr;
        }

        $mentorshipSummary = [];
        $menteeMentorProfiles = MentorProfileMenteeProfile::all();
        foreach ($menteeMentorProfiles as $m) {
            $summary;
            $activeMenteeId = $m['mentee_profile_id'];
            $activeMenteeUserId = MenteeProfile::find($activeMenteeId)->user_id;
            $mentee = User::find($activeMenteeUserId);
            $summary['menteeFirstName'] = $mentee->first_name;
            $summary['menteeLastName'] = $mentee->last_name;
            $summary['menteeEmail'] = $mentee->email;
            $summary['menteeId'] = $m['mentee_profile_id'];

            $activeMentorId = $m['mentor_profile_id'];
            $activeMentorUserId = MentorProfile::find($activeMentorId)->user_id;
            $mentor = User::find($activeMentorUserId);
            $summary['mentorFirstName'] = $mentor->first_name;
            $summary['mentorLastName'] = $mentor->last_name;
            $summary['mentorEmail'] = $mentor->email;
            $summary['mentorId'] = $m['mentor_profile_id'];
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

        $mentor = MentorProfile::findOrFail($validated['mentor_id']);
        $mentee = MenteeProfile::findOrFail($validated['mentee_id']);

        $mentee->mentorProfiles()->attach($mentor);

        return Redirect::route('admin.dashboard.index');
    }

    public function destroy(MentorMenteeRequest $request)
    {
       // $validated = $request->validated();

        $mentor = MentorProfile::findOrFail($request['mentorId']);
        $mentee = MenteeProfile::findOrFail($request['menteeId']);

        $mentee->mentorProfiles()->detach($mentor);
    }
}
