<?php

namespace composers\Composer;

use Illuminate\View\View;
use Illuminate\Support\Facades\Auth;

class UserComposer
{
    function compose(View $view)
    {
        if(Auth::check()) {
            $view->with([
                'id'           => Auth::user()->id,
                'username'     => Auth::user()->username,
                'email'        => Auth::user()->email,
                'first_name'   => Auth::user()->first_name,
                'last_name'    => Auth::user()->last_name,
            ]);
        }
        else {
            $view->with([
            ]);
        }
    }
}

