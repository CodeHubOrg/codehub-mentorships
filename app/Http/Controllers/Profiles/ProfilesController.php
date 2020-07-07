<?php

namespace App\Http\Controllers\Profiles;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfilesController
{
    public function index()
    {
        $u = Auth::user();

        return Inertia::render('Profiles/Index', [
            'mentor_profile' => $u->mentorProfile,
            'mentee_profile' => $u->menteeProfile,
        ]);
    }
}
