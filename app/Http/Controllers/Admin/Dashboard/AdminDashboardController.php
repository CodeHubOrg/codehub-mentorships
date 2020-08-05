<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Models\MenteeProfile;
use App\Models\MentorProfile;
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
}
