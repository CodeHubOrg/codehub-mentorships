<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController
{
    public function show()
    {
        $u = Auth::user();

        // now I have moved the profiles in here, I am wondering if just passing the user would be enough
        return Inertia::render('Dashboard/Show', [
            'user' => $u,
            'mentorProfile' => $u->mentorProfile,
            'menteeProfile' => $u->menteeProfile,
        ]);
    }
}
