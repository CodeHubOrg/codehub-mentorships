<?php

namespace App\Http\Controllers\Profiles;

use Inertia\Inertia;

class ProfilesController
{
    public function index()
    {
        // We'll need to grab the mentor and mentee profiles (if they exist)
        // for the currently authenticated user.  We'll then return these to the
        // view.

        return Inertia::render('Profiles/Index', [
            'mentor_profile' => null,
            'mentee_profile' => null,
        ]);
    }
}
