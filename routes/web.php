<?php

use App\Http\Controllers\Account\AccountController;
use App\Http\Controllers\Admin\Dashboard\AdminDashboardController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Home\HomeController;
use App\Http\Controllers\Mentorships\MentorshipsController;
use App\Http\Controllers\Profiles\GeneralProfileController;
use App\Http\Controllers\Profiles\MenteeProfileController;
use App\Http\Controllers\Profiles\MentorProfileController;

Auth::routes(['verify' => true]);

Route::name('auth.')
    ->group(function () {
        Route::get('/login', [LoginController::class, 'create'])
            ->name('login.create')
            ->middleware('guest');
        Route::post('/login', [LoginController::class, 'store'])
            ->name('login.store')
            ->middleware('guest');
        Route::delete('/logout', [LoginController::class, 'destroy'])
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
    ->middleware(['auth'])
    ->name('dashboard.index');

// Mymentorships routes
Route::get('/mentorships', [MentorshipsController::class, 'show'])
    ->middleware(['auth'])
    ->name('mentorships.index');

// this is where the user is redirected to after email verification
Route::get('/home', [HomeController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('home.index');

Route::name('account.')
    ->prefix('account')
    ->group(function () {
        Route::get('/', [AccountController::class, 'edit'])
            ->name('edit');
    });

Route::name('profiles.')
    ->prefix('profiles')
    ->middleware('auth')
    ->group(function () {
        // should we have the GeneralProfileController ?

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
        Route::post('/', [AdminDashboardController::class, 'store'])
            ->name('dashboard.store');
    });
