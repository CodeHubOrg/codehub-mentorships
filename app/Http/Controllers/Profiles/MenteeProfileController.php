<?php

namespace App\Http\Controllers\Profiles;

use App\Http\Controllers\Controller;
use App\Models\MenteeProfile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class MenteeProfileController extends Controller
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
        return Inertia::render('Profiles/Mentee/Create');
    }

    // Currently the $request parameter of this method
    // is typehinted as a regular Illuminate\Http\Request
    // We should create a MenteeProfileRequest form request class
    // - https://laravel.com/docs/7.x/validation#form-request-validation
    // that will hold our validation logic so that by the time the
    // data reaches this point, we know that it is valid

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //dd($request->all());
        // 
        $this->validator($request->all())->validate();

        // dd($r->errors());

        // Creating a new Mentee model with the data from the form.
        // Give this profile a 'Pending' status
        $m = MenteeProfile::create($request->validate([
            'currentStatus' => 'required',
            'previousExperience' => 'required',
            'interests' => '',
            'specificInterests' => '',
            'mentoringType' => '',
            'timeframe' => '',
            'suitableTime' => '',
            'extraInfo' => '',
            'status' => '',
        ]));

        // Associate this Mentee model with the authenticated User
        $m->user()->associate(Auth::user());
        $m->save();

        return Redirect::route('dashboard.index');
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Mentee $mentee)
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

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'currentStatus' => ['required'],
            'previousExperience' => ['required'],
            'interests' => '',
            'specificInterests' => '',
            'mentoringType' => '',
            'timeframe' => '',
            'suitableTime' => '',
            'extraInfo' => '',
            'status' => '',
        ]);
    }
}
