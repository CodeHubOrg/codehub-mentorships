<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Foundation\Auth\RedirectsUsers;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\Events\Verified;
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
        $u = Auth::user();
        if (is_object($u) && $u->hasVerifiedEmail()){
            // $u is logged in and verified user
            return Inertia::render('Home/Index', ['user' => $u]);
        } else {
        // otherwise, $u is logged-in user 
        // without verification, or null
        return Inertia::render('Auth/Verify/Index', ['user' => $u]); 
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

        $u = User::findOrFail($request->route('id'));
        Auth::login($u);

        if (! hash_equals((string) $request->route('hash'), sha1($u->getEmailForVerification()))) {
            throw new AuthorizationException;
        }

        if ($u->hasVerifiedEmail()) {
            return $request->wantsJson()
                        ? new Response('', 204)
                        : redirect($this->redirectPath());
        }

        if ($u->markEmailAsVerified()) {
            event(new Verified($u));
        }

        if ($response = $this->verified($request)) {
            return $response;
        }

        return $request->wantsJson()
                    ? new Response('', 204)
                    : redirect($this->redirectPath())->with('verified', true);
    }


    public function resend(Request $request)
    {
        $id = $request->get('userid');
        $u = User::findOrFail($id);
        if (is_object($u)){
            $u->sendEmailVerificationNotification();
            return Inertia::render('Auth/Verify/Index', ['user' => $u]);
        }
    }

}
