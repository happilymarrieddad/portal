<?php

class ArticleController extends \BaseController {

    public function __construct()
    {
        $this->beforeFilter('auth', array('only'=>array('create', 'show', 'store', 'edit', 'update', 'destroy')));

    }

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
        $session = '<li><a href="logout">Logout</a></li>';

        $name = 'Signed in as <a href="user/show" class="navbar-link">' . (Auth::user()->first_name ?: Auth::user()->email) . '</a>';

        return View::make('article.create')->with('session', $session)->with('name', $name);
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
        try
        {
            $article = new Article();
            $article->name = Input::get('name');
            $article->article = Input::get('article');
            $article->type = Input::get('type');
            $article->save();

            return Redirect::route('tutorials.index');
        }catch(Exception $e)
        {
            return Redirect::back()->withInput();
        }

	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show()
	{
		try
        {

            return [1, Article::find(Input::get('id'))->article];

        }catch(Exception $e)
        {
            return [0, 'ERROR: ' . $e->getMessage() . ' at line ' . $e->getLine()];
        }
	}
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $session = '<li><a href="logout">Logout</a></li>';

        $name = 'Signed in as <a href="user/show" class="navbar-link">' . (Auth::user()->first_name ?: Auth::user()->email) . '</a>';

        $article = Article::find($id);

        return View::make('article.edit')->with('session', $session)->with('name', $name);
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
