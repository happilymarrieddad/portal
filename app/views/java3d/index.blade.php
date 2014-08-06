<!-- Master Page -->
@extends('layouts.projects')


<!-- Title of Page -->
@section('title')
Java 3D Programming
@stop


<!-- Links (like stylesheets) -->
@section('links')
<style> canvas { width: 100%; height: 100% }</style>
@stop


<!-- Body Mods -->
@section('body')
<body class="" style="">
@stop


<!-- Page Contents -->
@section('content')
<br /><br />
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1 text-center">
            <h1>Javascript 3D Programming</h1>
            <div class="col-md-4 col-md-offset-4" id="jsbox">
            </div>
        </div>
    </div>
</div>

@stop


<!-- Scripts like Javascript -->
@section('scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.js"></script>
<script src="js/java3d/base.js"></script>
@stop