<!-- Master Page -->
@extends('layouts.projects')


<!-- Title of Page -->
@section('title')
Java 3D Programming - Time
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
            <br />
            Time

            <div class="row">
                <div class="col-md-10 col-md-offset-1" id="jsbox" style="height:400px">
                </div>
            </div>
        </div>
    </div>
</div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />&nbsp;

@stop


<!-- Scripts like Javascript -->
@section('scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.min.js"></script>
<script src="../js/java3d/projects/p2.js"></script>
@stop