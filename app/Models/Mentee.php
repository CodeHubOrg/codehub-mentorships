<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;


class Mentee extends Model

{
	protected $fillable = [
		'currentstatus',
		'previousexp',
		'mentortype',
		'timeframe',
		'suitabletime',
		'extrainfo',
		'status'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}
}