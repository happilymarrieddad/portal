@extends('layouts.user')

@section('nav-profile-index') active @stop

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="panel panel-default">
            <div class="panel-heading">Profile Data for {{ $username }}</div>
            <div class="panel-body">
                <form action="#">
                    {{ Form::token() }}
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" class="form-control" id="username" value="{{ $username }}" required>
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
                        <label for="receive_emails">Receive Emails</label>
                        <input type="checkbox" class="form-control" name="receive_email" id="receive_emails" @if({{ $receive_emails }}) checked @endif>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Save</button>
                        <button type="reset" class="btn btn-default">Reset</button>
                    </div>
                </form>
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