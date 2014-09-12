<?php
namespace Segfault\Composer;

use Illuminate\View\View;
use Illuminate\Support\Facades\Auth;
use User;
use Permission;
use UserPermission;

class UserComposer
{
    function compose(View $view)
    {
        $admin = false;
        $up = UserPermission::where('user_id', '=', Auth::id())->get();
        foreach($up as $u)
        {
            if(Permission::find($u->permissions_id)->name == 'SuperAdmin' || Permission::find($u->permissions_id)->name == 'Admin') $admin = true;
        }

        $view->with([
            'id'               => Auth::id(),
            'username'         => Auth::user()->username,
            'firstname'        => Auth::user()->firstname,
            'lastname'         => Auth::user()->lastname,
            'email'            => Auth::user()->email,
            'receive_emails'   => Auth::user()->receive_emails,
            'updated_at'       => Auth::user()->updated_at,
            'created_at'       => Auth::user()->created_at,
            'users'            => User::all(),
            'permissions'      => Permission::all(),
            'user_permissions' => UserPermission::all(),
            'admin'            => $admin
        ]);
    }
}
