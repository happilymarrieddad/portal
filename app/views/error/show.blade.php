@extends('layouts.default')


@section('title')
@stop


@section('links')
@stop


@section('body')
<body class="" style="">
@stop


@section('nav')
<li><a href="/home">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/tutorials">Tutorials</a></li>
<li><a href="/projects">Projects</a></li>
{{ $session }}
@stop


@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12 text-center">
            <br /><br /><br /><br />
            <h3>ERROR {{ $id }}: {{ $message }}</h3>
        </div>
    </div>
</div>

@stop


@section('scripts')
@stop