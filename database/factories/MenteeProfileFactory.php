<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\MenteeProfile;
use App\Models\User;
use Faker\Generator as Faker;

$factory->define(MenteeProfile::class, function (Faker $faker) {

	$interests = ['PHP', 'JavaScript', 'TypeScript', 'React', 'Python', 'C#', 'Docker', 'Java', 'HTML/CSS', 'Data Science', 'DevOps'];
	$num = rand(2,6);
	$ints = implode(', ',$faker->randomElements($interests, $count = $num));

	$specific = ['TDD', 'Help with portfolio site', 'Career advice', 'No'];

	$timeframe = ['5 hrs', '10 hrs', '20 hrs', '30 hrs'];

	$times = ['Evenings', 'Monday to Wednesday evenings', 'Lunchtime and evenings'];

    return [
        'current_status' => $faker->realText,
        'previous_experience' => $faker->realText,
        'interests' => $ints,
        'specific_interests' => $faker->randomElement($specific),
        'mentoring_type' => $faker->randomElement(['Yes','No']),
        'timeframe' => $faker->randomElement($timeframe),
        'suitable_time' => $faker->randomElement($times),
        'extra_info' => $faker->realText
    ];
});

$factory->afterMaking(MenteeProfile::class, function($profile, $faker) {
	$u = factory(User::class)->make();
	$u->email = $faker->email;
	$u->save();
	$profile->user()->associate($u);
});

