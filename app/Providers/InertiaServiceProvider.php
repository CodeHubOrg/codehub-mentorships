<?php

namespace App\Providers;

use App\Presenters\UserPresenter;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Spatie\Navigation\Navigation;

class InertiaServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::share([
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
            'old' => function () {
                return Session::get('_old_input');
            },
            'auth' => function () {
                return [
                    'user' => UserPresenter::make(Auth::user())
                        ->preset('summary')
                        ->get(),
                ];
            },
            'nav' => function () {
                return app(Navigation::class)
                    ->add('Home', route('dashboard.index'))
                    //->add('My Profiles', '#')
                    ->add('My Mentorships', route('mentorships.index'))
                    ->tree();
            },
        ]);
    }
}
