<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\MenteeProfile;
use App\Models\MentorProfile;
use App\Models\MentorProfileMenteeProfile;
use App\Models\User;
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

        $pairedMentor = $mentee ? MentorProfileMenteeProfile::where('mentee_profile_id', $mentee->id)->value('mentor_profile_id') : null;
        $pairedMentorUserID = MentorProfile::where('id', $pairedMentor)->value('user_id');
        $pairedMentor = User::where('id', $pairedMentorUserID)->get();

        $pairedMentees = $mentor ? MentorProfileMenteeProfile::where('mentor_profile_id', $mentor->id)->pluck('mentee_profile_id') : null;
        if ($pairedMentees) {
            foreach ($pairedMentees as $pairedMentee) {
                $pairedMenteeUserID = MenteeProfile::where('id', $pairedMentee)->value('user_id');
                $pairedMentee = User::find($pairedMenteeUserID);

                $attr['name'] = $pairedMentee->name;
                $attr['email'] = $pairedMentee->email;
                $attr['slackHandle'] = $pairedMentee->slack_handle;
                $pairedMenteelist[] = $attr;
            }
        }

        return Inertia::render('Dashboard/Show', [
            'user' => $u,
            'mentorProfile' => $mentor,
            'menteeProfile' => $mentee,
            'pairedMentor' => $pairedMentor,
            'pairedMentees' => $pairedMenteelist,
        ]);
    }
}
