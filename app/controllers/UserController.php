<?php

class UserController extends \BaseController {

    public function __construct()
    {
        $this->beforeFilter('auth', array('only'=>array('show', 'destroy', 'edit', 'update')));

    }


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
        $session = '<li></li><li><a href="login">Login</a></li>';

        $projects = Project::all();

        if($projects->isEmpty())
            $projects = array();;

		return View::make('user.create')->with('session', $session)->with('name', '')->with('error', '')->with('projects', $projects);
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();

        $projects = Project::all();

        if($projects->isEmpty())
            $projects = array();;

        if($input['password'] != $input['cpassword'])
        {
            $session = '<li></li><li><a href="login">Login</a></li>';

            return View::make('user.create')->with('session', $session)->with('name', '')->with('error', 'Passwords must match.')->with('projects', $projects);
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
	public function show()
	{
        $session = '<li><a href="logout">Logout</a></li>';

        $name = 'Signed in as <a href="user/show" class="navbar-link">' . (Auth::user()->first_name ?: Auth::user()->email) . '</a>';

        $user = User::find(Auth::user()->id);

        $role = Role::find($user->type);

        $projects = Project::all();

        if($projects->isEmpty())
            $projects = array();;

        return View::make('user.show')->with('session', $session)->with('name', $name)->with('user', $user)->with('type', $role->type )->with('projects', $projects);
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

    public function edit()
    {
        $session = '<li><a href="logout">Logout</a></li>';

        $name = 'Signed in as <a href="user/show" class="navbar-link">' . (Auth::user()->first_name ?: Auth::user()->email) . '</a>';

        $user = User::find(Auth::user()->id);

        $projects = Project::all();

        if($projects->isEmpty())
            $projects = array();;

        return View::make('user.edit')->with('session', $session)->with('name', $name)->with('user', $user)->with('projects', $projects);
    }

    public function update()
    {
        if(Input::get('password') != Input::get('cpassword'))
        {
            return Redirect::back();
        }

        $user = User::find(Auth::user()->id);
        $user->first_name = Input::get('fname');
        $user->last_name = Input::get('lname');
        $user->email = Input::get('email');
        $user->password = Hash::make(Input::get('password'));
        $user->save();

        return Redirect::route('user.show');
    }

}
