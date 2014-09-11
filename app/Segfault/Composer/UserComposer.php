<?php
namespace Segfault\Composer;

use Illuminate\View\View;

class UserComposer
{
    function compose(View $view)
    {
        $view->with([
            'username'  => 'Mr. Bar',
            'firstname' => 'Foo',
            'lastname'  => 'Bar',
            'email'     => 'foo.bar@example.com',
            'phone'     => '111.222.33333',
            'status'    => 'active'
        ]);
    }
}
