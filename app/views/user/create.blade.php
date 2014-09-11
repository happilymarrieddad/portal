<!DOCTYPE html>
<html>
<head>
    <title>User Create Page</title>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css"/>
</head>
<body style="background-image: url('../images/home-wormhole1.gif'); background-repeat: no-repeat; background-size: 100%">
<br />
<div class="container" style="opacity: 0.95">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">Create A New User Account</div>
                <div class="panel-body">
                    {{ Form::open(array('route'=>'user.store', 'method'=>'post')) }}
                    {{ Form::token() }}
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" class="form-control" id="username" required>
                    </div><div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" class="form-control" required>
                        <p class="help-block">
                            Your password should be 8 characters, contain at least one number, and contain
                            at least one capital letter.
                        </p>
                    </div>
                    <div class="form-group">
                        <label for="password-confirm">Password Confirm</label>
                        <input type="password" class="form-control" name="password-confirm" id="password-confirm" required>
                    </div>
                    <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input type="text" name="firstname" id="firstname" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" class="form-control" name="lastname" id="lastname" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" name="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="receive_emails">Receive Emails</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" name="receive_email" id="receive_emails">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Save</button>
                        <button type="reset" class="btn btn-default">Reset</button>
                        {{ HTML::linkRoute('session.create', 'Back to Login', array(), array('class'=>'pull-right')) }}
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