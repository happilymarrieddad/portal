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
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                        Monitor
                    </a>
                </h4>
            </div>
            <div id="collapseFour" class="panel-collapse collapse">
                <div class="panel-body">
                    <select>
                        <option value="0" selected></option>

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