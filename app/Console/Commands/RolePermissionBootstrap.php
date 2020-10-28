<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionBootstrap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'roles:bootstrap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create roles and permissions';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $roles = ["Super Admin", "Mentorship Manager", "User Manager", "Mentor", "Mentee"];

        $permissions = [
            "pair",
            "unpair",
            "manage-users",
            "assign-role",
            "unassign-role",
            "create-user",
            "update-user",
            "delete-user",
           
        ];

        $this->line('------------ Settting up roles:');

        foreach ($roles as $role) {
            $role = Role::updateOrCreate(['name' => $role, 'guard_name' => 'web']);
            $this->info("Created " . $role->name . " Role");
        }

        $this->line('------------- Setting up permissions:');

        $superAdminRole = Role::where('name', "Super Admin")->first();

        foreach ($permissions as $perm_name) {
            $permission = Permission::updateOrCreate(['name' => $perm_name,
                'guard_name' => 'web']);

            $superAdminRole->givePermissionTo($permission);

            $this->info("Created " . $permission->name . " Permission");

            $this->info("All permissions are granted to Super Admin");
            
        }

        // assign permissions to roles
        $mentorManager = Role::where('name', "Mentorship Manager")->first();
        $mentorManager->givePermissionTo("pair","unpair");

        $userManager = Role::where('name', "User Manager")->first();
        $userManager->givePermissionTo("manage-users", "assign-role","unassign-role", "create-user", "update-user", "delete-user", "pair", "unpair");

        // make test example Super Admin
        $testuser = User::where('email', "test@example.com")->first();
        $testuser->assignRole("Super Admin");

        $this->line('------------- Application bootstrapping is complete: \n');
    }
}
