<?php

namespace App\Http\Controllers\Profiles;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MenteeProfileController
{

    public function create()
    {
        return Inertia::render('Profiles/Mentee/Create');
    }

    // Currently the $request parameter of this method
    // is typehinted as a regular Illuminate\Http\Request
    // We should create a MenteeProfileRequest form request class
    // - https://laravel.com/docs/7.x/validation#form-request-validation
    // that will hold our validation logic so that by the time the
    // data reaches this point, we know that it is valid
    public function store(Request $request)
    {
        // Creating a new Mentee model with the data from the form.
        // Give this profile a 'Pending' status

        // Associate this Mentee model with the authenticated User

        // Sending a notification to the relevant CodeHub admins
        // to alert them that a new registration has taken place.

        // Redirect the user to /profiles.
    }
}
