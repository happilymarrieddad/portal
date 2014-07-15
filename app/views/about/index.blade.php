@extends('layouts.default')

@section('title')
About Page
@stop


@section('links')
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
<br /><br />
<div class="row">
    <div class="col-md-12 text-center">
        About
    </div>
</div>
@stop


@section('scripts')
<script src="js/about.js" type="application/javascript"></script>
@stop