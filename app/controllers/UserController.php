<?php

class UserController extends \BaseController {

    public function __construct()
    {
        $this->beforeFilter('auth', array('only'=>array('index', 'edit', 'show', 'update', 'destroy')));

    }

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
        $session = '<li></li><li><a href="login">Login</a></li>';

		return View::make('user.create')->with('session', $session)->with('name', '')->with('error', '');
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();

        if($input['password'] != $input['cpassword'])
        {
            $session = '<li></li><li><a href="login">Login</a></li>';

            return View::make('user.create')->with('session', $session)->with('name', '')->with('error', 'Passwords must match.');
        }

        $user = new User;
        $user->first_name = $input['fname'];
        $user->last_name = $input['lname'];
        $user->email = $input['email'];
        $user->type = 2;
        $user->password = Hash::make($input['password']);
        $user->save();

        return Redirect::intended('login');

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
	 * @return Response
	 */
	public function destroy()
	{

        User::where('email', '=', Auth::user()->email)->first()->delete();


        return Redirect::intended('home');
	}


}
