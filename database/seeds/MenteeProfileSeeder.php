<?php

use App\Models\MenteeProfile;
use Illuminate\Database\Seeder;

class MenteeProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(MenteeProfile::class, 15)->create();  
    }
}
