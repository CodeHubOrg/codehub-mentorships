<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Presenters\UserPresenter;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class VerificationController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    use VerifiesEmails;

    /**
     * Where to redirect users after verification.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }

    public function show(Request $request)
    {
        // this function is just for the case that user
        // is logged in and wants to have verify email sent again.
        $user = Auth::user();

        if (is_object($user)) {
            $userdata = UserPresenter::make($user);
            // $user is logged in and verified user
            return $user->hasVerifiedEmail()
                ? Inertia::render('Home/Index', ['user' => $userdata])
                : Inertia::render('Auth/Verify/Index', ['user' => $userdata]);
        } else {
            // user not logged in and not been redirected from registration
            return redirect('/');
        }
    }

    /**
     * Mark the authenticated user's email address as verified.
     *
     * This is overwriting the method from VerifiesEmail trait of laravel/ui; user does not need to log in to verify email, will be logged in automaticallly
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function verify(Request $request)
    {
        $user = User::findOrFail($request->route('id'));
        Auth::login($user);

        if (! hash_equals((string) $request->route('hash'), sha1($user->getEmailForVerification()))) {
            throw new AuthorizationException;
        }

        if ($user->hasVerifiedEmail()) {
            return $request->wantsJson()
                        ? new Response('', 204)
                        : redirect($this->redirectPath());
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        if ($response = $this->verified($request)) {
            return $response;
        }

        return $request->wantsJson()

                    ? new Response('', 204)
                    : Inertia::render('Dashboard/Show', [
                        'user' => UserPresenter::make($user),
                        'justverified' => true,
                    ]);
    }

    public function resend(Request $request)
    {
        $id = $request->get('userid');
        $user = User::findOrFail($id);
        if (is_object($user)) {
            $user->sendEmailVerificationNotification();
            // when user has just been registered and they
            // click 'resend' they are redirected to
            // the Register page, I can't figure out why
            return Inertia::render('Auth/Verify/Index', ['user' => UserPresenter::make($user)]);
        }
    }
}
