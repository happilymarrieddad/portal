@extends('layouts.default')

@section('title')
Home Page
@stop

@section('links')
@stop


@section('body')
<body>
@stop

@section('nav')
<li class="active"><a href="/home">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/tutorials">Tutorials</a></li>
<li><a href='#' class="dropdown-toggle" data-toggle="dropdown">Projects</a>
    <ul class="dropdown-menu">
        <li><a href="/projects">Projects</a></li>
        <li class="divider"></li>
        @foreach($projects as $project)
        @if($project->active == 2)
        <li><a href="{{ $project->link }}" class="btn btn-md btn-success">[{{ $project->id }}] - {{ $project->name }}</a></li>
        @elseif($project->active == 1)
        <li><a href="{{ $project->link }}" class="btn btn-md btn-warning">[{{ $project->id }}] - {{ $project->name }}</a></li>
        @else
        <li><a href="{{ $project->link }}" class="btn btn-md btn-danger">[{{ $project->id }}] - {{ $project->name }}</a></li>
        @endif
        @endforeach
    </ul>
</li>
{{ $session }}
@stop


@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center"><br />
            <span style="font-size:48px; color:orange; font-family: Arial">Segfault</span><br />
            <span class="text-default" style="font-size: 24px; font-family: fantasy; color: red;">... Superior Web Development ...</span><br />
        </div>
    </div><br /><br /><br />
    <div class="row">
        <div class="col-md-12">
            <div style="border-radius: 10px; background-color: whitesmoke; height: 500px; overflow-y: scroll; padding:25px;">

                <table class="table table-bordered">
                    <legend><h1>News</h1></legend>
                    <tbody>
                    @foreach($lists->reverse() as $list)
                        <tr><td><h4 style="color: blue">[{{$list->id}}] - {{$list->type}} - {{$list->message}}</h4></td></tr>
                    @endforeach
                    </tbody>
                </table>

            </div>
        </div>
    </div><br />&nbsp;
</div><br /><br />
<div class="container">&nbsp;</div>
@stop

@section('scripts')
<script src="js/home.js" type="application/javascript"></script>
@stop