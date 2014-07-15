@extends('layouts.default')

@section('title')
About Page
@stop


@section('links')
<link rel="stylesheet" type="text/css" href="css/about.css">
@stop


@section('body')
<body class="" style="">
@stop


@section('nav')
<li><a href="/home">Home</a></li>
<li class="active"><a href="/about">About</a></li>
<li><a href="/tutorials">Tutorials</a></li>
<li><a href="/projects">Projects</a></li>
{{ $session }}
@stop


@section('content')
<br />
<div class="row">
    <div class="col-md-3 col-md-offset-1">
        <h1>Nick Kotenberg</h1>
    </div>
</div>
<br />
<div class="row">
    <div class="col-md-3 col-md-offset-1 border image">

    </div>
    <div class="col-md-6 col-md-offset-1 border">
        <p style="color:orange">
            I'm a software developer and this is my personal website. Feel free to look around and email me with any questions. I'm going to be creating more how-to develop videos. If you're interested in any of my projects, please let me know. Thanks!
        </p>
    </div>
</div>



<nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
        <div class="navbar-header">
            <ul class="nav navbar-nav">
                <li><a href="https://www.youtube.com/channel/UCRlz06nPWywubixXkRFOOtQ/playlists">Youtube Videos</a></li>
                <li><a href="https://www.facebook.com/nkotenberg">Facebook</a></li>
                <li><a href="https://www.linkedin.com/pub/nick-kotenberg-%E2%88%83-%E3%83%8B%E3%83%83%E3%82%AF/80/925/238">Linkedin</a></li>
            </ul>
        </div>
    </div>
</nav>
@stop


@section('scripts')
<script src="js/about.js" type="application/javascript"></script>
@stop