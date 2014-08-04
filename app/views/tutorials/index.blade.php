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
<br />
<div class="row">
    <div class="text-center">
        <button style="display:none" class="btn btn-sm btn-danger" id="alert-error"></button>
        <button class="btn btn-sm btn-info" id="alert-loading">Loading Systems...</button>
        <button style="display:none" class="btn btn-sm btn-success" id="alert-success"></button>
    </div>
</div>
<br />
<div class="row" id="title">
    <div class="col-md-12">
        <h1 class="text-center">Tutorials</h1>
        <h6 class="text-center"><a href="article/create"><span style="color:green; font-size: 8px;">publish tutorial</span></a></h6><hr><br />

        <div class="panel col-md-3" style="position:fixed; top:270px; left:35px; padding:20px; border-radius: 10px; background-color: whitesmoke">
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                Computer Engineering
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                        <div class="panel-body">
                            <ul id="computer-engineering" style="list-style: none">
                                @foreach($ce as $ce)
                                <li><a href="#" data-id="{{$ce->id}}">{{$ce->name}}</a></li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                Software Engineering
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                        <div class="panel-body">
                            <ul id="software-engineering" style="list-style: none">
                                @foreach($se as $se)
                                <li><a href="#" data-id="{{$se->id}}">{{$se->name}}</a></li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel">
                <h5>Resources &nbsp;&nbsp;&nbsp;<a href="#"><span style="color:green; font-size: 8px;">add resource</span></a></h5>
                <ul>
                    @foreach($books as $book)
                    <li><a href="{{ $book->link }}" target="_blank">{{ $book->name }}</a></li>
                    @endforeach
                </ul>
            </div>
        </div>

        <div class="panel col-md-7 col-md-offset-4" style="padding:10px; border-radius: 10px;">
            <p style="background-color: whitesmoke; padding: 10px; border-radius: 10px;" id="articles-page">
                I'm going to strive to describe the interactions between hardware and software. I hope to provide a resource for
                those who are interested in learning about engineering, with respect to computers. When complete, you will be able to go from
                individual circuits to the most complex software with the understanding needed to create your own projects. Instead of providing
                a linear experience, I'm going to modularize the whole process with a few short required readings in the beginning. If there is a
                topic you are interested in, please email me and let me know. I'm going to start with basic storage and circuit interaction and then
                go to software. I will stay on the software side unless I get an email about hardware. Anyways, thanks for taking the time to read and
                I look forward to your input. <br /><br />

                - Nick
            </p>
        </div>

    </div>
</div>
@stop


@section('scripts')
<script src="js/tutorials.js" type="application/javascript"></script>
@stop