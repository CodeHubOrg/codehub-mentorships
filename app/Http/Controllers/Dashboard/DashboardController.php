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
        $u = $h->addCamelsToModel($u);

        return Inertia::render('Dashboard/Show', [
            'user' => $u,
            'mentorProfile' => $h->addCamelsToModel($u->mentorProfile),
            'menteeProfile' => $h->addCamelsToModel($u->menteeProfile),
        ]);
    }
}
