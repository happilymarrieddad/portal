@extends('layouts.default')

@section('title')
Home Page
@stop

@section('links')
@stop


@section('body')
<body style="background-color: black">
@stop

@section('nav')
<li class="active"><a href="/home">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/tutorials">Tutorials</a></li>
<li><a href="/projects">Projects</a></li>
{{ $session }}
@stop


@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center"><br />
            <span class="text-warning" style="font-size:48px;">Segfault</span><br />
            <span class="text-default" style="font-size: 24px;">Where 2 + 2 = 5 .... for very large values of 2</span>
        </div>
    </div><br /><br /><br />
    <div class="row">
        <div class="col-md-12">
            <div style="border-radius: 10px; background-color: whitesmoke; height: 500px; overflow-y: scroll; padding:25px;">

                <table class="table table-vertical">
                    <legend><h1>News</h1></legend>
                    <tbody>
                    @foreach($lists as $list)
                        <tr><td><h4 style="color: orange">[{{$list->id}}] - {{$list->type}} - {{$list->message}}</h4></td></tr>
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