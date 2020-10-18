<?php

namespace App\Http\Controllers\Mentorships;

use App\Presenters\UserPresenter;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MentorshipsController
{
    public function show()
    {
        //$h = resolve('\App\Helpers\GeneralHelper');

        $u = Auth::user();
        //$u->name = $u->Name;

        if (is_object($u)) {
            $u = UserPresenter($u);
        }

        $mentor = $u->mentorProfile ? $h->addCamelsToModel($u->mentorProfile) : null;
        $mentee = $u->menteeProfile ? $h->addCamelsToModel($u->menteeProfile) : null;

        $pairedMentors = $mentee ? $mentee->mentorProfiles : null;

        $pairedMentorlist = [];

        if ($pairedMentors) {
            foreach ($pairedMentors as $pairedmentor) {
                $attr['name'] = $pairedmentor->user->name;
                $attr['email'] = $pairedmentor->user->email;
                $attr['slackHandle'] = $pairedmentor->user->slack_handle;
                $pairedMentorlist[] = $attr;
            }
        }

        $pairedMentees = $mentor ? $mentor->menteeProfiles : null;

        $pairedMenteelist = [];

        if ($pairedMentees) {
            foreach ($pairedMentees as $mentee) {
                $attr['name'] = $mentee->user->name;
                $attr['email'] = $mentee->user->email;
                $attr['slackHandle'] = $mentee->user->slack_handle;
                $pairedMenteelist[] = $attr;
            }
        }

        return Inertia::render('Mentorships/Show', [
            'pairedMentors' => $pairedMentorlist,
            'pairedMentees' => $pairedMenteelist,
        ]);
    }
}
