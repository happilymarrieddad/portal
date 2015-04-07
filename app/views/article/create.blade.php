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
<br /><br />
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            {{ Form::open(array('route'=>'article.store')) }}
                <table class="table table-bordered">
                    <legend>Create Article</legend>
                    <tbody>
                        <tr class="form-group">
                            <td><label for="name">Article Name</label></td>
                            <td><input class="form-control" id="name" type="text" name="name" required /></td>
                        </tr>
                        <tr class="form-group">
                            <td><label for="article">Article</label></td>
                            <td><textarea class="form-control" id="article" name="article" rows="10" required="required"></textarea></td>
                        </tr>
                        <tr class="form-group">
                            <td><label for="type">Type</label></td>
                            <td><select class="form-control" id="type" name="type" required="required"><option selected>Computer Engineering</option><option>Software Engineering</option></select></td>
                        </tr>
                        <tr class="form-group">
                            <td></td>
                            <td><button type="submit" class="btn btn-md btn-warning">Publish</button></td>
                        </tr>
                    </tbody>
                </table>
            {{ Form::close() }}
        </div>
    </div>
</div>
@stop


@section('scripts')
@stop