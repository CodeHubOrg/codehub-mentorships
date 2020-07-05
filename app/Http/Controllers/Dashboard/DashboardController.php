<?php

namespace App\Http\Controllers\Dashboard;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController
{
    public function show()
    {
        $u = Auth::user();
        return Inertia::render('Dashboard/Show', [
            'user' => $u]);
    }
}
