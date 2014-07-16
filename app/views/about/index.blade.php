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
    <div class="col-md-3 col-md-offset-1 border" style="background-image:url('images/nick.jpg'); height:300px; width:300px; background-size: 100%; background-repeat: no-repeat">
    </div>
    <div class="col-md-6 col-md-offset-1 border">
        <p style="color:orange">
            I'm a software developer and this is my personal website. Feel free to look around and email me with any questions.
            I'm going to be creating more how-to develop videos. If you're interested in any of my projects, please let me know.
            If you enjoy the content on this website and you want more, please donate. Thanks!
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
                <li><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick">
                        <input type="hidden" name="hosted_button_id" value="B247PCUW7P22G">
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                    </form>
                </li>
            </ul>
        </div>
    </div>
</nav>
@stop


@section('scripts')
<script src="js/about.js" type="application/javascript"></script>
@stop