<?php

use App\Http\Controllers\Admin\Dashboard\AdminDashboardController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Profiles\GeneralProfileController;
use App\Http\Controllers\Profiles\MenteeProfileController;
use App\Http\Controllers\Profiles\MentorProfileController;
use App\Http\Controllers\Profiles\ProfilesController;

Route::name('auth.')
    ->group(function () {
        Route::get('/login', [LoginController::class, 'create'])
            ->name('login.create')
            ->middleware('guest');
        Route::post('/login', [LoginController::class, 'store'])
            ->name('login.store')
            ->middleware('guest');
        Route::post('/logout', [LoginController::class, 'destroy'])
            ->name('login.destroy')
            ->middleware('auth');
        Route::get('/register', [RegisterController::class, 'create'])
            ->name('register.create')
            ->middleware('guest');
        Route::post('/register', [RegisterController::class, 'store'])
            ->name('register.store')
            ->middleware('guest');
    });

// Marketing page routes
Route::view('/', 'marketing.home');

// User application routes
Route::get('/dashboard', [DashboardController::class, 'show'])
    ->middleware('auth')
    ->name('dashboard.index');

Route::name('profiles.')
    ->prefix('profiles')
    ->middleware('auth')
    ->group(function () {
        Route::get('/', [ProfilesController::class, 'index'])
            ->name('index');
        // should we have the GeneralProfileController ?
        Route::get('/general/edit', [GeneralProfileController::class, 'edit'])
            ->name('general.edit');
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
Route::name('admin.')
    ->prefix('admin')
    ->middleware('auth')
    ->group(function () {
        Route::get('/', [AdminDashboardController::class, 'index'])
            ->name('dashboard.index');
    });
