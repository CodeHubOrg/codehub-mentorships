<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mentor extends Model
{
    protected $fillable = [
        'mentorexp',
        'interests',
        'skillsets',
        'suitabletime',
        'extrainfo'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
