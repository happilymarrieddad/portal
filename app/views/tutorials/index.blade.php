@extends('layouts.default')

@section('title')
Tutorials Page
@endsection


@section('links')
@endsection


@section('nav')
<li><a href="/home">Home</a></li>
<li><a href="/about">About</a></li>
<li class="active"><a href="/tutorials">Tutorials</a></li>
<li><a href="/projects">Projects</a></li>
@endsection


@section('content')
<br /><br />
<div class="row">
    <div class="col-md-12 text-center">
        Tutorials
    </div>
</div>
@endsection


@section('scripts')
<script src="js/tutorials.js" type="application/javascript"></script>
@endsection