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
        <div class="col-md-10 col-md-offset-1">
            <table class="table table-horizontal">
                <legend><strong>Angband 3D</strong><br />(my screen shots do not reflect the actual graphics... for some reason I can't seem to get a good picture)</legend>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Initial Town Started</td>
                        <td>
                            I started the town using free models from Unity's asset store.<br />
                            Goals
                            <ul>
                                <li>1) Make town</li>
                                <li>2) Create Sewer Lvl 1</li>
                                <li>3) Add detail to town and sewer</li>
                                <li>4) Add objects with animations</li>
                                <li>5) Add townspeople</li>
                                <li>6) Add monsters</li>
                                <li>7) Create scripts</li>
                                <li>8) Add objects</li>
                                <li>9) ... (add more later when these are done)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Main Town </td>
                        <td><img src="../images/unity/angband3d/MainTown.png" /></td>
                    </tr>
                    <tr>
                        <td>Sewer Entrance </td>
                        <td><img src="../images/unity/angband3d/SewerEntrance.png" /></td>
                    </tr>
                    <tr>
                        <td>Center of Town </td>
                        <td><img src="../images/unity/angband3d/CenterTown.png" /></td>
                    </tr>
                    <tr>
                        <td>Gate House </td>
                        <td><img src="../images/unity/angband3d/GateHouse.png" /></td>
                    </tr>
                    <tr>
                        <td>Sewer Wall </td>
                        <td> <img src="../images/unity/angband3d/SewerWall.png" /></td>
                    </tr>
                    <tr>
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