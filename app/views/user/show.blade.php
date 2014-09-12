@extends('layouts.user')

@section('nav-profile-index') active @stop

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="panel panel-default">
            <div class="panel-heading">Profile Data for {{ $username }}</div>
            <div class="panel-body">
                {{ Form::open(array('url'=>'/user/update/profile', 'method'=>'post')) }}
                    {{ Form::token() }}
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" class="form-control" id="username" value="{{ $username }}" readonly>
                    </div>
                    <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input type="text" name="firstname" id="firstname" class="form-control" value="{{ $firstname }}" required>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" class="form-control" name="lastname" value="{{ $lastname }}" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" name="email" value="{{ $email }}" required>
                    </div>
                    <div class="form-group">
                        <label for="updated_at">Last Updated</label>
                        <input type="text" class="form-control" value="{{date($updated_at)}}" readonly />
                    </div>
                    <div class="form-group">
                        <label for="receive_emails">Receive Emails</label>
                        @if($receive_emails)
                        <select id="receive_emails" name="receive_emails" >
                            <option value="1" selected>Yes</option>
                            <option value="0">No</option>
                        </select>
                        @else
                        <select id="receive_emails" name="receive_emails" >
                            <option value="1">Yes</option>
                            <option value="0" selected>No</option>
                        </select>
                        @endif
                    </div>
                    @if($errors->has())
                        @foreach ($errors->all() as $error)
                            <div style="color:red">{{ $error }}</div>
                        @endforeach
                    @endif
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Save</button>
                        <button type="reset" class="btn btn-default">Reset</button>
                    </div>
                {{ Form::close() }}
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="panel panel-default">
            <div class="panel-heading">Administrator</div>
            <ul class="list-group">
                <li class="list-group-item">Can View User Roles</li>
                <li class="list-group-item">Can View Permissions</li>
                <li class="list-group-item">Can View Roles</li>
                <li class="list-group-item">Can Link Roles</li>
                <li class="list-group-item">Can Unlink Roles</li>
            </ul>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Operations Manager</div>
            <ul class="list-group">
                <li class="list-group-item">Can View User Roles</li>
                <li class="list-group-item">Can View Permissions</li>
                <li class="list-group-item">Can View Roles</li>
                <li class="list-group-item">Can Link Roles</li>
                <li class="list-group-item">Can Unlink Roles</li>
            </ul>
        </div>
    </div>
</div>
@stop