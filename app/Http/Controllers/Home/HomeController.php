<?php

namespace App\Http\Controllers\Home;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController
{
    public function show()
    {
<<<<<<< HEAD
        // on the frontend, using data from the auth user for now.
        // so we don't need to pass the user in
=======
    	// on the frontend, using data from the auth user for now. 
    	// so we don't need to pass the user in
>>>>>>> adding route for only verified users back in, also using the auth user from Inertia service provider, don't need to always pass it in
        return Inertia::render('Home/Index');
    }
}
