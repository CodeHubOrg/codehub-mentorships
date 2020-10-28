<?php

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;


class RolePermissionSeeder extends Seeder 
{
    public function run()
    {
        $roles = ['Super Admin', 'Mentorship Manager', 'User Manager', 'Mentor', 'Mentee'];

        $permissions = [
            'pair',
            'unpair',
            'manage-users',
            'assign-role',
            'unassign-role',
            'create-user',
            'update-user',
            'delete-user',
        ];

        echo '------------ Settting up roles:'.PHP_EOL;

        foreach ($roles as $role) {
            $role = Role::updateOrCreate(['name' => $role, 'guard_name' => 'web']);
            echo 'Created '.$role->name.' Role'.PHP_EOL;
        }

        echo '------------- Setting up permissions:'. PHP_EOL;

        $superAdminRole = Role::where('name', 'Super Admin')->first();

        foreach ($permissions as $perm_name) {
            $permission = Permission::updateOrCreate(['name' => $perm_name,
                'guard_name' => 'web', ]);

            $superAdminRole->givePermissionTo($permission);

            echo 'Created '.$permission->name.' Permission'.PHP_EOL;

            echo 'All permissions are granted to Super Admin'.PHP_EOL;
        }

        // assign permissions to roles
        $mentorManager = Role::where('name', 'Mentorship Manager')->first();
        $mentorManager->givePermissionTo('pair', 'unpair');

        $userManager = Role::where('name', 'User Manager')->first();
        $userManager->givePermissionTo('manage-users', 'assign-role', 'unassign-role', 'create-user', 'update-user', 'delete-user', 'pair', 'unpair');

        // make test example Super Admin
        $testuser = User::where('email', 'test@example.com')->first();
        $testuser->assignRole('Super Admin');

        echo '------------- Application bootstrapping is complete:'.PHP_EOL;
    }
}
