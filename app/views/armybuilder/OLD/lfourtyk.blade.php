<div class="fourtyk">

    <div class="container-fluid" style="font-size:12px;">

        <div class="hq">
            <button type="button" style="border:none; background-color: inherit; display: none" id="fourtyk-hq-plus"><span class="glyphicon glyphicon-plus"></span></button>
            <button type="button" style="border:none; background-color: inherit"  id="fourtyk-hq-minus"><span class="glyphicon glyphicon-minus"></span></button>
            &nbsp;-&nbsp;
            <span style="font-size:16px">HQ</span>
        </div>
        <div id="hq-dropdown">
            <ul>
                @include('armybuilder.larmies.militarum.hq')
            </ul>
        </div><br />

        <div class="elites">
            <button type="button" style="border:none; background-color: inherit; display: none"  id="fourtyk-elites-plus"><span class="glyphicon glyphicon-plus"></span></button>
            <button type="button" style="border:none; background-color: inherit"  id="fourtyk-elites-minus"><span class="glyphicon glyphicon-minus"></span></button>
            &nbsp;-&nbsp;
            <span style="font-size:16px">ELITES</span>
        </div>
        <div id="elites-dropdown">
            <ul>

                @include('armybuilder.larmies.militarum.elites')
            </ul>
        </div><br />

        <div class="troops">
            <button type="button" style="border:none; background-color: inherit; display: none"  id="fourtyk-troops-plus"><span class="glyphicon glyphicon-plus"></span></button>
            <button type="button" style="border:none; background-color: inherit"  id="fourtyk-troops-minus"><span class="glyphicon glyphicon-minus"></span></button>
            &nbsp;-&nbsp;
            <span style="font-size:16px">TROOPS</span>
        </div>
        <div id="troops-dropdown">
            <ul>

                @include('armybuilder.larmies.militarum.troops')
            </ul>
        </div><br />

        <div class="fastattack">
            <button type="button" style="border:none; background-color: inherit; display: none"  id="fourtyk-fastattack-plus"><span class="glyphicon glyphicon-plus"></span></button>
            <button type="button" style="border:none; background-color: inherit"  id="fourtyk-fastattack-minus"><span class="glyphicon glyphicon-minus"></span></button>
            &nbsp;-&nbsp;
            <span style="font-size:16px">FAST ATTACK</span>
        </div>
        <div id="fastattack-dropdown">
            <ul>

                @include('armybuilder.larmies.militarum.fastattack')
            </ul>
        </div><br />

        <div class="heavysupport">
            <button type="button" style="border:none; background-color: inherit; display: none"  id="fourtyk-heavysupport-plus"><span class="glyphicon glyphicon-plus"></span></button>
            <button type="button" style="border:none; background-color: inherit"  id="fourtyk-heavysupport-minus"><span class="glyphicon glyphicon-minus"></span></button>
            &nbsp;-&nbsp;
            <span style="font-size:16px">HEAVY SUPPORT</span>
        </div>
        <div id="heavysupport-dropdown">
            <ul>

                @include('armybuilder.larmies.militarum.heavysupport')
            </ul>
        </div>


    </div>

</div>