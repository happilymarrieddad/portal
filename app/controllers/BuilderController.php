<?php

class BuilderController extends \BaseController {

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


        $session = '<li><a href="logout">Logout</a></li>';

        $name = 'Signed in as <a href="user/show" class="navbar-link">' . (Auth::user()->first_name ?: Auth::user()->email) . '</a>';


        $cpu = Cpu::all();
        if($cpu->isEmpty()) $cpu = array();
        $mb = Mb::all();
        if($mb->isEmpty()) $mb = array();
        $psu = Psu::all();
        if($psu->isEmpty()) $psu = array();
        $ram = Ram::all();
        if($ram->isEmpty()) $ram = array();
        $case = Cas::all();
        if($case->isEmpty()) $case = array();
        $drive = Drive::all();
        if($drive->isEmpty()) $drive = array();
        $hdd = Hdd::all();
        if($hdd->isEmpty()) $hdd = array();
        $monitor = Monitor::all();
        if($monitor->isEmpty()) $monitor = array();


        return View::make('builder.create', ['name'=>$name,'session'=>$session,'cpu'=>$cpu,'mb'=>$mb,'psu'=>$psu,'ram'=>$ram,'case'=>$case,'drive'=>$drive,'hdd'=>$hdd,'monitor'=>$monitor, 'projects'=>Project::all()]);
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
