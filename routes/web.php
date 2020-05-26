<?php

use App\Http\Controllers\Admin\Dashboard\AdminDashboardController;
use App\Http\Controllers\Dashboard\DashboardController;

Auth::routes();

// Marketing page routes
Route::view('/', 'marketing.home');

// User application routes
Route::get('/dashboard', [DashboardController::class, 'show']);


// Admin application routes
Route::get('/admin', [AdminDashboardController::class, 'index']);
