<?php

namespace App\Http\Controllers\Account;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController
{
    public function edit()
    {
        return Inertia::render('Account/Edit');
    }

    public function update(Request $request)
    {
    }
}
