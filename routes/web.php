<?php

use App\Http\Controllers\Admin\Dashboard\AdminDashboardController;

Route::get('/', function () {
    return view('welcome');
});


// Auth
Route::get('login')->name('login')->uses('Auth\LoginController@showLoginForm')->middleware('guest');
Route::post('login')->name('login.attempt')->uses('Auth\LoginController@login')->middleware('guest');
Route::post('logout')->name('logout')->uses('Auth\LoginController@logout');

Route::get('register')->name('register')->uses('Auth\RegisterController@showRegistrationForm')->middleware('guest');

// Dashboard
Route::get('/admin', [AdminDashboardController::class, 'index']);

// 
Route::get('/home', 'HomeController@index')->name('home');
