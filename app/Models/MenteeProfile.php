<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class MenteeProfile extends Model
{
    protected $fillable = [
        'current_status',
        'previous_experience',
        'interests',
        'specific_interests',
        'mentoring_type',
        'timeframe',
        'suitable_time',
        'extra_info',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mentorProfiles()
    {
        return $this->belongsToMany(MentorProfile::class);
    }

    public static function insertData($data) {
        $email = User::where('email', $data['email'])->get();
        if($email->count() == 0){
            $user = new User(
                [
                    'first_name' => $data['first_name'], 
                    'last_name' => $data['last_name'],
                    'email' => $data['email'],
                    'password' => Hash::make('password')
                ]);
            $user->save();

            $menteeArr = [];
            foreach ([
                'current_status',
                'previous_experience',
                'interests',
                'specific_interests',
                'mentoring_type',
                'timeframe',
                'suitable_time',
                'extra_info',
            ] as $field) {
               $menteeArr[$field] = $data[$field];
            }
            $mentee = new MenteeProfile($menteeArr);
            $mentee->user()->associate($user);
            $mentee->save();
        }
    }
}
