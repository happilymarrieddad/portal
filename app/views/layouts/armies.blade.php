<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>

    <!-- Bootstrap CDN links -->
    <link href="//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/slate/bootstrap.min.css" rel="stylesheet">
    <script src="css/armybuilder/basic.css"></script>

    @yield('css')

</head>
@yield('body')
@yield('army')


    <!-- Points Display --> <br />
    <div class="row">
        <div class="col-md-10 col-md-offset-1 panel" id="display-top" style="box-shadow: 0px 0px 10px yellow">
            <br /><div class="row">
                <div class="col-sm-2 col-sm-offset-5 text-center">
                    <a href="/armybuilder" id="button-home">New Army</a>
                </div>
            </div><br />
            <div class="row text-center">
                <div class="col-md-2 col-md-offset-1" style="padding:20px">
                    <div class="input-group">
                        <label for="input-total">Total Points</label>
                        <input id="input-total" type="text" style="background-color: darkgray" class="form-control" size="5" />
                    </div>
                </div>
                <div class="col-md-2 col-md-offset-2" style="padding:20px">
                    <div class="input-group">
                        <label for="input-used">Points Used</label>
                        <input id="input-used" type="number" class="form-control" size="5" value="0" readonly />
                    </div>
                </div>
                <div class="col-md-2 col-md-offset-2" style="padding:20px">
                    <div class="input-group">
                        <label for="input-left">Points Left</label>
                        <input id="input-left" type="number" class="form-control" size="5" value="0" readonly />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Messaging System -->
    <div class="row">
        <div class="col-sm-4 col-sm-offset-4">
            <button style="display:none" class="btn btn-sm btn-block btn-danger" id="alert-error"></button>
            <button class="btn btn-sm btn-info btn-block" id="alert-loading">Loading Systems...</button>
            <button style="display:none" class="btn btn-sm btn-block btn-success" id="alert-success"></button>
        </div>
    </div><br />

    <div class="row">
        <div class="col-md-10 col-md-offset-1 panel" id="display-middle" style="padding: 20px; display:none">
            <nav class="navbar navbar-inverse" role="navigation">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="hq-navbar-collapse">
                        <ul class="nav navbar-nav">
                            <!-- HQ -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">HQ <span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-hq')
                                </ul>
                            </li>

                            <!-- Elites -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Elites <span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-el')
                                </ul>
                            </li>

                            <!-- Troops -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Troops <span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-tr')
                                </ul>
                            </li>

                            <!-- Fast Attack -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Fast Attack <span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-fa')
                                </ul>
                            </li>

                            <!-- Heavy Support -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Heavy Support <span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-hs')
                                </ul>
                            </li>

                            <!-- Other -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Other <span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-ot')
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav><br />

            <!-- Other Content goes here -->
            <div class="panel">

            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-10 col-md-offset-1 panel" id="display-bottom" style="padding: 20px; display: none">

        </div>
    </div>


    <!-- jQuery CDN links -->
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

    <!-- Latest compiled and minified JavaScript -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    @yield('js')

</body>
</html>