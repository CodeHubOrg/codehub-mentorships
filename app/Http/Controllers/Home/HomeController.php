<?php

namespace App\Http\Controllers\Home;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController
{
    public function show()
    {
    	// on the frontend, using data from the auth user for now. 
    	// so we don't need to pass the user in
        return Inertia::render('Home/Index');
    }
}
