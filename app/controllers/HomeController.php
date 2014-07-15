<?php

class HomeController extends \BaseController {

    public function __construct()
    {
        $this->beforeFilter('auth', array('only'=>array('')));

    }
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


    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        //
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        //
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }


}
