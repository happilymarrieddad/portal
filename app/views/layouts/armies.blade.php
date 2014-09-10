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
        <div class="col-md-10 col-md-offset-1 panel" id="display-top" style="box-shadow: 0px 0px 10px yellow; padding:20px; display:none">

            <div class="row">
                <div class="col-sm-2 col-sm-offset-5 text-center">
                    <a href="/armybuilder" class="btn btn-sm btn-primary" id="button-home">New Army</a><br />
                </div>
            </div><hr>
            <div class="row">
                <div class="col-sm-2 col-sm-offset-5 text-center">
                    <h4 class="" >Options</h4>
                    <select id="organization-type">
                        <option>Standard</option>
                    </select>
                </div>
            </div>
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

            <div>
                <div class="col-sm-1 col-sm-offset-1">
                    <div class="input-group">
                        <label for="display-hq">HQ</label>
                        <input id="display-hq" type="number" size="1" class="form-control" value="0" style="color:red" readonly />
                    </div>
                </div>
                <div class="col-sm-1 col-sm-offset-1">
                    <div class="input-group">
                        <label for="display-tr">Troops</label>
                        <input id="display-tr" type="number" size="1" class="form-control" value="0" style="color:red" readonly />
                    </div>
                </div>
                <div class="col-sm-1 col-sm-offset-1">
                    <div class="input-group">
                        <label for="display-el">Elites</label>
                        <input id="display-el" type="number" size="1" class="form-control" value="0" readonly />
                    </div>
                </div>
                <div class="col-sm-1 col-sm-offset-1">
                    <div class="input-group">
                        <label for="display-fa">F Attack</label>
                        <input id="display-fa" type="number" size="1" class="form-control" value="0" readonly />
                    </div>
                </div>
                <div class="col-sm-1 col-sm-offset-1">
                    <div class="input-group">
                        <label for="display-hs">H Support</label>
                        <input id="display-hs" type="number" size="1" class="form-control" value="0" readonly />
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
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdown-hq">HQ 1-2<span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-hq')
                                </ul>
                            </li>

                            <!-- Troops -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdown-tr">Troops 2-6<span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-tr')
                                </ul>
                            </li>

                            <!-- Elites -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdown-el">Elites 0-3<span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-el')
                                </ul>
                            </li>

                            <!-- Fast Attack -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdown-fa">Fast Attack 0-3<span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-fa')
                                </ul>
                            </li>

                            <!-- Heavy Support -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdown-hs">Heavy Support 0-3<span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-hs')
                                </ul>
                            </li>

                            <!-- Fortification -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Fortification <span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-fr')
                                </ul>
                            </li>

                            <!-- Lords of War -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Lords of War <span class="carat"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    @yield('nav-lw')
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
                @yield('forms')
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-10 col-md-offset-1 panel" id="display-bottom" style="padding: 20px; display: none">

            <h3 class="text-center">Army Builder</h3><br /><br />

            <div id="display-bottom-low-div" style="display:none">
                <h4>Lords of War</h4><br />
                <div id="display-bottom-low">

                </div>
            </div><br />

            <div id="display-bottom-hq-div" style="display:none">
                <h4>HQ</h4><br />
                <div id="display-bottom-hq">

                </div>
            </div><br />

            <div id="display-bottom-troops-div" style="display:none">
                <h4>Troops</h4><br />
                <div id="display-bottom-troops">

                </div>
            </div><br />

            <div id="display-bottom-elites-div" style="display:none">
                <h4>Elites</h4><br />
                <div id="display-bottom-elites">

                </div>
            </div><br />

            <div id="display-bottom-fastattack-div" style="display:none">
                <h4>Fast Attack</h4><br />
                <div id="display-bottom-fastattack">

                </div>
            </div><br />

            <div id="display-bottom-heavysupport-div" style="display:none">
                <h4>Heavy Support</h4><br />
                <div id="display-bottom-heavysupport">

                </div>
            </div><br />


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