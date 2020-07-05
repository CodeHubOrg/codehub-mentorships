<?php

namespace App\Http\Controllers\Profiles;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfilesController
{
    public function index()
    {
        $u = Auth::user();
        $mentor = $u->mentor;
        $mentee = $u->mentee;

        return Inertia::render('Profiles/Index', [
            'mentor_profile' => $mentor,
            'mentee_profile' => $mentee,
        ]);
    }
}
