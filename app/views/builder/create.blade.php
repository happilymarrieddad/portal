@extends('layouts.projects')


@section('title')
@stop


@section('links')
@stop


@section('body')
<body class="" style="">
@stop


@section('content')

<!--  {{ Form::open(array('route'=>'builder.store', 'method'=>'post')) }} -->
<div class="container">

    <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
            <h1>
                Computer Builder
            </h1>
            <p style="font-size:24px;"> $ <span id="builder-price"> 0.00 </span> </p>
        </div>
    </div><br />

    <div class="row">
        <div class="col-md-6 col-md-offset-4">
            <span class="text-center" style="color:red" id="messages"></span>
        </div>
    </div><br />

    <div class="col-md-10 col-md-offset-1">
        <div class="panel-group" id="accordion">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                            Motherboard <span class="pull-right" id="span-mb"></span>
                        </a>
                    </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in">
                    <div class="panel-body text-center">
                        <select id="select-mb" onchange="update()">
                            <option value="0" selected></option>
                            @foreach($mb as $mb)
                            <option value="{{ $mb->price }}" data-socket="{{ $mb->socket }}" >${{ number_format(($mb->price / 100), 2) }} - {{ $mb->brand }} {{ $mb->model }} {{ $mb->socket }} </option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                            CPU (Central Processing Unit) <span class="pull-right" id="span-cpu"></span>
                        </a>
                    </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse">
                    <div class="panel-body text-center">
                        <select id="select-cpu" onchange="update()">
                            <option value="0" selected></option>
                            @foreach($cpu as $cpu)
                            <option value="{{ $cpu->price }}" data-socket="{{ $cpu->socket }}" >${{ number_format(($cpu->price / 100), 2) }} - {{ $cpu->brand }} {{ $cpu->speed }} {{ $cpu->model }} {{ $cpu->socket }} </option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                            RAM (Random Access Memory) <span class="pull-right" id="span-ram"></span>
                        </a>
                    </h4>
                </div>
                <div id="collapseThree" class="panel-collapse collapse">
                    <div class="panel-body text-center">
                        <select id="select-ram" onchange="update()">
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
                            Monitor <span class="pull-right" id="span-monitor"></span>
                        </a>
                    </h4>
                </div>
                <div id="collapseFour" class="panel-collapse collapse">
                    <div class="panel-body text-center">
                        <select id="select-monitor" onchange="update()">
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
                            Hard Drive <span class="pull-right" id="span-hdd"></span>
                        </a>
                    </h4>
                </div>
                <div id="collapseFive" class="panel-collapse collapse">
                    <div class="panel-body text-center">
                        <select id="select-hdd" onchange="update()">
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
                            Drive <span class="pull-right" id="span-drive"></span>
                        </a>
                    </h4>
                </div>
                <div id="collapseSix" class="panel-collapse collapse">
                    <div class="panel-body text-center">
                        <select id="select-drive" onchange="update()">
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
                            PSU (Power Supply) <span class="pull-right" id="span-psu"></span>
                        </a>
                    </h4>
                </div>
                <div id="collapseSeven" class="panel-collapse collapse">
                    <div class="panel-body text-center">
                        <select id="select-psu" onchange="update()">
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
                            Computer Case <span class="pull-right" id="span-case"></span>
                        </a>
                    </h4>
                </div>
                <div id="collapseEight" class="panel-collapse collapse">
                    <div class="panel-body" text-center>
                        <select id="select-case" onchange="update()">
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


</div>
<!--  {{ Form::close() }}  -->

@stop


@section('scripts')
<script src="js/builder.js" ></script>
@stop