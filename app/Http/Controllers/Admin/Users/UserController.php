<?php

namespace App\Http\Controllers\Admin\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
   
    public function index() 
    {
        // tried with user presenter but did not manage in a way
        // that wasn't slow
        $users = User::all()->map(function($user, $key) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'slackHandle' => $user->slack_handle,
                'role' => $user->roles->count() > 0 ? $user->roles->first()->only('id','name') : null  
            ];
        });


        $roles = Role::where('name', '!=', "Super Admin")->get()->map(function($role, $key) {return ['id' => $role->id, 'name' => $role->name];});

        return Inertia::render('Admin/Users/Index', ['users' => $users, 'roles' => $roles]);
    }

    public function editUser(Request $request)
    {
        $user = User::findOrFail($request->get('userId'));
        $roleId = $request->get('roleId');     

        if ($roleId != "not set") {            
            $role = Role::findOrFail($roleId);
            $user->syncRoles([$role->name]);
        } else {
            // remove all roles
            $user->syncRoles([]);
        }
  
        return Redirect::route('admin.users.index');
    }
 
}
