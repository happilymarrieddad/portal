@extends('layouts.default')


@section('title')
@stop


@section('links')
@stop


@section('body')
<body class="" style="">
@stop


@section('nav')
<li><a href="/home">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/tutorials">Tutorials</a></li>
<li><a href="/projects">Projects</a></li>
{{ $session }}
@stop


@section('content')

<!--  {{ Form::open(array('route'=>'builder.store', 'method'=>'post')) }} -->
<div class="container">

    <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
            <h1>
                Computer Builder
            </h1>
            <p style="font-size:24px;"> $ <span> 0.00 </span> </p>
        </div>
    </div><br /><br />

    <div class="panel-group" id="accordion">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                        Motherboard
                    </a>
                </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse in">
                <div class="panel-body">
                    <select>
                    <option value="0" selected></option>
                    @foreach($mb as $mb)
                    <option value="{{ $mb->price }}#{{ $mb->socket }}">${{ number_format(($mb->price / 100), 2) }} - {{ $mb->brand }} {{ $mb->model }} {{ $mb->socket }} </option>
                    @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                        CPU (Central Processing Unit)
                    </a>
                </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse">
                <div class="panel-body">
                    <select>
                        <option value="0" selected></option>
                        @foreach($cpu as $cpu)
                        <option value="{{ $cpu->price }}#{{ $cpu->socket }}">${{ number_format(($cpu->price / 100), 2) }} - {{ $cpu->brand }} {{ $cpu->speed }} {{ $cpu->model }} {{ $cpu->socket }} </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                        RAM (Random Access Memory)
                    </a>
                </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse">
                <div class="panel-body">
                    <select>
                        <option value="0" selected></option>
                        @foreach($ram as $ram)
                        <option value="{{ $ram->price }}">${{ number_format(($ram->price / 100), 2) }} - {{ $ram->brand }} {{ $ram->size }} {{ $ram->speed }} CAS-{{ $ram->CAS }}  {{ $ram->model }} </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                        Monitor
                    </a>
                </h4>
            </div>
            <div id="collapseFour" class="panel-collapse collapse">
                <div class="panel-body">
                    <select>
                        <option value="0" selected></option>
                        @foreach($monitor as $monitor)
                        <option value="{{ $monitor->price }}">${{ number_format(($monitor->price / 100), 2) }} - {{ $monitor->brand }} {{ $monitor->size }}in {{ $monitor->model }} </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                        Hard Drive
                    </a>
                </h4>
            </div>
            <div id="collapseFive" class="panel-collapse collapse">
                <div class="panel-body">
                    <select>
                        <option value="0" selected></option>
                        @foreach($hdd as $hdd)
                        <option value="{{ $hdd->price }}">${{ number_format(($hdd->price / 100), 2) }} - {{ $hdd->brand }} {{ $hdd->type }} {{ $hdd->size }}in {{ $hdd->model }} </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseSix">
                        Drive
                    </a>
                </h4>
            </div>
            <div id="collapseSix" class="panel-collapse collapse">
                <div class="panel-body">
                    <select>
                        <option value="0" selected></option>
                        @foreach($drive as $drive)
                        <option value="{{ $drive->price }}">${{ number_format(($drive->price / 100), 2) }} - {{ $drive->brand }} {{ $drive->type }} {{ $drive->speed }}x {{ $drive->model }} </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">
                        PSU (Power Supply)
                    </a>
                </h4>
            </div>
            <div id="collapseSeven" class="panel-collapse collapse">
                <div class="panel-body">
                    <select>
                        <option value="0" selected></option>
                        @foreach($psu as $psu)
                        <option value="{{ $psu->price }}">${{ number_format(($psu->price / 100), 2) }} - {{ $psu->brand }} {{ $psu->watts }}W {{ $psu->model }} </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseEight">
                        Computer Case
                    </a>
                </h4>
            </div>
            <div id="collapseEight" class="panel-collapse collapse">
                <div class="panel-body">
                    <select>
                        <option value="0" selected></option>
                        @foreach($case as $case)
                        <option value="{{ $case->price }}">${{ number_format(($case->price / 100), 2) }} - {{ $case->brand }} {{ $case->type }}W {{ $case->model }} </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
    </div>


</div>
<!--  {{ Form::close() }}  -->

@stop


@section('scripts')
@stop