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
        <div class="col-md-8 col-md-offset-2">
            <table class="table table-horizontal">
                <legend><strong>Angband 3D</strong><br />
                    <span style="font-size: 12px;">(my screen shots do not reflect the actual graphics... for some reason I can't seem to get a good picture)</span>
                </legend>
                <tbody>
                    <tr class="col-md-8 col-md-offset-1">
                        <td>Initial Town Started</td>
                        <td>
                            I started the town using free models from Unity's asset store.<br /><br />
                            Goals <br />
                            <span style="font-size: 10px;">(Green = Complete, Blue = Working On, Red = Incomplete)</span>
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-info">1) Make town</li>
                                <li class="list-group-item list-group-item-danger">2) Create Sewer Lvl 1</li>
                                <li class="list-group-item list-group-item-danger">3) Add detail to town and sewer</li>
                                <li class="list-group-item list-group-item-danger">4) Add objects with animations</li>
                                <li class="list-group-item list-group-item-danger">5) Add townspeople</li>
                                <li class="list-group-item list-group-item-danger">6) Add monsters</li>
                                <li class="list-group-item list-group-item-danger">7) Create scripts</li>
                                <li class="list-group-item list-group-item-danger">8) Add objects</li>
                                <li class="list-group-item list-group-item-danger">9) ... (add more later when these are done)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class="col-md-8 col-md-offset-1">
                        <td>Basic Terrain (I restarted so I could have a good starting terrain)</td>
                        <td><img width="600" src="../images/unity/angband3d/BasicTerrain.png" /></td>
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