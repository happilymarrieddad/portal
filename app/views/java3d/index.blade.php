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

            <br /><br />
            @foreach($projects->reverse() as $project)
            @if($project->active)
            <a href="{{$project->link}}">[{{$project->id}}] - {{$project->name}}</a><br /><br />
            @endif
            @endforeach

            <div class="row">
            </div>

        </div>
    </div>
</div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />&nbsp;

@stop


<!-- Scripts like Javascript -->
@section('scripts')
<!--
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.js"></script>
<script src="js/java3d/threejs/Detector.js"></script>
<script src="js/java3d/threejs/OrbitControls.js"></script>
<script src="js/java3d/threejs/Stats.js"></script>
<script src="js/java3d/threejs/FullScreen.js"></script>
<script src="js/java3d/threejs/THREEx.KeyboardState.js"></script>
<script src="js/java3d/threejs/THREEx.WindowResize.js"></script>
<script src="js/java3d/threejs/DeviceOrientationControls.js"></script>
<script src="js/java3d/threejs/EditorControls.js"></script>
<script src="js/java3d/threejs/FirstPersonControls.js"></script>
<script src="js/java3d/threejs/ImprovedNoise.js"></script>
<script src="js/java3d/threejs/FlyControls.js"></script>
<script src="js/java3d/threejs/OculusControls.js"></script>
<script src="js/java3d/threejs/OrthographicTrackballControls.js"></script>
<script src="js/java3d/threejs/PointerLockControls.js"></script>
<script src="js/java3d/threejs/TrackballControls.js"></script>
<script src="js/java3d/threejs/TransformControls.js"></script>
<script src="js/java3d/threejs/VRControls.js"></script>
<script src="js/java3d/threejs/.js"></script>
-->
@stop