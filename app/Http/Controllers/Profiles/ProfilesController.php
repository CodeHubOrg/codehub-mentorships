<?php

namespace App\Http\Controllers\Profiles;

use App\Http\Controllers\Controller;
use App\Models\Mentee;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
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
