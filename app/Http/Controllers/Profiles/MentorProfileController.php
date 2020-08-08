<?php

namespace App\Http\Controllers\Profiles;

use App\Http\Controllers\Controller;
use App\Models\MentorProfile;
use App\Models\User;
use App\Http\Requests\MentorProfileRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MentorProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Profiles/Mentor/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\MentorProfileRequest $request
     * @return \Illuminate\Http\Response
     */

    public function store(MentorProfileRequest $request)
    {

        // Creating a new Mentor model with the data from the form - turning camel case from frontend into snake case first.
        // Give this profile a 'Pending' status
        $validated = $request->validated(); 

        $h = resolve('\App\Helpers\GeneralHelper');
        $valsDB = $h->snakeArrayKeys($validated);

        $m = MentorProfile::make($valsDB);
        // temporary solution, turning array into string for now
        $interests = $request->interests ? implode(', ', $request->interests) : '';
        $m->interests = $interests;

        // Associate this Mentor model with the authenticated User
        $m->user()->associate(Auth::user());
        $m->save();

        // Sending a notification to the relevant CodeHub admins
        // to alert them that a new registration has taken place.

        // Redirect the user to /profiles.
        return Redirect::route('dashboard.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
