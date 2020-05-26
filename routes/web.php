<?php

use App\Http\Controllers\Admin\Dashboard\AdminDashboardController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Profiles\MenteeProfileController;
use App\Http\Controllers\Profiles\MentorProfileController;

Auth::routes();

// Marketing page routes
Route::view('/', 'marketing.home');

// User application routes
Route::get('/dashboard', [DashboardController::class, 'show']);

Route::namespace('Profiles')
    ->name('profiles.')
    ->prefix('profiles')
    ->group(function () {
        Route::get('/mentor/new', [MentorProfileController::class, 'create'])
            ->name('mentor.create');
        Route::post('/mentor/new', [MentorProfileController::class, 'store'])
            ->name('mentor.store');
        Route::get('/mentee/new', [MenteeProfileController::class, 'create'])
            ->name('mentee.create');
        Route::post('/mentee/new', [MenteeProfileController::class, 'store'])
            ->name('mentee.store');
    });

// Admin application routes
Route::get('/admin', [AdminDashboardController::class, 'index']);
