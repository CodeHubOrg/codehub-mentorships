<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
