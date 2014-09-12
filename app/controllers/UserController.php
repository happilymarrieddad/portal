<?php

class UserController extends \BaseController {

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
		return View::make('user.create');
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();
        if($input['password'] != $input['password-confirm']) return Redirect::back()->withInput();

        $validator = Validator::make(
            array(
                'username'      => $input['username'],
                'password'      => $input['password'],
                'firstname'     => $input['firstname'],
                'lastname'      => $input['lastname'],
                'email'         => $input['email']
            ),
            array(
                'username'      => 'required|unique:users|min:4',
                'password'      => 'required|min:8|max:60',
                'firstname'     => 'required|min:2|max:60',
                'lastname'      => 'required|min:2|max:60',
                'email'         => 'required|email'
            )
        );

        if($validator->fails()) return Redirect::back()->withErrors($validator->messages())->withInput();

        $user = new User();
        $user->username = $input['username'];
        $user->password = Hash::make($input['password']);
        $user->firstname = $input['firstname'];
        $user->lastname = $input['lastname'];
        $user->email = $input['email'];
        $user->created_at = time();
        $user->updated_at = time();
        try { if(isset($input['receive_emails'])) $user->receive_emails = true;
        }catch(Exception $e) { $user->receive_emails = false; }

        $user->save();

        return Redirect::route('session.create');
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		if($id=='profile') return View::make('user.show');
        else if($id=='password') return View::make('user.password');
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
        if($id=='profile')
        {
            $input = Input::all();

            $validator = Validator::make(
                array(
                    'firstname'     => $input['firstname'],
                    'lastname'      => $input['lastname'],
                    'email'         => $input['email']
                ),
                array(
                    'firstname'     => 'required|min:2|max:60',
                    'lastname'      => 'required|min:2|max:60',
                    'email'         => 'required|email'
                )
            );

            if($validator->fails()) return Redirect::back()->withErrors($validator->messages())->withInput();

            $user = User::find(Auth::id());
            $user->firstname = $input['firstname'];
            $user->lastname = $input['lastname'];
            $user->email = $input['email'];
            $user->updated_at = time();
            try { if(isset($input['receive_emails'])) $user->receive_emails = true;
            }catch(Exception $e) { $user->receive_emails = false; }

            $user->save();

            return Redirect::back();
        }
        else if($id=='password')
        {
            if(Input::get('password') != Input::get('password-confirm')) return Redirect::back()->withErrors(['errors'=> ['Passwords dont match']]);

            $user = User::find(Auth::id());
            $user->password = Hash::make(Input::get('password'));
            $user->save();

            return View::make('user.password')->withErrors(['errors'=>['Password saved successfully!']]);
        }
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$user = User::find($id);
        $user->delete();
        return Redirect::back();
	}


}
