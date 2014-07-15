@extends('layouts.default')

@section('title')
Projects Page
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
<li class="active"><a href="/projects">Projects</a></li>
{{ $session }}
@stop


@section('content')
<br />
<div class="row">
    <div class="col-md-12 text-center">
        <h1>Projects (links will be working soon)</h1>
    </div>
</div>
<br />
<div class="row">
    <div class="col-md-12 text-center">
        @foreach($projects as $project)
        <a href="{{ $project->link }}" class="btn btn-md btn-warning">[{{ $project->id }}] - {{ $project->name }}</a><br /><br />
        @endforeach
    </div>
</div>
@stop


@section('scripts')
<script src="js/projects.js" type="application/javascript"></script>
@stop