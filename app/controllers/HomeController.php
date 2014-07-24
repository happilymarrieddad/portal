<?php

class HomeController extends \BaseController {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {

        $name = '';

        if (Auth::check())
        {
            $name = 'Signed in as <a href="user/show" class="navbar-link">' . (Auth::user()->first_name ?: Auth::user()->email) . '</a>';

            $session = '<li><a href="logout">Logout</a></li>';
        }
        else
        {
            $session = '<li></li><li><a href="login">Login</a></li>';
        }

        $lists = News::all();

        return View::make('home.index')->with('lists', $lists)->with('session', $session)->with('name', $name);
    }

}
