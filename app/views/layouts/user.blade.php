@extends('layouts.default')

@section('subnav')
<div class="panel panel-default">
    <div class="panel-heading">Profile Options</div>
    <div class="list-group">
        <a class="list-group-item @yield('nav-profile-index')" href="/user/show/profile">Edit Profile</a>
        <a class="list-group-item @yield('nav-profile-password')" href="/user/show/password">Change Password</a>
    </div>
</div>
@stop