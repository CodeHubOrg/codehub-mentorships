<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\MentorProfile;
use App\Models\User;
use Faker\Generator as Faker;

$factory->define(MentorProfile::class, function (Faker $faker) {
    $exp = ['Yes (with CodeHub)', 'Yes (Elsewhere)', 'No'];

    $concepts = [
        'Specific Programming Language',
        'Specific Framework/Library',
        'Industry/Career Advice',
    ];

    $interests = ['PHP', 'JavaScript', 'TypeScript', 'React', 'Python', 'C#', 'Docker', 'Java', 'HTML/CSS', 'Data Science', 'DevOps'];
    $num = rand(2, 6);
    $ints = implode(', ', $faker->randomElements($interests, $count = $num));

    $times = ['Evenings', 'Monday to Wednesday evenings', 'Lunchtime and evenings'];

    return [
        'mentoring_experience' => $faker->randomElement($exp),
        'interests' => $faker->randomElement($concepts),
        'skillset' => $ints,
        'suitable_time' => $faker->randomElement($times),
        'extra_info' => $faker->realText,
    ];
});

$factory->afterMaking(MentorProfile::class, function ($profile, $faker) {
    $u = factory(User::class)->make();
    $u->email = $faker->email;
    $u->save();
    $profile->user()->associate($u);
});
