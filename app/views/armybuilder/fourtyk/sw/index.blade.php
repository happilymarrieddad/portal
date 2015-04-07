@extends('layouts.armies')

@section('title')
@stop


@section('css')
@stop

@section('body')
<body style="background-image:url(images/armybuilder/fourtyk/sw-background.jpg); background-repeat: no-repeat; background-size: 100%">
@stop

@section('army')
<span style="display:none" id="army-title" >Space Wolves</span>
@stop

@section('nav-hq')
<li><a href="#" id="hq-wolflord" >Wolf Lord</a></li>
<li><a href="#" id="hq-blackmane" >Ragnar Blackmane</a></li>
<li><a href="#" id="hq-deathwolf" >Harald Deathwolf</a></li>
<li><a href="#" id="hq-wolfborn" >Canis Wolfborn</a></li>
<li><a href="#" id="hq-runepriest" >Rune Priest</a></li>
<li><a href="#" id="hq-stormcaller" >Njal Stormcaller</a></li>
<li><a href="#" id="hq-wolfpriest" >Wolf Priest</a></li>
<li><a href="#" id="hq-slayer" >Ulrik the Slayer</a></li>
<li><a href="#" id="hq-wolfguard" >Wolf Guard Battle Leader </a></li>
<li><a href="#" id="hq-bjorn">Bjorn the Fell-Handed</a></li>
@stop

@section('nav-tr')
<li><a href="#" id="tr-blood" >Blood Claws</a></li>
<li><a href="#" id="tr-trickster" >Lukas the Trickster</a></li>
<li><a href="#" id="tr-hunters" >Grey Hunters</a></li>
@stop

@section('nav-el')
<li><a href="#" id="el-priest" >Iron Priest</a></li>
<li><a href="#" id="el-servitors" >Servitors</a></li>
<li><a href="#" id="el-scouts" >Wolf Scouts</a></li>
<li><a href="#" id="el-lone" >Lone Wolf</a></li>
<li><a href="#" id="el-dread" >Dreadnought</a></li>
<li><a href="#" id="el-murder" >Murderfang</a></li>
<li><a href="#" id="el-guard" >Wolf Guard</a></li>
<li><a href="#" id="el-terms" >Wolf Guard Terminators</a></li>
<li><a href="#" id="el-arjac" >Arjac Rockfist</a></li>
@stop

@section('nav-fa')
<li><a href="#" id="fa-swift" >Swiftclaws</a></li>
<li><a href="#" id="fa-rhino" >Rhino</a></li>
<li><a href="#" id="fa-razor" >Razorback</a></li>
<li><a href="#" id="fa-drop" >Drop Pod</a></li>
<li><a href="#" id="fa-stormwolf" >Stormwolf</a></li>
<li><a href="#" id="fa-cavalry" >Thunderwolf Cavalry</a></li>
<li><a href="#" id="fa-wolves" >Fenrisian Wolves</a></li>
<li><a href="#" id="fa-skyclaws" >Skyclaws</a></li>
<li><a href="#" id="fa-lspeed" >Land Speeders</a></li>
@stop

@section('nav-hs')
<li><a href="#" id="hs-stormfang" >Stormfang Gunship</a></li>
<li><a href="#" id="hs-longfangs" >Longfangs</a></li>
<li><a href="#" id="hs-vindicator" >Vindicator</a></li>
<li><a href="#" id="hs-whirlwind" >Whirlwind</a></li>
<li><a href="#" id="hs-predator" >Predator</a></li>
<li><a href="#" id="hs-lraider" >Land Raider</a></li>
<li><a href="#" id="hs-crusader" >Land Raider Crusader</a></li>
<li><a href="#" id="hs-redeemer" >Land Raider Redeemer</a></li>
@stop

@section('nav-fr')
<li><a href="#"></a></li>
@stop

@section('nav-lw')
<li><a href="#" id="lw-grimnar" >Logan Grimnar</a></li>
@stop

@section('nav-ot')
<li><a href="#"></a></li>
@stop

@section('forms')

<div class="row">
    <div class="col-md-10 col-md-offset-1">

        @include('armybuilder.fourtyk.sw.hq.bjorn')
        @include('armybuilder.fourtyk.sw.hq.blackmane')
        @include('armybuilder.fourtyk.sw.hq.deathwolf')
        @include('armybuilder.fourtyk.sw.hq.runepriest')
        @include('armybuilder.fourtyk.sw.hq.stormcaller')
        @include('armybuilder.fourtyk.sw.hq.ulrik')
        @include('armybuilder.fourtyk.sw.hq.wolfborn')
        @include('armybuilder.fourtyk.sw.hq.wolfguard')
        @include('armybuilder.fourtyk.sw.hq.wolflord')
        @include('armybuilder.fourtyk.sw.hq.wolfpriest')

        @include('armybuilder.fourtyk.sw.troops.bloodclaws')
        @include('armybuilder.fourtyk.sw.troops.greyhunters')
        @include('armybuilder.fourtyk.sw.troops.lukas')

        @include('armybuilder.fourtyk.sw.elites.arjac')
        @include('armybuilder.fourtyk.sw.elites.dreadnought')
        @include('armybuilder.fourtyk.sw.elites.ironpriest')
        @include('armybuilder.fourtyk.sw.elites.lonewolf')
        @include('armybuilder.fourtyk.sw.elites.murderfang')
        @include('armybuilder.fourtyk.sw.elites.servitors')
        @include('armybuilder.fourtyk.sw.elites.wolfguard')
        @include('armybuilder.fourtyk.sw.elites.wolfguardterms')
        @include('armybuilder.fourtyk.sw.elites.wolfscouts')

        @include('armybuilder.fourtyk.sw.fastattack.droppod')
        @include('armybuilder.fourtyk.sw.fastattack.fenwolves')
        @include('armybuilder.fourtyk.sw.fastattack.landspeeders')
        @include('armybuilder.fourtyk.sw.fastattack.razorback')
        @include('armybuilder.fourtyk.sw.fastattack.rhino')
        @include('armybuilder.fourtyk.sw.fastattack.skyclaws')
        @include('armybuilder.fourtyk.sw.fastattack.stormwolf')
        @include('armybuilder.fourtyk.sw.fastattack.swiftclaws')
        @include('armybuilder.fourtyk.sw.fastattack.thunderwolfcal')

        @include('armybuilder.fourtyk.sw.heavysupport.crusader')
        @include('armybuilder.fourtyk.sw.heavysupport.landraider')
        @include('armybuilder.fourtyk.sw.heavysupport.longfangs')
        @include('armybuilder.fourtyk.sw.heavysupport.predator')
        @include('armybuilder.fourtyk.sw.heavysupport.redeemer')
        @include('armybuilder.fourtyk.sw.heavysupport.stormfang')
        @include('armybuilder.fourtyk.sw.heavysupport.vindicator')
        @include('armybuilder.fourtyk.sw.heavysupport.whirlwind')

        @include('armybuilder.fourtyk.sw.lordswar.grimnar')

    </div>
</div>

@stop

@section('js')
<script src="js/armybuilder/functions.js"></script>
<script src="js/armybuilder/fourtyk/sw/sw.js"></script>
<!-- HQ -->

<!-- Troops -->
<script src="js/armybuilder/fourtyk/sw/tr/blood.js" ></script>
<script src="js/armybuilder/fourtyk/sw/tr/lukas.js" ></script>
<script src="js/armybuilder/fourtyk/sw/tr/grey.js" ></script>

<!-- Elites -->
<!-- Fast Attack -->
<!-- Heavy Support -->
<!-- Lords of War -->

<script src="js/armybuilder/startup.js"></script>
@stop