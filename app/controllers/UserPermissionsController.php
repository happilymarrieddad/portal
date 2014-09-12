<?php

class UserPermissionsController extends \BaseController {

    public function __construct()
    {
        $this->beforeFilter('admin', array('only' => array('store', 'destroy')));
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
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
        $userPermissions = UserPermission::where('user_id', '=', Input::get('user-id'))->where('permissions_id','=',Input::get('permission-id'))->delete();
		$up = new UserPermission();
        $up->user_id = Input::get('user-id');
        $up->permissions_id = Input::get('permission-id');
        $up->save();
        return Redirect::back();
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
     * @param $uid
     * @param $pid
     * @internal param int $id
     * @return Response
     */
	public function destroy($uid, $pid)
	{
        $userPermissions = UserPermission::where('user_id', '=', $uid)->where('permissions_id','=',$pid)->delete();


        return Redirect::back();
	}


}
