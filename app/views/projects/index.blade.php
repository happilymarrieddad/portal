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
<li class="active"><a href='#' class="dropdown-toggle" data-toggle="dropdown">Projects</a>
    <ul class="dropdown-menu">
        <li><a href="/projects">Projects</a></li>
        <li class="divider"></li>
        @foreach($projects as $project)
        <li><a href="{{$project->link}}">{{$project->name}}</a></li>
        @endforeach
    </ul>
</li>
{{ $session }}
@stop


@section('content')
<br />
<div class="row">
    <div class="col-md-12 text-center">
        <h1>Projects</h1>
        <h4>Green means it's complete. Orange means it's still in production. Red means the link isn't ready and won't work.</h4>
    </div>
</div>
<br />
<div class="row">
    <div class="col-md-12 text-center">
        @foreach($projects as $project)
        @if($project->active == 2)
        <a href="{{ $project->link }}" class="btn btn-md btn-success">[{{ $project->id }}] - {{ $project->name }}</a><br /><br />
        @elseif($project->active == 1)
        <a href="{{ $project->link }}" class="btn btn-md btn-warning">[{{ $project->id }}] - {{ $project->name }}</a><br /><br />
        @else
        <a href="{{ $project->link }}" class="btn btn-md btn-danger">[{{ $project->id }}] - {{ $project->name }}</a><br /><br />
        @endif
        @endforeach
    </div>
</div>
@stop


@section('scripts')
<script src="js/projects.js" type="application/javascript"></script>
@stop