@extends('layouts.default')

@section('subnav')
<div class="panel panel-default">
    <div class="panel-heading">Admin Options</div>
    <div class="list-group">
        <a class="list-group-item @yield('nav-admin-show')" href="/admin/show/users">Edit Users</a>
        <a class="list-group-item @yield('nav-admin-permissions')" href="/admin/show/permissions">Edit Permissions</a>
    </div>
</div>
@stop