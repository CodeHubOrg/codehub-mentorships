<?php

namespace App\Http\Controllers\Profiles;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Mentee;
use App\Models\User;
//use App\Http\Requests\MenteeProfileRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;



class MenteeProfileController extends Controller
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
        
        $validated = $request->validate([
            'currentstatus' => 'required',
            'previousexp' => 'required',
            'mentortype' => '',
            'timeframe' => '',
            'suitabletime' => '',
            'extrainfo' => '',
            'status' => ''
        ]);
        

        // Creating a new Mentee model with the data from the form.
        // Give this profile a 'Pending' status
        $m = Mentee::create(
           $validated
        );
       
        // Associate this Mentee model with the authenticated User
        $u = Auth::user();
        $m->user()->associate($u)->save();
        // Sending a notification to the relevant CodeHub admins
        // to alert them that a new registration has taken place.

        // Redirect the user to /profiles.

        return Redirect::route('profiles.index');
    }
}
