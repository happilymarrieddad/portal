@extends('layouts.sessions')


@section('title')
Create User Account
@stop


@section('links')
@stop


@section('body')
<body class="" style="background-color:black">
@stop


@section('content')
<br /><br /><br />

<!-- Login Form -->
{{ Form::open(array('route'=>'user.store', 'method'=>'post', 'role'=>'form')) }}
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <table class="table table-bordered" style="background-color: whitesmoke">
                <legend>New Account</legend>
                <tbody>
                <tr class="form-group">
                    <td>
                        <label for="fname">First Name</label>
                        <input type="text" name="fname" id="fname" class="form-control" placeholder="John" required/>
                    </td>
                </tr>
                <tr class="form-group">
                    <td>
                        <label for="lname">Last Name</label>
                        <input type="text" name="lname" id="lname" class="form-control" placeholder="Doe" required/>
                    </td>
                </tr>
                <tr class="form-group">
                    <td>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" class="form-control" placeholder="johndoe@email.com" required/>
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
                        <label for="cpassword">Confirm Password</label>
                        <input type="password" name="cpassword" id="cpassword" class="form-control" required />
                        <span style="color:red" id="error" class="help-block">{{ $error }}</span>
                    </td>
                </tr>
                <tr class="form-group">
                    <td>
                        <button type="submit" class="btn btn-md btn-primary">Register</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
{{ Form::close() }}
@stop


@section('scripts')
@stop