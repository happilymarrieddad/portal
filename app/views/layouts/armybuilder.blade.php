<!DOCTYPE html>
<html>
<head>

    <title> @yield('title') </title>

    <!-- Bootstrap CDN links -->
    <link href="//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/slate/bootstrap.min.css" rel="stylesheet">

    @yield('links')

</head>
@yield('body')

<div class="navbar navbar-inverse" id="menu-main">
    <div class="navbar-collapse collapse navbar-responsive-collapse">
        <ul class="nav navbar-nav">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/tutorials">Tutorials</a></li>
            <li><a href='#' class="dropdown-toggle" data-toggle="dropdown">Projects</a>
                <ul class="dropdown-menu">
                    <li><a href="/projects">Back to Projects</a></li>
                    <li class="divider"></li>
                    @foreach($projects as $project)
                    @if($project->active == 2)
                    <li><a href="{{ $project->link }}" class="btn btn-md btn-success">[{{ $project->id }}] - {{ $project->name }}</a></li>
                    @elseif($project->active == 1)
                    <li><a href="{{ $project->link }}" class="btn btn-md btn-warning">[{{ $project->id }}] - {{ $project->name }}</a></li>
                    @else
                    <li><a href="#" class="btn btn-md btn-danger">[{{ $project->id }}] - {{ $project->name }}</a></li>
                    @endif
                    @endforeach
                </ul>
            </li>
            <li><a href="/logout">Logout</a></li>
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