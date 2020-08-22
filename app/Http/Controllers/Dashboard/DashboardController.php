<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Support\Facades\Auth;
use App\Presenters\UserPresenter;
use App\Presenters\MenteeProfilePresenter;
use App\Presenters\MentorProfilePresenter;
use Inertia\Inertia;

class DashboardController
{
    public function show()
    {
        $user = Auth::user();
        $user->load('mentorProfile','menteeProfile');

        return Inertia::render('Dashboard/Show', [
            'user' => UserPresenter::make($user),
            'mentorProfile' => MentorProfilePresenter::make(
                $user->mentorProfile
            ),
            'menteeProfile' => MenteeProfilePresenter::make(
                $user->menteeProfile
            ),
        ]);
    }
}
