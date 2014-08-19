<!-- Master Page -->
@extends('layouts.projects')


<!-- Title of Page -->
@section('title')
Angband 3D Project
@stop


<!-- Links (like stylesheets) -->
@section('links')
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
        <div class="col-md-8 col-md-offset-1">
            <table class="table table-horizontal">
                <legend><strong>Angband 3D</strong><br />(my screen shots do not reflect the actual graphics... for some reason I can't seem to get a good picture)</legend>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="col-md-8 col-md-offset-1">
                        <td>Initial Town Started</td>
                        <td>
                            I started the town using free models from Unity's asset store.<br /><br />
                            Goals
                            <ul class="list-group">
                                <li class="list-group-item" style="text-decoration: line-through;">1) Make town</li>
                                <li class="list-group-item">2) Create Sewer Lvl 1</li>
                                <li class="list-group-item">3) Add detail to town and sewer</li>
                                <li class="list-group-item">4) Add objects with animations</li>
                                <li class="list-group-item">5) Add townspeople</li>
                                <li class="list-group-item">6) Add monsters</li>
                                <li class="list-group-item">7) Create scripts</li>
                                <li class="list-group-item">8) Add objects</li>
                                <li class="list-group-item">9) ... (add more later when these are done)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class="col-md-8 col-md-offset-1">
                        <td>Main Town </td>
                        <td><img src="../images/unity/angband3d/MainTown.png" /></td>
                    </tr>
                    <tr class="col-md-8 col-md-offset-1">
                        <td>Sewer Entrance </td>
                        <td><img src="../images/unity/angband3d/SewerEntrance.png" /></td>
                    </tr>
                    <tr class="col-md-8 col-md-offset-1">
                        <td>Center of Town </td>
                        <td><img src="../images/unity/angband3d/CenterTown.png" /></td>
                    </tr>
                    <tr class="col-md-8 col-md-offset-1">
                        <td>Gate House </td>
                        <td><img src="../images/unity/angband3d/GateHouse.png" /></td>
                    </tr>
                    <tr class="col-md-8 col-md-offset-1">
                        <td>Sewer Wall </td>
                        <td> <img src="../images/unity/angband3d/SewerWall.png" /></td>
                    </tr>
                    <tr class="col-md-8 col-md-offset-1">
                        <td>Sewer Room </td>
                        <td><img src="../images/unity/angband3d/SewerRoom.png" /></td>
                    </tr>
                </tbody>
            </table>



        </div>
    </div>
</div>
@stop


<!-- Scripts like Javascript -->
@section('scripts')

@stop