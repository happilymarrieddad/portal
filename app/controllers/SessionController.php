<?php

class SessionController extends \BaseController {

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('session.create');
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
        $username = Input::get('username');
        $password = Input::get('password');

        if(Auth::attempt(array('username'=>$username, 'password'=>$password))) return Redirect::route('home.index');
        else return Redirect::back()->withErrors(['messages'=>'Login failed... please try again!']);
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy()
	{
        Auth::logout();
        return Redirect::route('session.create');
	}


}
