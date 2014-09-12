@extends('layouts.user')

@section('nav-profile-password') active @stop

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="panel panel-default">
            <div class="panel-heading">Change password for {{ $username }}</div>
            <div class="panel-body">
                {{ Form::open(array('url'=>'/user/update/password', 'method'=>'post')) }}
                    {{ Form::token() }}
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" class="form-control" value="">

                        <p class="help-block">
                            Your password should be 8 characters, contain at least one number, and contain
                            at least one capital letter.
                        </p>

                        <p class="help-block hidden input-error">This is a required field.</p>
                    </div>
                    <div class="form-group">
                        <label for="password-confirm">Password Confirm</label>
                        <input type="password" class="form-control" name="password-confirm" id="password-confirm" value="">

                        <p class="hidden input-error">This must match the above field</p>
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
</div>
@stop

@section('scripts')
<script src="js/user/password.js"></script>
@stop