@extends('layouts.sessions')

@section('title')
Login Page
@stop

@section('content')
<br /><br /><br /><br /><br /><br /><br />

<!-- Login Form -->
{{ Form::open(array('route'=>'sessions.store', 'method'=>'post')) }}
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <table class="table">
                    <legend>Please login in to your account</legend>
                    <tbody>
                    <tr class="form-group">
                        <td>
                            <label for="email">Email</label>
                            <input type="email" name="email" id="name" class="form-control" placeholder="johndoe@email.com" required/>
                        </td>
                    </tr>
                    <tr class="form-group">
                        <td>
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" class="form-control" required />
                        </td>
                    </tr>
                    <tr class="form-group">
                        <td>
                            <button type="submit" class="btn btn-md btn-primary">Login</button>&nbsp;&nbsp;&nbsp;<a href="create" style="color:red">Register a new account</a>
                        </td>
                    </tr>
                    <tr>
                        <td>{{ $msg }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
{{ Form::close() }}
@stop