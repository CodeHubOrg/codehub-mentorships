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
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}