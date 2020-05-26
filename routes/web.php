<?php

use App\Http\Controllers\Admin\Dashboard\AdminDashboardController;
use App\Http\Controllers\Marketing\HomePageController;

Auth::routes();

// Marketing page routes
Route::view('/', 'marketing.home');

// User application routes

// Admin application routes
Route::get('/admin', [AdminDashboardController::class, 'index']);
