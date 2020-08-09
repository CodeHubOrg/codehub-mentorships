<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Requests\MentorMenteeRequest;
use App\Models\MenteeProfile;
use App\Models\MentorProfile;
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
        $menteeProfiles = MenteeProfile::all();
        foreach ($menteeProfiles as $m) {
            $attr = $m->getAttributes();
            $u = $m->user;
            $attr['first_name'] = $u->first_name;
            $attr['last_name'] = $u->last_name;
            $attr['email'] = $u->email;
            $attr['slack_handle'] = $u->slack_handle;
            $mentees[] = $attr;
        }

        return Inertia::render('Admin/Dashboard/Index', [
            'mentors' => $mentors,
            'mentees' => $mentees,
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
