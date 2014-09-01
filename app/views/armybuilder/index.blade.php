<!-- Master Page -->
@extends('layouts.armybuilder')


<!-- Title of Page -->
@section('title')
Seg-Fault - Army Builder v0.0010
@stop


<!-- Links (like stylesheets) -->
@section('links')
<link href="//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/slate/bootstrap.min.css" rel="stylesheet">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<link href="css/armybuilder.css" rel="stylesheet" type="text/css" />
@stop


<!-- Body Mods -->
@section('body')
<body class="" style="">
@stop


<!-- Page Contents -->
@section('content')
<nav class="navbar navbar-default" role="navigation" id="menu-army" >
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/projects" id="button-home">Army Builder</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <!-- MENU -->
            <ul class="nav navbar-nav">

                <!--
                RED   - NOT WORKING ON
                BLUE  - WORKING ON
                GREEN - COMPLETE
                -->

                <!-- Warhammer Fantasy -->
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle myFakeClass" data-toggle="dropdown"> Warhammer Fantasy <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a id="button-beastmen" style="color:red">Beastmen</a></li>
                        <li><a id="button-bretonnia" style="color:red">Bretonnia</a></li>
                        <li><a id="button-fdaemons" style="color:red">Daemons of Chaos</a></li>
                        <li><a id="button-darkelves" style="color:red">Dark Elves</a></li>
                        <li><a id="button-dwarfs" style="color:red">Dwarfs</a></li>
                        <li><a id="button-highelves" style="color:red">High Elves</a></li>
                        <li><a id="button-lizardmen" style="color:red">Lizardmen</a></li>
                        <li><a id="button-ogre" style="color:red">Ogre Kingdoms</a></li>
                        <li><a id="button-orcsgoblins" style="color:red">Orcs & Goblins</a></li>
                        <li><a id="button-skaven" style="color:red">Skaven</a></li>
                        <li><a id="button-empire" style="color:red">The Empire</a></li>
                        <li><a id="button-tombkings" style="color:red">Tomb Kings</a></li>
                        <li><a id="button-vampire" style="color:red">Vampire Counts</a></li>
                        <li><a id="button-chaoswarriors" style="color:red">Warriors of Chaos</a></li>
                        <li><a id="button-woodelves" style="color:red">Wood Elves</a></li>
                    </ul>
                </li>

                <!-- Warhammer 40k -->
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle myFakeClass" data-toggle="dropdown"> Warhammer 40,000 <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a id="button-sororitas" style="color:red">Adepta Sororitas</a></li>
                        <li><a id="button-militarum" style="color:blue">Astra Militarum</a></li>
                        <li><a id="button-bloodangels" style="color:red">Blood Angels</a></li>
                        <li><a id="button-kdaemons" style="color:red">Chaos Daemons</a></li>
                        <li><a id="button-chaosmarines" style="color:red">Chaos Space Marines</a></li>
                        <li><a id="button-darkangels" style="color:red">Dark Angels</a></li>
                        <li><a id="button-darkeldar" style="color:red">Dark Eldar</a></li>
                        <li><a id="button-eldar" style="color:red">Eldar</a></li>
                        <li><a id="button-greyknights" style="color:red">Grey Knights</a></li>
                        <li><a id="button-inquisition" style="color:red">Inquisition</a></li>
                        <li><a id="button-imperialknights" style="color:red">Imperial Knights</a></li>
                        <li><a id="button-assassinorum" style="color:red">Officio Assassinorum</a></li>
                        <li><a id="button-tempestus" style="color:red">Militarum Tempestus</a></li>
                        <li><a id="button-necrons" style="color:red">Necrons</a></li>
                        <li><a id="button-orks" style="color:red">Orks</a></li>
                        <li><a id="button-spacemarines" style="color:red">Space Marines</a></li>
                        <li><a id="button-spacewolves" style="color:red">Space Wolves</a></li>
                        <li><a id="button-tau" style="color:red">Tau Empire</a></li>
                        <li><a id="button-tyranids" style="color:red">Tyranids</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="nav navbar-nav pull-right">
                <li>
                    <button id="button-slide-main" type="button" class="btn btn-sm" style="background-color: inherit; border: none">Main Menu<span class="caret"></span></button>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="row">
    <div class="col-md-2 col-md-offset-5">
        <button id="button-slide-army" type="button" class="btn btn-sm" style="background-color: inherit; border: none; display: none; font-size: 12px">New Army</button>
        <button id="button-clear-army" type="button" class="btn btn-sm pull-right" style="background-color: inherit; border: none; display: none; font-size: 12px">Clear</button>
    </div>
