@extends('layouts.admin')

@section('nav-admin-permissions') active @stop

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="panel panel-default">
            <div class="panel-heading">Permission Data</div>
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
                            <td class="text-center">Name</td>
                            <td class="text-center">Options</td>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($permissions as $permission)
                        <tr>
                            <td class="text-center">{{$permission->id}}</td>
                            <td class="text-center">{{$permission->name}}</td>
                            <td class="text-center">
                                <a href="/permission/destroy/{{$permission->id}}">Delete</a>
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
            <div class="panel-heading">Add Permission</div>
            <div class="panel-body">
                {{ Form::open(array('route'=>'permission.store','method'=>'post')) }}
                <div class="form-group">
                    <label for="name">Permission Name</label>
                    <input class="form-control" type="text" name="name" id="name" />
                </div>
                <div class="form-group">
                     <button type="submit" class="btn btn-primary">Add</button>
                    <button type="reset" class="btn btn-default">Reset</button>
                </div>
            </div>
        </div>
    </div>
</div>
@stop