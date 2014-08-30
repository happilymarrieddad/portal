<!-- Master Page -->
@extends('layouts.armybuilder')


<!-- Title of Page -->
@section('title')
Seg-Fault - Army Builder
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
            <a class="navbar-brand" href="#" id="button-home">Army Builder</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <!-- MENU -->
            <ul class="nav navbar-nav">
                <!-- Warhammer Fantasy -->
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle myFakeClass" data-toggle="dropdown"> Warhammer Fantasy <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a id="button-beastmen">Beastmen</a></li>
                        <li><a id="button-bretonnia">Bretonnia</a></li>
                        <li><a id="button-fdaemons">Daemons of Chaos</a></li>
                        <li><a id="button-darkelves">Dark Elves</a></li>
                        <li><a id="button-dwarfs">Dwarfs</a></li>
                        <li><a id="button-highelves">High Elves</a></li>
                        <li><a id="button-lizardmen">Lizardmen</a></li>
                        <li><a id="button-ogre">Ogre Kingdoms</a></li>
                        <li><a id="button-orcsgoblins">Orcs & Goblins</a></li>
                        <li><a id="button-skaven">Skaven</a></li>
                        <li><a id="button-empire">The Empire</a></li>
                        <li><a id="button-tombkings">Tomb Kings</a></li>
                        <li><a id="button-vampire">Vampire Counts</a></li>
                        <li><a id="button-chaoswarriors">Warriors of Chaos</a></li>
                        <li><a id="button-woodelves">Wood Elves</a></li>
                    </ul>
                </li>

                <!-- Warhammer 40k -->
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle myFakeClass" data-toggle="dropdown"> Warhammer 40,000 <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a id="button-sororitas">Adepta Sororitas</a></li>
                        <li><a id="button-militarum">Astra Militarum</a></li>
                        <li><a id="button-bloodangels">Blood Angels</a></li>
                        <li><a id="button-kdaemons">Chaos Daemons</a></li>
                        <li><a id="button-chaosmarines">Chaos Space Marines</a></li>
                        <li><a id="button-darkangels">Dark Angels</a></li>
                        <li><a id="button-darkeldar">Dark Eldar</a></li>
                        <li><a id="button-eldar">Eldar</a></li>
                        <li><a id="button-greyknights">Grey Knights</a></li>
                        <li><a id="button-inquisition">Inquisition</a></li>
                        <li><a id="button-imperialknights">Imperial Knights</a></li>
                        <li><a id="button-assassinorum">Officio Assassinorum</a></li>
                        <li><a id="button-tempestus">Militarum Tempestus</a></li>
                        <li><a id="button-necrons">Necrons</a></li>
                        <li><a id="button-orks">Orks</a></li>
                        <li><a id="button-spacemarines">Space Marines</a></li>
                        <li><a id="button-spacewolves">Space Wolves</a></li>
                        <li><a id="button-tau">Tau Empire</a></li>
                        <li><a id="button-tyranids">Tyranids</a></li>
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
        <button id="button-slide-army" type="button" class="btn btn-sm" style="background-color: inherit; border: none; display: none; font-size: 12px">Start Over &nbsp;<span class="caret"></span></button>
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
                    </div>

            </div>
        </div>
    </div>

    <div class="row build" id="build-army">

        <!-- Left Menu -->
        <div class="col-md-2 panel" style="height: 200px">
            @include('armybuilder.lfantasy')
            @include('armybuilder.lfourtyk')
        </div>

        <!-- Center Menu -->
        <div class="col-md-6 col-md-offset-1 panel" style="height: 200px">

        </div>

        <!-- Right Menu -->
        <div class="col-md-2 col-md-offset-1 panel" style="height: 200px">

        </div>
    </div>
</div>
@stop


<!-- Scripts like Javascript -->
@section('scripts')
<script src="js/armybuilder.js"></script>
@stop