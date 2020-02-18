<?php

namespace App\Http\Controllers\Admin\Dashboard;

use Inertia\Inertia;

class AdminDashboardController
{

    public function index()
    {
        return Inertia::render('Admin/Dashboard/Index', [
            'message' => 'Hello world',
            'button' => 'click me'
        ]);
    }
}
