<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class createSuperuser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:superuser';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a superuser command';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $email = env('SUPERUSER_EMAIL', 'mentoring@codehub.org.uk');

        $user = User::where(['email' => $email])->first();

        if (! $user) {
            $user = new User();
            $user->name = 'Superuser';
            $user->email = $email;
        } else {
            $this->info('Superuser already exists. Resetting password...');
        }

        $pass = Str::random(30);
        $user->password = Hash::make($pass);
        $user->save();

        $this->line('Superuser Created.');
        $this->info('Email: '.$user->email);
        $this->info('Password: '.$pass);
    }
}
