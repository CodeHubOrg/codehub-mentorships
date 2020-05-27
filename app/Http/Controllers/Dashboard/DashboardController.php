<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;

class DashboardController
{
    public function show()
    {
        return Inertia::render('Dashboard/Show');
    }
}
