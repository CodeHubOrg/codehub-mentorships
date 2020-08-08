<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Models\MenteeProfile;
use App\Models\MentorProfile;
use Inertia\Inertia;

class AdminDashboardController
{
    public function index()
    {
        $h = resolve('\App\Helpers\GeneralHelper');

        $mentors = [];
        $mentorProfiles = MentorProfile::all();

        foreach ($mentorProfiles as $m) {
            $attr = $h->addCamelsToModel($m)->getAttributes();
            $u = $m->user;
            $attr['name'] = $u->Name;
            $attr['email'] = $u->email;
            $attr['slackHandle'] = $u->slack_handle;
            $mentors[] = $attr;
        }

        $mentees = [];
        $menteeProfiles = MenteeProfile::all();
        foreach ($menteeProfiles as $m) {
            $attr = $h->addCamelsToModel($m)->getAttributes();
            $u = $m->user;
            $attr['name'] = $u->Name;
            $attr['email'] = $u->email;
            $attr['slackHandle'] = $u->slack_handle;
            $mentees[] = $attr;
        }

        return Inertia::render('Admin/Dashboard/Index', [
            'mentors' => $mentors,
            'mentees' => $mentees,
        ]);
    }
}