</div>

<!-- Messaging System -->
<div class="row">
    <div class="text-center">
        <button style="display:none" class="btn btn-sm btn-danger" id="alert-error"></button>
        <button class="btn btn-sm btn-info" id="alert-loading">Loading Systems...</button>
        <button style="display:none" class="btn btn-sm btn-success" id="alert-success"></button>
    </div>
</div><br />

<div class="container build" id="build-system">

    <div class="row build" id="build-points">
        <div class="col-md-10 col-md-offset-1 panel" style="height: 100px; padding: 20px">
            <div class="form-group">
                <div class="col-sm-6 col-sm-offset-3 text-center row">
                    <span id="army-title"></span>
                </div><br />
                <label for="totalpoints">Army Points</label>
                <input type="text" size="6" id="input-points" />

                <div class="pull-right">
                    <div class="row">
                        Points Left: &nbsp;&nbsp;&nbsp;<span class="pull-right" id="display-left" style="color:green">0</span>
                    </div>
                    <div class="row">
                        Points Used: &nbsp;&nbsp;&nbsp;<span class="pull-right" id="display-used" style="color:red">0</span>
                    </div>
                    <div class="row">
                        Total Units: &nbsp;&nbsp;&nbsp;<span class="pull-right" id="display-totalunits" style="color:white">0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row build" id="build-army">

        <!-- Left Menu -->
        <div class="col-md-3 panel" style="overflow-y: scroll">
            @include('armybuilder.lfantasy')
            @include('armybuilder.lfourtyk')
        </div>

        <!-- Right Menu -->
        <div class="col-md-8 col-md-offset-1 panel" style="height: 600px; overflow-y: scroll">
            @include('armybuilder.rfantasy')
            @include('armybuilder.rfourtyk')
        </div>
    </div>
</div>
@stop


<!-- Scripts like Javascript -->
@section('scripts')
<!-- Main Script -->
<script src="js/armybuilder/functions.js"></script>
<script src="js/armybuilder/page.js"></script>

<!-- 40k scripts -->
<script src="js/armybuilder/fourtyk/sororitas.js"></script>
<script src="js/armybuilder/fourtyk/militarum.js"></script>
<script src="js/armybuilder/fourtyk/bloodangels.js"></script>
<script src="js/armybuilder/fourtyk/daemons.js"></script>
<script src="js/armybuilder/fourtyk/chaosmarines.js"></script>
<script src="js/armybuilder/fourtyk/darkangels.js"></script>
<script src="js/armybuilder/fourtyk/darkeldar.js"></script>
<script src="js/armybuilder/fourtyk/eldar.js"></script>
<script src="js/armybuilder/fourtyk/greyknights.js"></script>
<script src="js/armybuilder/fourtyk/inquisition.js"></script>
<script src="js/armybuilder/fourtyk/imperialknights.js"></script>
<script src="js/armybuilder/fourtyk/assassinorum.js"></script>
<script src="js/armybuilder/fourtyk/tempestus.js"></script>
<script src="js/armybuilder/fourtyk/necrons.js"></script>
<script src="js/armybuilder/fourtyk/orks.js"></script>
<script src="js/armybuilder/fourtyk/spacemarines.js"></script>
<script src="js/armybuilder/fourtyk/spacewolves.js"></script>
<script src="js/armybuilder/fourtyk/tau.js"></script>
<script src="js/armybuilder/fourtyk/tyranids.js"></script>

<!-- Fantasy scripts -->
<script src="js/armybuilder/fantasy/beastmen.js"></script>
<script src="js/armybuilder/fantasy/bretonnia.js"></script>
<script src="js/armybuilder/fantasy/daemons.js"></script>
<script src="js/armybuilder/fantasy/darkelves.js"></script>
<script src="js/armybuilder/fantasy/dwarfs.js"></script>
<script src="js/armybuilder/fantasy/highelves.js"></script>
<script src="js/armybuilder/fantasy/lizardmen.js"></script>
<script src="js/armybuilder/fantasy/ogre.js"></script>
<script src="js/armybuilder/fantasy/orcs.js"></script>
<script src="js/armybuilder/fantasy/skaven.js"></script>
<script src="js/armybuilder/fantasy/empire.js"></script>
<script src="js/armybuilder/fantasy/tombkings.js"></script>
<script src="js/armybuilder/fantasy/vampire.js"></script>
<script src="js/armybuilder/fantasy/warriors.js"></script>
<script src="js/armybuilder/fantasy/woodelves.js"></script>

<!-- Final scripts -->
<script src="js/armybuilder/startup.js"></script>

@stop