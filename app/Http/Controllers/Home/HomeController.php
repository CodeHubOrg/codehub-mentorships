<?php

namespace App\Http\Controllers\Home;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController
{
    public function show()
    {
        return Inertia::render('Home/Index', [
            'user' => Auth::user(),
        ]);
    }
}
