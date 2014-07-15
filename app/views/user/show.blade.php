@extends('layouts.default')


@section('title')
@stop


@section('links')
@stop


@section('body')
<body class="" style="">
@stop


@section('nav')
<li><a href="/home">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/tutorials">Tutorials</a></li>
<li><a href="/projects">Projects</a></li>
{{ $session }}
@stop


@section('content')
<br /><br /><br />
<div class="row">
    <div class="col-md-6 col-md-offset-3">
        <table class="table">
            <legend>User Information <a href="user/edit">edit</a></legend>
            <thead>
                <tr><th>Name</th><th>Email</th><th>Account Type</th></tr>
            </thead>
            <tbody>
                <tr><td>{{ $user->first_name }} {{ $user->last_name }}</td><td>{{ $user->email }}</td><td>{{ $type }}</td></tr>
            </tbody>
        </table>
    </div>
</div>

@stop


@section('scripts')
@stop