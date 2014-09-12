<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css"/>
</head>
<body style="background-image: url('../images/home-wormhole1.gif'); background-repeat: no-repeat; background-size: 100%">
<br /><br /><br /><br /><br /><br /><br /><br />
<div class="container" style="opacity: 0.95">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">Login Form</div>
                <div class="panel-body">
                    {{ Form::open(array('route'=>'session.store', 'method'=>'post')) }}
                        {{ Form::token() }}
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" class="form-control" required>
                            <p class="help-block">
                                This is the username you signed up with. It is not your email.
                            </p>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" name="password" required>
                        </div>
                        @if(isset($messages))
                            <div style="color:red">{{ $messages }}</div>
                        @endif
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Login</button>
                            {{ HTML::linkRoute('user.create', 'Register a new account', array(), array('class'=>'pull-right')) }}
                        </div>
                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
</div>



<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.2/modernizr.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js"></script>

</body>
</html>