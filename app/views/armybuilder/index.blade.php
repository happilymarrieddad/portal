<!-- Master Page -->
@extends('layouts.armybuilder')


<!-- Title of Page -->
@section('title')
Seg-Fault - Army Builder v0.0001
@stop


<!-- Links (like stylesheets) -->
@section('links')
<link href="//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/slate/bootstrap.min.css" rel="stylesheet">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
@stop


<!-- Body Mods -->
@section('body')
<body class="" style="">
@stop


<!-- Page Contents -->
@section('content')
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<div class="container-fluid">

    <div class="row text-center">

        <div class="col-md-2 col-md-offset-1 panel">
            <table class="table">
                <legend><img src="images/armybuilder/warhammer.png" alt="warhammer fantasy image" style="width:100%; max-width: 200px;" /></legend>
                <tbody>
                    <tr>
                        <td><a id="button-beastmen" class="btn btn-danger btn-block">Beastmen</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-bretonnia" class="btn btn-danger btn-block">Bretonnia</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-fdaemons" class="btn btn-danger btn-block">Daemons of Chaos</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-darkelves" class="btn btn-danger btn-block">Dark Elves</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-dwarfs" class="btn btn-danger btn-block">Dwarfs</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-highelves" class="btn btn-danger btn-block">High Elves</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-lizardmen" class="btn btn-danger btn-block">Lizardmen</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-ogre" class="btn btn-danger btn-block">Ogre Kingdoms</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-orcsgoblins" class="btn btn-danger btn-block">Orcs & Goblins</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-skaven" class="btn btn-danger btn-block">Skaven</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-empire" class="btn btn-danger btn-block">The Empire</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-tombkings" class="btn btn-danger btn-block">Tomb Kings</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-vampire" class="btn btn-danger btn-block">Vampire Counts</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-chaoswarriors" class="btn btn-danger btn-block">Warriors of Chaos</a></td>
                    </tr>
                    <tr>
                        <td><a id="button-woodelves" class="btn btn-danger btn-block">Wood Elves</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-md-2 col-md-offset-2 panel">
            <table class="table">
                <legend><img src="images/armybuilder/40klogo.png" alt="warhammer 40k image" style="width:100%; max-width: 200px;" /></legend>
                <tbody>
                <tr>
                    <td>
                        <a id="button-sororitas" class="btn btn-danger btn-block">Adepta Sororitas</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-militarum" class="btn btn-danger btn-block">Astra Militarum</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-bloodangels" class="btn btn-danger btn-block">Blood Angels</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-kdaemons" class="btn btn-danger btn-block">Chaos Daemons</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-chaosmarines" class="btn btn-danger btn-block">Chaos Space Marines</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-darkangels" class="btn btn-danger btn-block">Dark Angels</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-darkeldar" class="btn btn-danger btn-block">Dark Eldar</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-eldar" class="btn btn-danger btn-block">Eldar</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-greyknights" class="btn btn-danger btn-block">Grey Knights</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-inquisition" class="btn btn-danger btn-block">Inquisition</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-imperialknights" class="btn btn-danger btn-block">Imperial Knights</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-tempestus" class="btn btn-danger btn-block">Militarum Tempestus</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-necrons" class="btn btn-danger btn-block">Necrons</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-orks" class="btn btn-danger btn-block">Orks</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        {{ HTML::linkRoute('sm.index', 'Space Marines', array(), array('class'=>'btn btn-info btn-block')) }}
                    </td>
                </tr>
                <tr>
                    <td>
                        {{ HTML::linkRoute('sw.index', 'Space Wolves', array(), array('class'=>'btn btn-info btn-block')) }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-tau" class="btn btn-danger btn-block">Tau Empire</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a id="button-tyranids" class="btn btn-danger btn-block">Tyranids</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="col-md-2 col-md-offset-2 panel">
            <table class="table">
                <legend><img src="images/armybuilder/hobbit.png" alt="hobbit image" style="width:100%; max-width: 200px;" /></legend>
                <tbody>
                <tr>
                    <td>coming soon...</td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>

</div>
@stop


<!-- Scripts like Javascript -->
@section('scripts')
<!-- Main Script
<script src="js/armybuilder/functions.js"></script>
<script src="js/armybuilder/page.js"></script>

     40k scripts
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

     Fantasy scripts
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

     Final scripts
<script src="js/armybuilder/startup.js"></script>
                   -->
@stop