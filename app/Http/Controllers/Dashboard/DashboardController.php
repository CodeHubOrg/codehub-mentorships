<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController
{
    public function show()
    {
        $h = resolve('\App\Helpers\GeneralHelper');

        $u = (Auth::user());
        $u->name = $u->Name;

        if (is_object($u)) {
            $u = $h->addCamelsToModel($u);
        }

        $mentor = $u->mentorProfile ? $h->addCamelsToModel($u->mentorProfile) : null;
        $mentee = $u->menteeProfile ? $h->addCamelsToModel($u->menteeProfile) : null;

        return Inertia::render('Dashboard/Show', [
            'user' => $u,
            'mentorProfile' => $mentor,
            'menteeProfile' => $mentee,
        ]);
    }
}
