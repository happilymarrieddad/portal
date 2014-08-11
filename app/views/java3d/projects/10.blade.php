<!-- Master Page -->
@extends('layouts.projects')


<!-- Title of Page -->
@section('title')
Java 3D Programming - Keyboard Interaction
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
            Keyboard Interaction - Please press a key<br /><br />
            Key Pressed:<span id="letter">d</span><br />
            Cube Controls: W S A D Q E<br />
            Camera Controls: I K J L U P + - F<br />
            Cube X = <span id="cube-x"></span><br />
            Cube Y = <span id="cube-y"></span><br />
            Cube Z = <span id="cube-z"></span><br />
            Camera X = <span id="camera-x"></span><br />
            Camera Y = <span id="camera-y"></span><br />
            Camera Z = <span id="camera-z"></span><br />

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
<script src="../js/java3d/projects/p10.js"></script>
@stop