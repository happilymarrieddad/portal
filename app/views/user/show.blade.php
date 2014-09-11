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
                        <label for="firstname">First Name</label>
                        <input type="text" name="firstname" class="form-control" value="{{ $firstname }}">

                        <p class="hidden input-error">This is a required field.</p>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" class="form-control" name="lastname" value="{{ $lastname }}">

                        <p class="hidden input-error">This is a required field.</p>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" name="email" value="{{ $email }}">

                        <p class="hidden input-error">This is a required field.</p>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" class="form-control" name="phone" value="{{ $phone }}">

                        <p class="hidden input-error">This is a required field.</p>
                    </div>
                    <div class="form-group">
                        <label for="status">Status</label>
                        <select name="status" id="status" class="form-control">
                            <option value="Active">Active</option>
                        </select>
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