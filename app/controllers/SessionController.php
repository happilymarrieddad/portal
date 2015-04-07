<?php

class SessionController extends \BaseController {

    public function __construct()
    {
        $this->beforeFilter('auth', array('only'=>array('destroy')));

    }

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('session.create')->with('msg', '');
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
        $input = Input::get();


        $attempt = Auth::attempt([
            'email'    => $input['email'],
            'password' => $input['password']
        ]);

        if($attempt)
        {
            $user = User::find(Auth::user()->id);
            $user->last_login = date('r');
            $user->save();
            return Redirect::route('home.index');
        }

        return View::make('session.create')->with('msg', '<span style="color: red">Login failed... please verify credentials</span>');

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

        return Redirect::intended('home');
	}


}
