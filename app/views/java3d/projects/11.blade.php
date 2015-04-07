<!-- Master Page -->
@extends('layouts.projects')


<!-- Title of Page -->
@section('title')
Java 3D Programming - Landscape
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
            Landscape

            <div class="row">
                X:<span id="x"></span><br />
                Y:<span id="y"></span><br />
                Z:<span id="z"></span><br />
                Controls: W A S D Q E<br />
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
<script src="../js/java3d/threejs/FirstPersonControls.js"></script>
<script src="../js/java3d/threejs/ImprovedNoise.js"></script>
<script src="../js/java3d/threejs/Detector.js"></script>
<script src="../js/java3d/projects/p11.js"></script>
@stop