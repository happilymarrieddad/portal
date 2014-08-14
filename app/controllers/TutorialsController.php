<?php

class TutorialsController extends \BaseController {

    public function __construct()
    {
        $this->beforeFilter('auth', array('only'=>array('index')));

    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        $session = '<li><a href="logout">Logout</a></li>';

        $name = 'Signed in as <a href="user/show" class="navbar-link">' . (Auth::user()->first_name ?: Auth::user()->email) . '</a>';

        $ce = Article::where('type', '=', 'Computer Engineering')->get();
        if($ce->isEmpty()) $ce = array();
        $se = Article::where('type', '=', 'Software Engineering')->get();
        if($se->isEmpty()) $se = array();
        $books = Book::all();
        if($books->isEmpty()) $books = array();

        $projects = Project::all();

        if($projects->isEmpty())
            $projects = array();;

        return View::make('tutorials.index')->with('session', $session)->with('name', $name)->with('ce', $ce)->with('se', $se)->with('books', $books)->with('projects', $projects);
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
