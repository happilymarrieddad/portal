@extends('layouts.default')

@section('title')
Home Page
@endsection

@section('links')
@endsection


@section('nav')
<li class="active"><a href="/home">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/tutorials">Tutorials</a></li>
<li><a href="/projects">Projects</a></li>
@endsection


@section('content')
<div class="container" style="background-image: url('images/home-wormhole1.gif'); background-size: 100%">
    <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center"><br />
            <span class="text-warning" style="font-size:48px;">Segfault</span>
        </div>
    </div><br /><br /><br />
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-8 col-md-offset-2" style="border:2px solid white; border-radius: 5px; background-color: whitesmoke; height: 500px; overflow-y: scroll">

            </div>
        </div>
    </div><br />&nbsp;
</div><br /><br />
<div class="container">&nbsp;</div>
@endsection

@section('scripts')
<script src="js/home.js" type="application/javascript"></script>
@endsection