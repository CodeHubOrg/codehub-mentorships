<?php

namespace App\Http\Controllers\Profiles;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneralProfileController
{
    // check whether to use this controller or different one
    // for updating the user profile; so far just showing
    // the form for updating

    public function edit()
    {
        return Inertia::render('Profiles/General/Edit');
    }

    public function store(Request $request)
    {
    }
}
