<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class MentorProfile extends Model
{
    protected $fillable = [
        'mentoring_experience',
        'interests',
        'skillset',
        'suitable_time',
        'extra_info',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function menteeProfiles()
    {
        return $this->belongsToMany(MenteeProfile::class);
    }

    public static function insertData($data)
    {
        $email = User::where('email', $data['email'])->get();
        if ($email->count() == 0) {
            $user = new User(
                [
                    'first_name' => $data['first_name'],
                    'last_name' => $data['last_name'],
                    'email' => $data['email'],
                    'password' => Hash::make('password'),
                ]);
            $user->save();

            $mentorArr = [];
            foreach ([
                'mentoring_experience',
                'interests',
                'skillset',
                'suitable_time',
                'extra_info',
            ] as $field) {
                $mentorArr[$field] = $data[$field];
            }
            $mentor = new MentorProfile($mentorArr);
            $mentor->user()->associate($user);
            $mentor->save();
        }
    }
}
