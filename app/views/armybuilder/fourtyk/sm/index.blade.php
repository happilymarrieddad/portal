@extends('layouts.armies')

@section('title')
@stop


@section('css')
@stop

@section('body')
<body style="background-image:url(images/armybuilder/fourtyk/sm-background.jpg); background-repeat: no-repeat; background-size: 100%">
@stop

@section('army')
<span style="display:none" id="army-title" >Space Marine</span>
@stop

@section('nav-hq')
<li><a href="#">Commisar</a></li>
@stop

@section('nav-tr')
<li><a href="#"></a></li>
@stop

@section('nav-el')
<li><a href="#"></a></li>
@stop

@section('nav-fa')
<li><a href="#"></a></li>
@stop

@section('nav-hs')
<li><a href="#"></a></li>
@stop

@section('nav-ot')
<li><a href="#"></a></li>
@stop

@section('js')
<script src="js/armybuilder/functions.js"></script>
<script src="js/armybuilder/fourtyk/sm.js"></script>
<script src="js/armybuilder/startup.js"></script>
@stop