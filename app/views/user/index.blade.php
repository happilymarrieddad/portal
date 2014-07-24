// STORING TEMPLATE FOR LATER USE!!!


// Master Page \\
@extends('layouts.default')


// Title of Page \\
@section('title')
@stop


// Links (like stylesheets) \\
@section('links')
@stop


// Body Mods \\
@section('body')
<body class="" style="">
@stop


// Navigation Bar \\
@section('nav')
<li><a href="/home">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/tutorials">Tutorials</a></li>
<li><a href="/projects">Projects</a></li>
{{ $session }}
@stop


// Page Contents \\
@section('content')
@stop


// Scripts like Javascript \\
@section('scripts')
@stop