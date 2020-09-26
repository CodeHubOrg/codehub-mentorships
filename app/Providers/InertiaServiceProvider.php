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

                // attempt to use roles and permissions below, but the two lower
                // ones after a while disappear even if user is authorised

                // $user = Auth::user();

                // $nav = app(Navigation::class)
                //     ->add('Home', route('dashboard.index'))
                //     ->add('My Mentorships', route('mentorships.index'));
                // if (is_object($user) && $user->can('mange users')) {
                //     $nav->add('Manage users', route('admin.users.index'));
                // }
                // if (is_object($user) && $user->can('make mentorship pairing')) {
                //     $nav->add('Manage mentorships', route('admin.dashboard.index'));
                // }

                $nav = app(Navigation::class)
                    ->add('Home', route('dashboard.index'))
                    ->add('My Mentorships', route('mentorships.index'))                    
                    ->add('Manage users', route('admin.users.index'))
                    ->add('Manage mentorships', route('admin.dashboard.index'));

                return $nav->tree();
            },
        ]);
    }
}
