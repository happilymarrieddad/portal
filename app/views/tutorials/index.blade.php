@extends('layouts.default')

@section('title')
Tutorials Page
@stop


@section('links')
@stop


@section('body')
<body class="" style="">
@stop


@section('nav')
<li><a href="/home">Home</a></li>
<li><a href="/about">About</a></li>
<li class="active"><a href="/tutorials">Tutorials</a></li>
<li><a href="/projects">Projects</a></li>
{{ $session }}
@stop


@section('content')
<br /><br />
<div class="row">
    <div class="col-md-12 text-center">
        Tutorials
    </div>
</div>
@stop


@section('scripts')
<script src="js/tutorials.js" type="application/javascript"></script>
@stop