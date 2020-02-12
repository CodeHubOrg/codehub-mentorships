<?php

use App\Http\Controllers\Admin\Dashboard\AdminDashboardController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin', [AdminDashboardController::class, 'index']);
