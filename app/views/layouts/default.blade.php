<!DOCTYPE html>
<html>
<head>

    <title> @yield('title') </title>

    <!-- Bootstrap CDN links -->
    <link href="//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/spacelab/bootstrap.min.css" rel="stylesheet">

    @yield('links')

</head>
@yield('body')

    <div class="navbar navbar-inverse">
        <div class="navbar-collapse collapse navbar-responsive-collapse">
            <ul class="nav navbar-nav">
                @yield('nav')
            </ul>
            <p class="navbar-text navbar-right">
                {{ $name }}
            </p>
        </div>
    </div>

    @yield('content')

    <!-- jQuery CDN links -->
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

    <!-- Latest compiled and minified JavaScript -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>


    @yield('scripts')

</body>
</html>