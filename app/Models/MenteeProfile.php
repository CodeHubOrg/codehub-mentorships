<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
