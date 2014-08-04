@extends('layouts.projects')


@section('title')
@stop


@section('links')
@stop


@section('body')
<body class="" style="">
@stop


@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12 text-center">
            <br /><br /><br /><br />
            <h6>
                If you want to see a specific error code, put a forward slash along with the number ahead of the above url like   seg-fault.info/error/1.
            </h6>
            <br /><br />
            <table class="table table-hover">
                <legend>Registered Error Codes</legend>
                <thead>
                    <tr>
                        <th class="text-center">Id</th>
                        <th class="text-center">Message</th>
                    </tr>
                </thead>
                <tbody>
                @foreach($errors as $error)
                    <tr>
                        <td class="text-center">{{ $error->id }}</td>
                        <td class="text-center">{{ $error->message }}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

@stop


@section('scripts')
@stop