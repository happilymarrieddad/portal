<?php
namespace Segfault\Composer;

use Illuminate\View\View;
use Illuminate\Support\Facades\Auth;

class UserComposer
{
    function compose(View $view)
    {
        $view->with([
            'id'             => Auth::id(),
            'username'       => Auth::user()->username,
            'firstname'      => Auth::user()->firstname,
            'lastname'       => Auth::user()->lastname,
            'email'          => Auth::user()->email,
            'receive_emails' => Auth::user()->receive_emails,
            'updated_at'     => Auth::user()->updated_at,
            'created_at'     => Auth::user()->created_at,
            'account_type'   => 'Super Admin'
        ]);
    }
}
