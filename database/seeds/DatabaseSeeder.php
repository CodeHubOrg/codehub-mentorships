<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(MentorProfileSeeder::class);
        $this->call(MenteeProfileSeeder::class);
        $this->call(RolePermissionSeeder::class);
    }
}
