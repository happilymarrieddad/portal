@extends('layouts.admin')

@section('nav-admin-show') active @stop

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="panel panel-default">
            <div class="panel-heading">User Data</div>
            <div class="panel-body">
                @if($errors->has())
                @foreach ($errors->all() as $error)
                <div style="color:red">{{ $error }}</div>
                @endforeach
                @endif
                <div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <td class="text-center">Username</td>
                                <td class="text-center">Permissions</td>
                                <td class="text-center">Options</td>
                            </tr>
                        </thead>
                        <tbody>
                        @foreach($users as $user)
                            <tr>
                                <td class="text-center">{{$user->id}}</td>
                                <td class="text-center">{{$user->username}}</td>
                                <td class="text-center">
                                    @foreach($user_permissions as $up)
                                        @if($up->user_id == $user->id)
                                            @foreach($permissions as $permission)
                                                @if($permission->id == $up->permissions_id)
                                                    <a href="/userpermissions/destroy/{{$user->id}}/{{$permission->id}}">{{$permission->name}}</a> <br />
                                                @endif
                                            @endforeach
                                        @endif
                                    @endforeach
                                </td>
                                <td class="text-center">
                                    <a href="/user/destroy/{{$user->id}}">Delete</a>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="panel panel-default">
            <div class="panel-heading">Add Permissions to Users</div>
            <div class="panel-body">
                {{ Form::open(array('url'=>'/userpermissions/store','method'=>'post')) }}
                <div class="form-group">
                    <label for="name">User</label>
                    <select id="user-id" class="form-control" name="user-id">
                        @foreach($users as $user)
                        <option value="{{$user->id}}">{{$user->username}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="name">Permission Name</label>
                    <select id="permission-id" class="form-control" name="permission-id">
                        @foreach($permissions as $permission)
                        <option value="{{$permission->id}}">{{$permission->name}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
</div>
@stop