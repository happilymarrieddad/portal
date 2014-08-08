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
            <h1>Javascript 3D Programming</h1><br /><br />

            <div class="row">
            </div>
            <!--
            <div class="row">
                <h4>Cool One</h4>
                <div class="col-md-10 col-md-offset-1" id="jsbox0" style="height:400px;">
                </div>
            </div>

            <div class="row">
                <h4>Tester</h4>
                <div class="col-md-10 col-md-offset-1" id="jsbox1" style="height:400px;">
                </div>
            </div>
            -->
            <div class="row">
                <h4>Tester 2</h4>
                <div class="col-md-10 col-md-offset-1" id="jsbox2" style="height:400px">
                </div>
            </div>

        </div>
    </div>
</div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />&nbsp;

@stop


<!-- Scripts like Javascript -->
@section('scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.js"></script><!--
<script src="js/java3d/Detector.js"></script>
<script src="js/java3d/OrbitControls.js"></script>
<script src="js/java3d/Stats.js"></script>
<script src="js/java3d/FullScreen.js"></script>
<script src="js/java3d/THREEx.KeyboardState.js"></script>
<script src="js/java3d/THREEx.WindowResize.js"></script>
<script src="js/java3d/DeviceOrientationControls.js"></script>
<script src="js/java3d/EditorControls.js"></script>
<script src="js/java3d/FirstPersonControls.js"></script>
<script src="js/java3d/FlyControls.js"></script>
<script src="js/java3d/OculusControls.js"></script>
<script src="js/java3d/OrthographicTrackballControls.js"></script>
<script src="js/java3d/PointerLockControls.js"></script>-->
<script src="js/java3d/TrackballControls.js"></script>
<!--
<script src="js/java3d/TransformControls.js"></script>
<script src="js/java3d/VRControls.js"></script>-->
<script src="js/java3d/base.js"></script>
@stop