<?php

namespace App\Http\Controllers\Mentorships;

use App\Presenters\MenteeProfilePresenter;
use App\Presenters\MentorProfilePresenter;
use App\Presenters\UserPresenter;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MentorshipsController
{
    public function show()
    {

        $u = Auth::user();


        if (is_object($u)) {
            $u = UserPresenter::make($u);
        }

        $mentor = $u->mentorProfile ? MentorProfilePresenter::make($u->mentorProfile) : null;
        $mentee = $u->menteeProfile ? MentorProfilePresenter::make($u->menteeProfile) : null;

        $pairedMentors = $mentee ? $mentee->mentorProfiles : null;

        $pairedMentorlist = [];

        if ($pairedMentors) {
            $pairedMentorlist = $pairedMentors->map(function ($mentor) {
                return MentorProfilePresenter::make($mentor);
            });
        }

        $pairedMentees = $mentor ? $mentor->menteeProfiles : null;

        $pairedMenteelist = [];

        if ($pairedMentees) {
            $pairedMenteelist = $pairedMentees->map(function ($mentee) {
                return MenteeProfilePresenter::make($mentee);
            });
        }

        return Inertia::render('Mentorships/Show', [
            'pairedMentors' => $pairedMentorlist,
            'pairedMentees' => $pairedMenteelist,
        ]);
    }
}
