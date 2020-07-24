<?php

use App\Models\MentorProfile;
use Illuminate\Database\Seeder;

class MentorProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(MentorProfile::class, 10)->create();      	
    }
}
