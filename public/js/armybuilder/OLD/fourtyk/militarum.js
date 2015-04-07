// Astra Militarum functions
$(function() {

    var tbody = {};

    var button = {};

    var unit = {};
    var info = {};

    listen('start', function() {

        tbody.hq = $('#fourtyk-hq');
        tbody.troops = $('#fourtyk-troops');
        tbody.elites = $('#fourtyk-elites');
        tbody.fastattack = $('#fourtyk-fastattack');
        tbody.heavysupport = $('#fourtyk-heavysupport');

        button.hqyarrick = $('#fourtyk-militarum-hq-yarrick');
        button.hqccs = $('#fourtyk-militarum-hq-companycommandsquad');
        button.hqck = $('#fourtyk-militarum-hq-creedkell');
        button.hqstraken = $('#fourtyk-militarum-hq-colonelstraken');
        button.hqnork = $('#fourtyk-militarum-hq-norkdeddog');
        button.hqpask = $('#fourtyk-militarum-hq-commanderpask');
        button.hqlcomm = $('#fourtyk-militarum-hq-lordcommisar');
        button.hqcomm = $('#fourtyk-militarum-hq-commisar');
        button.hqmpriest = $('#fourtyk-militarum-hq-ministorumpriest');
        button.hqppsyker = $('#fourtyk-militarum-hq-primarispsyker');
        button.hqenginseer = $('#fourtyk-militarum-hq-enginseer');

        button.trplatoon = $('#fourtyk-militarum-troops-platoon');
        button.trveterns = $('#fourtyk-militarum-troops-veterns');

        button.elogryns = $('#fourtyk-militarum-elites-ogryns');
        button.elbullogryns = $('#fourtyk-militarum-elites-bullgryns');
        button.elratlings = $('#fourtyk-militarum-elites-ratlings');
        button.elwyrdvane = $('#fourtyk-militarum-elites-wyrdvanepsykers');
        button.eltempestus = $('#fourtyk-militarum-elites-tempestus');

        button.fascout = $('#fourtyk-militarum-fastattack-scoutsentinel');
        button.faarmoured = $('#fourtyk-militarum-fastattack-armouredsentinel');
        button.fariders = $('#fourtyk-militarum-fastattack-riders');
        button.fahellhound = $('#fourtyk-militarum-fastattack-hellhound');
        button.favalkyrie = $('#fourtyk-militarum-fastattack-valkyrie');
        button.favendetta = $('#fourtyk-militarum-fastattack-vendetta');

        button.hsleman = $('#fourtyk-militarum-heavysupport-lemanruss');
        button.hshydra = $('#fourtyk-militarum-heavysupport-hydra');
        button.hsbasilisk = $('#fourtyk-militarum-heavysupport-basilisk');
        button.hswyvern = $('#fourtyk-militarum-heavysupport-wyvern');
        button.hsmanticore = $('#fourtyk-militarum-heavysupport-manticore');
        button.hsdeathstrike = $('#fourtyk-militarum-heavysupport-deathstrike');

        // HQ
        button.hqyarrick.bind('click', function(e) {
            e.preventDefault();
            tell('alert.loading', 'Adding Commisar Yarrick');
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
            tell('alert.success', 'Commisar Yarrick added successfully!');
        });
        button.hqccs.bind('click', function(e) {
            e.preventDefault();
            tell('alert.loading', 'Adding Company Command Squad');
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
            tell('alert.success', 'Company Command Squad added successfully!');
        });
        button.hqck.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hqstraken.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hqnork.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hqpask.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hqlcomm.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hqcomm.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hqmpriest.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hqppsyker.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hqenginseer.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });

        // Elites
        button.elogryns.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);

            tbody.elites.append(
                '<tbody id="unit-'+troopid+'">'+
                    '<tr>' +
                        '<td>Ogryns</td>'+
                        '<td></td>'+
                        '<td></td>'+
                        '<td></td>'+
                        '<td></td>'+
                        '<td></td>'+
                        '<td><span id="'+troopid+'-points">130</span></td>'+
                        '<td>pts</td>'+
                        '<td></td>'+
                        '<td><button id="remove-'+troopid+'" type="button" style="background-color:red" data-info="'+troopid+'" >X</button></td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td></td>'+
                        '<td class="bborder">WS</td>'+
                        '<td class="bborder">BS</td>'+
                        '<td class="bborder">S</td>'+
                        '<td class="bborder">T</td>'+
                        '<td class="bborder">W</td>'+
                        '<td class="bborder">I</td>'+
                        '<td class="bborder">A</td>'+
                        '<td class="bborder">Ld</td>'+
                        '<td class="bborder">Sv</td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>Ogryn</td>'+
                        '<td class="bborder">4</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">5</td>'+
                        '<td class="bborder">5</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">2</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">6</td>'+
                        '<td class="bborder">5+</td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>Ogryn Bone \'ead</td>'+
                        '<td class="bborder">4</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">5</td>'+
                        '<td class="bborder">5</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">2</td>'+
                        '<td class="bborder">4</td>'+
                        '<td class="bborder">7</td>'+
                        '<td class="bborder">5+</td>'+
                    '</tr>'+

                '</tbody><tbody id="info-'+troopid+'">'+

                    '<tr>'+
                        '<td>&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td><span><strong>Unit Composition</strong></span></td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td><span id="'+troopid+'-num">2</span>&nbsp;<span>Ogryns</span></td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td><span>1 Ogryn Bone \'ead</span></td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option1">'+
                        '<td><strong>Options</strong></td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option2">'+
                        '<td>'+
                            '<button id="plus-'+troopid+'" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                            '<button id="minus-'+troopid+'" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                            '&nbsp;&nbsp;Ogryn'+
                        '</td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr><td>&nbsp;</td></tr>'+
                '</tbody>'
            );

            unit[troopid] = $('#unit-'+troopid);
            info[troopid] = $('#info-'+troopid);

            tell('adjust-used', 130);

            $('#remove-'+troopid).bind('click', function(e) {
                e.preventDefault();
                tell('adjust-used', parseInt($('#'+$(this).data('info')+'-points').text()) * -1);
                unit[$(this).data('info')].remove();
                info[$(this).data('info')].remove();
            });

            $('#plus-'+troopid).bind('click', function(e) {
                e.preventDefault();
                var val = parseInt($('#'+$(this).data('info')+'-num').text());
                $('#'+$(this).data('info')+'-num').text(val + 1);
                val += 1;
                tell('adjust-used', 40);
                var pts = parseInt($('#'+$(this).data('info')+'-points').text()) + 40;
                $('#'+$(this).data('info')+'-points').text(pts);
                if(val > 8) $(this).hide();
                if(val > 2) $('#minus-'+$(this).data('info')).show();
            });

            $('#minus-'+troopid).bind('click', function(e) {
                e.preventDefault();
                var val = parseInt($('#'+$(this).data('info')+'-num').text());
                $('#'+$(this).data('info')+'-num').text(parseInt(val) - 1);
                val -= 1;
                tell('adjust-used', -40);
                var pts = parseInt($('#'+$(this).data('info')+'-points').text()) - 40;
                $('#'+$(this).data('info')+'-points').text(pts);
                if(val < 3) $(this).hide();
                if(val == 8) $('#plus-'+$(this).data('info')).show();
            });

            troopid++;
            tell('enable-buttons-militarum');
        });
        button.elbullogryns.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);

            tbody.elites.append(
                '<tbody id="unit-'+troopid+'">'+
                    '<tr>' +
                    '<td>Bullgryns</td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td><span id="'+troopid+'-points">145</span></td>'+
                    '<td>pts</td>'+
                    '<td></td>'+
                    '<td><button id="remove-'+troopid+'" type="button" style="background-color:red" data-info="'+troopid+'" >X</button></td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td></td>'+
                    '<td class="bborder">WS</td>'+
                    '<td class="bborder">BS</td>'+
                    '<td class="bborder">S</td>'+
                    '<td class="bborder">T</td>'+
                    '<td class="bborder">W</td>'+
                    '<td class="bborder">I</td>'+
                    '<td class="bborder">A</td>'+
                    '<td class="bborder">Ld</td>'+
                    '<td class="bborder">Sv</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>Bullgryn</td>'+
                    '<td class="bborder">4</td>'+
                    '<td class="bborder">3</td>'+
                    '<td class="bborder">5</td>'+
                    '<td class="bborder">5</td>'+
                    '<td class="bborder">3</td>'+
                    '<td class="bborder">2</td>'+
                    '<td class="bborder">3</td>'+
                    '<td class="bborder">6</td>'+
                    '<td class="bborder">4+</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>Bullgryn Bone \'ead</td>'+
                    '<td class="bborder">4</td>'+
                    '<td class="bborder">3</td>'+
                    '<td class="bborder">5</td>'+
                    '<td class="bborder">5</td>'+
                    '<td class="bborder">3</td>'+
                    '<td class="bborder">2</td>'+
                    '<td class="bborder">4</td>'+
                    '<td class="bborder">7</td>'+
                    '<td class="bborder">4+</td>'+
                    '</tr>'+

                    '</tbody><tbody id="info-'+troopid+'">'+

                    '<tr>'+
                    '<td>&nbsp;</td>'+
                    '<td>&nbsp;</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td><span><strong>Unit Composition</strong></span></td>'+
                    '<td></td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td><span id="'+troopid+'-num">2</span>&nbsp;<span>Bullgryns</span></td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td><span>1 Bullgryn Bone \'ead</span></td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td><span id="'+troopid+'-maul">0</span> PM & Shield</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>&nbsp;</td>'+
                    '<td>&nbsp;</td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option1">'+
                    '<td><strong>Options</strong></td>'+
                    '<td></td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option2">'+
                    '<td>'+
                    '<button id="plus-'+troopid+'" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                    '<button id="minus-'+troopid+'" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                    '&nbsp;&nbsp;Bullgryn'+
                    '</td>'+
                    '<td></td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option3">'+
                    '<td>'+
                    '<button id="plus-'+troopid+'-maul" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                    '<button id="minus-'+troopid+'-maul" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                    '&nbsp;&nbsp;Power Maul & Brute Shield'+
                    '</td>'+
                    '<td></td>'+
                    '</tr>'+

                    '<tr><td>&nbsp;</td></tr>'+
                    '</tbody>'
            );

            unit[troopid] = $('#unit-'+troopid);
            info[troopid] = $('#info-'+troopid);

            tell('adjust-used', 145);

            $('#remove-'+troopid).bind('click', function(e) {
                e.preventDefault();
                tell('adjust-used', parseInt($('#'+$(this).data('info')+'-points').text()) * -1);
                unit[$(this).data('info')].remove();
                info[$(this).data('info')].remove();
            });

            $('#plus-'+troopid).bind('click', function(e) {
                e.preventDefault();
                var val = parseInt($('#'+$(this).data('info')+'-num').text());
                $('#'+$(this).data('info')+'-num').text(val + 1);
                val += 1;
                tell('adjust-used', 45);
                var pts = parseInt($('#'+$(this).data('info')+'-points').text()) + 45;
                $('#'+$(this).data('info')+'-points').text(pts);
                if(val > 8) $(this).hide();
                if(val > 2) $('#minus-'+$(this).data('info')).show();
                $('#plus-'+$(this).data('info')+'-maul').show();
            });

            $('#minus-'+troopid).bind('click', function(e) {
                e.preventDefault();
                var val = parseInt($('#'+$(this).data('info')+'-num').text());
                $('#'+$(this).data('info')+'-num').text(parseInt(val) - 1);
                val -= 1;
                tell('adjust-used', -45);
                var pts = parseInt($('#'+$(this).data('info')+'-points').text()) - 45;
                $('#'+$(this).data('info')+'-points').text(pts);
                if(val < 3) $(this).hide();
                if(val == 8) $('#plus-'+$(this).data('info')).show();

                var maul = parseInt($('#'+$(this).data('info')+'-maul').text());
                if(maul > (val + 1))
                {
                    tell('adjust-used', -15);
                    $('#'+$(this).data('info')+'-points').text(parseInt($('#'+$(this).data('info')+'-points').text()) - 15);
                    $('#'+$(this).data('info')+'-maul').text(parseInt($('#'+$(this).data('info')+'-maul').text()) -1);
                    if(parseInt($('#'+$(this).data('info')+'-maul').text()) > 0) $('#minus-'+$(this).data('info')+'-maul').show();
                    if(parseInt($('#'+$(this).data('info')+'-maul').text()) < val) $('#minus-'+$(this).data('info')+'-maul').show();
                }

            });

            $('#plus-'+troopid+'-maul').bind('click', function(e) {
                e.preventDefault();
                var val = parseInt($('#'+$(this).data('info')+'-maul').text());
                $('#'+$(this).data('info')+'-maul').text(val + 1);
                val += 1;
                tell('adjust-used', 15);
                var pts = parseInt($('#'+$(this).data('info')+'-points').text()) + 15;
                $('#'+$(this).data('info')+'-points').text(pts);
                if(val == (parseInt($('#'+$(this).data('info')+'-num').text()) + 1)) $(this).hide();
                if(val > 0) $('#minus-'+$(this).data('info')+'-maul').show();
            });

            $('#minus-'+troopid+'-maul').bind('click', function(e) {
                e.preventDefault();
                var val = parseInt($('#'+$(this).data('info')+'-maul').text());
                $('#'+$(this).data('info')+'-maul').text(parseInt(val) - 1);
                val -= 1;
                tell('adjust-used', -15);
                var pts = parseInt($('#'+$(this).data('info')+'-points').text()) - 15;
                $('#'+$(this).data('info')+'-points').text(pts);
                if(val < 1) $(this).hide();
                if(val == parseInt($('#'+$(this).data('info')+'-num').text())) $('#plus-'+$(this).data('info')+'-maul').show();
            });

            troopid++;
            tell('enable-buttons-militarum');
        });
        button.elratlings.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);

            tbody.elites.append(
                '<tbody id="unit-'+troopid+'">'+
                    '<tr>' +
                    '<td>Ratlings</td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td><span id="'+troopid+'-points">30</span></td>'+
                    '<td>pts</td>'+
                    '<td></td>'+
                    '<td><button id="remove-'+troopid+'" type="button" style="background-color:red" data-info="'+troopid+'" >X</button></td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td></td>'+
                    '<td class="bborder">WS</td>'+
                    '<td class="bborder">BS</td>'+
                    '<td class="bborder">S</td>'+
                    '<td class="bborder">T</td>'+
                    '<td class="bborder">W</td>'+
                    '<td class="bborder">I</td>'+
                    '<td class="bborder">A</td>'+
                    '<td class="bborder">Ld</td>'+
                    '<td class="bborder">Sv</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>Ratling</td>'+
                    '<td class="bborder">2</td>'+
                    '<td class="bborder">4</td>'+
                    '<td class="bborder">2</td>'+
                    '<td class="bborder">2</td>'+
                    '<td class="bborder">1</td>'+
                    '<td class="bborder">4</td>'+
                    '<td class="bborder">1</td>'+
                    '<td class="bborder">6</td>'+
                    '<td class="bborder">5+</td>'+
                    '</tr>'+

                    '</tbody><tbody id="info-'+troopid+'">'+

                    '<tr>'+
                    '<td>&nbsp;</td>'+
                    '<td>&nbsp;</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td><span><strong>Unit Composition</strong></span></td>'+
                    '<td></td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td><span id="'+troopid+'-num">3</span>&nbsp;<span>Ratling</span></td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>&nbsp;</td>'+
                    '<td>&nbsp;</td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option1">'+
                    '<td><strong>Options</strong></td>'+
                    '<td></td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option2">'+
                    '<td>'+
                    '<button id="plus-'+troopid+'" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                    '<button id="minus-'+troopid+'" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                    '&nbsp;&nbsp;Ratling'+
                    '</td>'+
                    '<td></td>'+
                    '</tr>'+

                    '<tr><td>&nbsp;</td></tr>'+
                    '</tbody>'
            );

            unit[troopid] = $('#unit-'+troopid);
            info[troopid] = $('#info-'+troopid);

            tell('adjust-used', 30);

            $('#remove-'+troopid).bind('click', function(e) {
                e.preventDefault();
                tell('adjust-used', parseInt($('#'+$(this).data('info')+'-points').text()) * -1);
                unit[$(this).data('info')].remove();
                info[$(this).data('info')].remove();
            });

            $('#plus-'+troopid).bind('click', function(e) {
                e.preventDefault();
                var val = parseInt($('#'+$(this).data('info')+'-num').text());
                $('#'+$(this).data('info')+'-num').text(val + 1);
                val += 1;
                tell('adjust-used', 10);
                var pts = parseInt($('#'+$(this).data('info')+'-points').text()) + 10;
                $('#'+$(this).data('info')+'-points').text(pts);
                if(val > 9) $(this).hide();
                if(val > 3) $('#minus-'+$(this).data('info')).show();
            });

            $('#minus-'+troopid).bind('click', function(e) {
                e.preventDefault();
                var val = parseInt($('#'+$(this).data('info')+'-num').text());
                $('#'+$(this).data('info')+'-num').text(parseInt(val) - 1);
                val -= 1;
                tell('adjust-used', -10);
                var pts = parseInt($('#'+$(this).data('info')+'-points').text()) - 10;
                $('#'+$(this).data('info')+'-points').text(pts);
                if(val < 4) $(this).hide();
                $('#plus-'+$(this).data('info')).show();
            });

            troopid++;
            tell('enable-buttons-militarum');
        });
        button.elwyrdvane.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);

            tbody.elites.append(
                '<tbody id="unit-'+troopid+'">'+
                    '<tr>' +
                    '<td>Wyrdvane Psykers</td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td><span id="'+troopid+'-points">60</span></td>'+
                    '<td>pts</td>'+
                    '<td></td>'+
                    '<td><button id="remove-'+troopid+'" type="button" style="background-color:red" data-info="'+troopid+'" >X</button></td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td></td>'+
                    '<td class="bborder">WS</td>'+
                    '<td class="bborder">BS</td>'+
                    '<td class="bborder">S</td>'+
                    '<td class="bborder">T</td>'+
                    '<td class="bborder">W</td>'+
                    '<td class="bborder">I</td>'+
                    '<td class="bborder">A</td>'+
                    '<td class="bborder">Ld</td>'+
                    '<td class="bborder">Sv</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>Wyrdvane Psyker</td>'+
                    '<td class="bborder">2</td>'+
                    '<td class="bborder">3</td>'+
                    '<td class="bborder">2</td>'+
                    '<td class="bborder">3</td>'+
                    '<td class="bborder">1</td>'+
                    '<td class="bborder">3</td>'+
                    '<td class="bborder">1</td>'+
                    '<td class="bborder">8</td>'+
                    '<td class="bborder">5+</td>'+
                    '</tr>'+

                    '</tbody><tbody id="info-'+troopid+'">'+

                    '<tr>'+
                    '<td>&nbsp;</td>'+
                    '<td>&nbsp;</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td><span><strong>Unit Composition</strong></span></td>'+
                    '<td></td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td><span id="'+troopid+'-num">5</span>&nbsp;<span>Wyrdvane Psyker</span></td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>&nbsp;</td>'+
                    '<td>&nbsp;</td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option1">'+
                    '<td><strong>Options</strong></td>'+
                    '<td></td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option2">'+
                    '<td>'+
                    '<button id="plus-'+troopid+'" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                    '<button id="minus-'+troopid+'" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                    '&nbsp;&nbsp;Psyker'+
                    '</td>'+
                    '<td></td>'+
                    '</tr>'+

                    '<tr><td>&nbsp;</td></tr>'+
                    '</tbody>'
            );

            unit[troopid] = $('#unit-'+troopid);
            info[troopid] = $('#info-'+troopid);

            tell('adjust-used', 60);

            $('#remove-'+troopid).bind('click', function(e) {
                e.preventDefault();
                tell('adjust-used', parseInt($('#'+$(this).data('info')+'-points').text()) * -1);
                unit[$(this).data('info')].remove();
                info[$(this).data('info')].remove();
            });

            $('#plus-'+troopid).bind('click', function(e) {
                e.preventDefault();
                var val = parseInt($('#'+$(this).data('info')+'-num').text());
                $('#'+$(this).data('info')+'-num').text(val + 1);
                val += 1;
                tell('adjust-used', 12);
                var pts = parseInt($('#'+$(this).data('info')+'-points').text()) + 12;
                $('#'+$(this).data('info')+'-points').text(pts);
                if(val > 9) $(this).hide();
                if(val > 5) $('#minus-'+$(this).data('info')).show();
            });

            $('#minus-'+troopid).bind('click', function(e) {
                e.preventDefault();
                var val = parseInt($('#'+$(this).data('info')+'-num').text());
                $('#'+$(this).data('info')+'-num').text(parseInt(val) - 1);
                val -= 1;
                tell('adjust-used', -12);
                var pts = parseInt($('#'+$(this).data('info')+'-points').text()) - 12;
                $('#'+$(this).data('info')+'-points').text(pts);
                if(val < 6) $(this).hide();
                $('#plus-'+$(this).data('info')).show();
            });

            troopid++;
            tell('enable-buttons-militarum');
        });
        button.eltempestus.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);

            tbody.elites.append(
                '<tbody id="unit-'+troopid+'">'+
                    '<tr>' +
                        '<td>Militarum Tempestus Command Squad</td>'+
                        '<td></td>'+
                        '<td></td>'+
                        '<td></td>'+
                        '<td></td>'+
                        '<td></td>'+
                        '<td><span id="'+troopid+'-points">155</span></td>'+
                        '<td>pts</td>'+
                        '<td></td>'+
                        '<td><button id="remove-'+troopid+'" type="button" style="background-color:red" data-info="'+troopid+'" >X</button></td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td></td>'+
                        '<td class="bborder">WS</td>'+
                        '<td class="bborder">BS</td>'+
                        '<td class="bborder">S</td>'+
                        '<td class="bborder">T</td>'+
                        '<td class="bborder">W</td>'+
                        '<td class="bborder">I</td>'+
                        '<td class="bborder">A</td>'+
                        '<td class="bborder">Ld</td>'+
                        '<td class="bborder">Sv</td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>Tempestus Scion</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">4</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">1</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">1</td>'+
                        '<td class="bborder">7</td>'+
                        '<td class="bborder">4+</td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>Tempestor</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">4</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">1</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">2</td>'+
                        '<td class="bborder">8</td>'+
                        '<td class="bborder">4+</td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>Tempestor Prime</td>'+
                        '<td class="bborder">4</td>'+
                        '<td class="bborder">4</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">3</td>'+
                        '<td class="bborder">2</td>'+
                        '<td class="bborder">4</td>'+
                        '<td class="bborder">2</td>'+
                        '<td class="bborder">9</td>'+
                        '<td class="bborder">4+</td>'+
                    '</tr>'+

                '</tbody><tbody id="info-'+troopid+'">'+

                    '<tr>'+
                        '<td>&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td><span><strong>Unit Composition</strong></span></td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td><span>4</span>&nbsp;<span>Tempestus Scions</span></td>'+
                        '<td>Special Weapons: <span id="cs-'+troopid+'-special">0</span></td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td><span>1</span>&nbsp;<span>Tempestor Prime</span></td>'+
                        '<td>'+
                            '<span id="prime-'+troopid+'-cs-upper-display" >Chainsword,&nbsp;</span>'+
                            '<span id="prime-'+troopid+'-pw-upper-display" style="display:none" >Power Weapon,&nbsp;</span>'+
                            '<span id="prime-'+troopid+'-pf-upper-display" style="display:none" >Power Fist,&nbsp;</span>'+
                        '</td>'+
                        '<td>'+
                            '<span id="prime-'+troopid+'-lp-upper-display" >Las-Pistol</span>'+
                            '<span id="prime-'+troopid+'-bp-upper-display" style="display:none" >Bolt-Pistol</span>'+
                            '<span id="prime-'+troopid+'-pp-upper-display" style="display:none" >Plasma-Pistol</span>'+
                        '</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td><span id="'+troopid+'-num">1</span>&nbsp;<span>Tempestus Scion Squads</span></td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option1">'+
                        '<td><strong>Options</strong></td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr id="'+troopid+'-option2">'+
                        '<td>'+
                            '<button id="plus-'+troopid+'" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                            '<button id="minus-'+troopid+'" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                            '&nbsp;&nbsp;Scion Squad'+
                        '</td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>Tempestor Prime Options:</td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr id="prime-pw-'+troopid+'-display">'+
                        '<td><input type="checkbox" id="prime-pw-'+troopid+'" value="15" data-info="'+troopid+'" /> - Power Weapon</td>'+
                    '</tr>'+

                    '<tr id="prime-pf-'+troopid+'-display">'+
                        '<td><input type="checkbox" id="prime-pf-'+troopid+'" value="25" data-info="'+troopid+'" /> - Power Fist</td>'+
                    '</tr>'+

                    '<tr id="prime-bp-'+troopid+'-display">'+
                        '<td><input type="checkbox" id="prime-bp-'+troopid+'" value="0" data-info="'+troopid+'" /> - Bolt Pistol</td>'+
                    '</tr>'+

                    '<tr id="prime-pp-'+troopid+'-display">'+
                        '<td><input type="checkbox" id="prime-pp-'+troopid+'" value="15" data-info="'+troopid+'" /> - Plasma Pistol</td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>Command Squad Options:</td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr id="cs-'+troopid+'-options-vc">'+
                        '<td><input type="checkbox" id="cs-vc-'+troopid+'" value="5" data-info="'+troopid+'" /> - Vox-Caster</td>'+
                    '</tr>'+

                    '<tr id="cs-'+troopid+'-options-ps">'+
                        '<td><input type="checkbox" id="cs-ps-'+troopid+'" value="10" data-info="'+troopid+'" /> - Platoon Standard</td>'+
                    '</tr>'+

                    '<tr id="cs-'+troopid+'-options-mp">'+
                        '<td><input type="checkbox" id="cs-mp-'+troopid+'" value="15" data-info="'+troopid+'" /> - Medi-Pack</td>'+
                    '</tr>'+

                    '<tr id="cs-'+troopid+'-options-fl" >'+
                        '<td>'+
                        '<button id="plus-'+troopid+'-cs-fl" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                        '<button id="minus-'+troopid+'-cs-fl" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                        '&nbsp;&nbsp;Flamer <span id="cs-'+troopid+'-cs-fl-num" >0</span>'+
                        '</td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr id="cs-'+troopid+'-options-gl" >'+
                        '<td>'+
                        '<button id="plus-'+troopid+'-cs-gl" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                        '<button id="minus-'+troopid+'-cs-gl" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                        '&nbsp;&nbsp;Grenade Launcher <span id="cs-'+troopid+'-cs-gl-num" >0</span>'+
                        '</td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr id="cs-'+troopid+'-options-hs" >'+
                        '<td>'+
                        '<button id="plus-'+troopid+'-cs-hs" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                        '<button id="minus-'+troopid+'-cs-hs" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                        '&nbsp;&nbsp;Hot-Shot Volley Gun <span id="cs-'+troopid+'-cs-hs-num" >0</span>'+
                        '</td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr id="cs-'+troopid+'-options-mg" >'+
                        '<td>'+
                        '<button id="plus-'+troopid+'-cs-mg" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                        '<button id="minus-'+troopid+'-cs-mg" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                        '&nbsp;&nbsp;Meltagun <span id="cs-'+troopid+'-cs-mg-num" >0</span>'+
                        '</td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr id="cs-'+troopid+'-options-pg" >'+
                        '<td>'+
                        '<button id="plus-'+troopid+'-cs-pg" type="button" style="background-color:green" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-plus"></span></button>'+
                        '<button id="minus-'+troopid+'-cs-pg" type="button" style="background-color:red; display:none" class="btn btn-sm" data-info="'+troopid+'" ><span class="glyphicon glyphicon-minus"></span></button>'+
                        '&nbsp;&nbsp;Plasma gun <span id="cs-'+troopid+'-cs-pg-num" >0</span>'+
                        '</td>'+
                        '<td></td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>&nbsp;</td>'+
                    '</tr>'+
                '</tbody>'
            );

            unit[troopid] = $('#unit-'+troopid);
            info[troopid] = $('#info-'+troopid);

            tell('adjust-used', 155);

            /* Remove Whole Unit */
            $('#remove-'+troopid).bind('click', function(e) {
                e.preventDefault();
                tell('adjust-used', parseInt($('#'+$(this).data('info')+'-points').text()) * -1);
                unit[$(this).data('info')].remove();
                info[$(this).data('info')].remove();
            });

            /* Add/Drop Squads */
            $('#plus-'+troopid).bind('click', function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                var val = parseInt($('#'+id+'-num').text());
                $('#'+id+'-num').text(val + 1);
                val += 1;
                tell('adjust-used', 70);
                var pts = parseInt($('#'+id+'-points').text()) + 70;
                $('#'+id+'-points').text(pts);
                if(val > 2) $(this).hide();
                if(val > 1) $('#minus-'+$(this).data('info')).show();
            });

            $('#minus-'+troopid).bind('click', function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                var val = parseInt($('#'+id+'-num').text());
                $('#'+id+'-num').text(parseInt(val) - 1);
                val -= 1;
                tell('adjust-used', -70);
                var pts = parseInt($('#'+id+'-points').text()) - 70;
                $('#'+id+'-points').text(pts);
                if(val < 2) $(this).hide();
                $('#plus-'+$(this).data('info')).show();
            });

            /* Prime Tempestor Weapon Options */
            $('#prime-pw-'+troopid).change(function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                var val = parseInt($(this).val());
                if($(this).is(":checked"))
                {
                    $('#prime-pf-'+id+'-display').hide();
                    tell('adjust-used', val);
                    var pts = parseInt($('#'+id+'-points').text()) + val;
                    $('#'+id+'-points').text(pts);
                    $('#prime-'+id+'-cs-upper-display').hide();
                    $('#prime-'+id+'-pw-upper-display').show();
                }
                else
                {
                    $('#prime-pf-'+id+'-display').show();
                    tell('adjust-used', -val);
                    var pts = parseInt($('#'+id+'-points').text()) - val;
                    $('#'+id+'-points').text(pts);
                    $('#prime-'+id+'-cs-upper-display').show();
                    $('#prime-'+id+'-pw-upper-display').hide();
                }
            });

            $('#prime-pf-'+troopid).change(function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                var val = parseInt($(this).val());
                if($(this).is(":checked"))
                {
                    $('#prime-pw-'+id+'-display').hide();
                    tell('adjust-used', val);
                    var pts = parseInt($('#'+id+'-points').text()) + val;
                    $('#'+id+'-points').text(pts);
                    $('#prime-'+id+'-cs-upper-display').hide();
                    $('#prime-'+id+'-pf-upper-display').show();
                }
                else
                {
                    $('#prime-pw-'+id+'-display').show();
                    tell('adjust-used', -val);
                    var pts = parseInt($('#'+id+'-points').text()) - val;
                    $('#'+id+'-points').text(pts);
                    $('#prime-'+id+'-cs-upper-display').show();
                    $('#prime-'+id+'-pf-upper-display').hide();
                }
            });

            $('#prime-bp-'+troopid).change(function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                var val = parseInt($(this).val());
                if($(this).is(":checked"))
                {
                    $('#prime-pp-'+id+'-display').hide();
                    $('#prime-'+id+'-lp-upper-display').hide();
                    $('#prime-'+id+'-bp-upper-display').show();
                }
                else
                {
                    $('#prime-pp-'+id+'-display').show();
                    $('#prime-'+id+'-bp-upper-display').hide();
                    $('#prime-'+id+'-lp-upper-display').show();
                }
            });

            $('#prime-pp-'+troopid).change(function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                var val = parseInt($(this).val());
                if($(this).is(":checked"))
                {
                    $('#prime-bp-'+id+'-display').hide();
                    tell('adjust-used', val);
                    var pts = parseInt($('#'+id+'-points').text()) + val;
                    $('#'+id+'-points').text(pts);
                    $('#prime-'+id+'-lp-upper-display').hide();
                    $('#prime-'+id+'-pp-upper-display').show();
                }
                else
                {
                    $('#prime-bp-'+id+'-display').show();
                    tell('adjust-used', -val);
                    var pts = parseInt($('#'+id+'-points').text()) - val;
                    $('#'+id+'-points').text(pts);
                    $('#prime-'+id+'-bp-upper-display').hide();
                    $('#prime-'+id+'-pp-upper-display').show();
                }
            });


            /* COMMAND SQUAD OPTIONS */
            $('#cs-vc-'+troopid).change(function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                var val = parseInt($(this).val());
                var num = parseInt($('#cs-'+id+'-cs-fl-num').text()) +
                          parseInt($('#cs-'+id+'-cs-gl-num').text()) +
                          parseInt($('#cs-'+id+'-cs-hs-num').text()) +
                          parseInt($('#cs-'+id+'-cs-mg-num').text()) +
                          parseInt($('#cs-'+id+'-cs-pg-num').text());
                if($('#cs-vc-'+id).is(':checked')) num++;
                if($('#cs-ps-'+id).is(':checked')) num++;
                if($('#cs-mp-'+id).is(':checked')) num++;
                $('#cs-vc-'+id).show();
                $('#cs-ps-'+id).show();
                $('#cs-mp-'+id).show();

                if(parseInt($('#cs-'+id+'-cs-fl-num').text()) == 0) $('#minus-'+troopid+'-cs-fl').hide();
                if(parseInt($('#cs-'+id+'-cs-gl-num').text()) == 0) $('#minus-'+troopid+'-cs-gl').hide();
                if(parseInt($('#cs-'+id+'-cs-hs-num').text()) == 0) $('#minus-'+troopid+'-cs-hs').hide();
                if(parseInt($('#cs-'+id+'-cs-mg-num').text()) == 0) $('#minus-'+troopid+'-cs-mg').hide();
                if(parseInt($('#cs-'+id+'-cs-pg-num').text()) == 0) $('#minus-'+troopid+'-cs-pg').hide();

                if($(this).is(":checked"))
                {
                    tell('adjust-used', val);
                    $('#'+id+'-points').text(parseInt($('#'+id+'-points').text()) + val);
                    if(num > 3)
                    {
                        $('#plus-'+id+'-cs-fl').hide();
                        $('#plus-'+id+'-cs-gl').hide();
                        $('#plus-'+id+'-cs-hs').hide();
                        $('#plus-'+id+'-cs-mg').hide();
                        $('#plus-'+id+'-cs-pg').hide();
                        if(!$('#cs-vc-'+id).is(':checked')) $('#cs-vc-'+id).hide();
                        if(!$('#cs-ps-'+id).is(':checked')) $('#cs-ps-'+id).hide();
                        if(!$('#cs-mp-'+id).is(':checked')) $('#cs-mp-'+id).hide();
                    }
                }
                else
                {
                    tell('adjust-used', -val);
                    $('#'+id+'-points').text(parseInt($('#'+id+'-points').text()) - val);
                    if(num < 4)
                    {
                        $('#plus-'+id+'-cs-fl').show();
                        $('#plus-'+id+'-cs-gl').show();
                        $('#plus-'+id+'-cs-hs').show();
                        $('#plus-'+id+'-cs-mg').show();
                        $('#plus-'+id+'-cs-pg').show();
                    }
                }
            });

            $('#cs-ps-'+troopid).change(function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                var val = parseInt($(this).val());
                var num = parseInt($('#cs-'+id+'-cs-fl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-gl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-hs-num').text()) +
                    parseInt($('#cs-'+id+'-cs-mg-num').text()) +
                    parseInt($('#cs-'+id+'-cs-pg-num').text());
                if($('#cs-vc-'+id).is(':checked')) num++;
                if($('#cs-ps-'+id).is(':checked')) num++;
                if($('#cs-mp-'+id).is(':checked')) num++;
                $('#cs-vc-'+id).show();
                $('#cs-ps-'+id).show();
                $('#cs-mp-'+id).show();

                if(parseInt($('#cs-'+id+'-cs-fl-num').text()) == 0) $('#minus-'+troopid+'-cs-fl').hide();
                if(parseInt($('#cs-'+id+'-cs-gl-num').text()) == 0) $('#minus-'+troopid+'-cs-gl').hide();
                if(parseInt($('#cs-'+id+'-cs-hs-num').text()) == 0) $('#minus-'+troopid+'-cs-hs').hide();
                if(parseInt($('#cs-'+id+'-cs-mg-num').text()) == 0) $('#minus-'+troopid+'-cs-mg').hide();
                if(parseInt($('#cs-'+id+'-cs-pg-num').text()) == 0) $('#minus-'+troopid+'-cs-pg').hide();

                if($(this).is(":checked"))
                {
                    tell('adjust-used', val);
                    $('#'+id+'-points').text(parseInt($('#'+id+'-points').text()) + val);
                    if(num > 3)
                    {
                        $('#plus-'+id+'-cs-fl').hide();
                        $('#plus-'+id+'-cs-gl').hide();
                        $('#plus-'+id+'-cs-hs').hide();
                        $('#plus-'+id+'-cs-mg').hide();
                        $('#plus-'+id+'-cs-pg').hide();
                        if(!$('#cs-vc-'+id).is(':checked')) $('#cs-vc-'+id).hide();
                        if(!$('#cs-ps-'+id).is(':checked')) $('#cs-ps-'+id).hide();
                        if(!$('#cs-mp-'+id).is(':checked')) $('#cs-mp-'+id).hide();
                    }
                }
                else
                {
                    tell('adjust-used', -val);
                    $('#'+id+'-points').text(parseInt($('#'+id+'-points').text()) - val);
                    if(num < 4)
                    {
                        $('#plus-'+id+'-cs-fl').show();
                        $('#plus-'+id+'-cs-gl').show();
                        $('#plus-'+id+'-cs-hs').show();
                        $('#plus-'+id+'-cs-mg').show();
                        $('#plus-'+id+'-cs-pg').show();
                    }
                }
            });

            $('#cs-mp-'+troopid).change(function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                var val = parseInt($(this).val());
                var num = parseInt($('#cs-'+id+'-cs-fl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-gl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-hs-num').text()) +
                    parseInt($('#cs-'+id+'-cs-mg-num').text()) +
                    parseInt($('#cs-'+id+'-cs-pg-num').text());
                if($('#cs-vc-'+id).is(':checked')) num++;
                if($('#cs-ps-'+id).is(':checked')) num++;
                if($('#cs-mp-'+id).is(':checked')) num++;
                $('#cs-vc-'+id).show();
                $('#cs-ps-'+id).show();
                $('#cs-mp-'+id).show();

                if(parseInt($('#cs-'+id+'-cs-fl-num').text()) == 0) $('#minus-'+troopid+'-cs-fl').hide();
                if(parseInt($('#cs-'+id+'-cs-gl-num').text()) == 0) $('#minus-'+troopid+'-cs-gl').hide();
                if(parseInt($('#cs-'+id+'-cs-hs-num').text()) == 0) $('#minus-'+troopid+'-cs-hs').hide();
                if(parseInt($('#cs-'+id+'-cs-mg-num').text()) == 0) $('#minus-'+troopid+'-cs-mg').hide();
                if(parseInt($('#cs-'+id+'-cs-pg-num').text()) == 0) $('#minus-'+troopid+'-cs-pg').hide();

                if($(this).is(":checked"))
                {
                    tell('adjust-used', val);
                    $('#'+id+'-points').text(parseInt($('#'+id+'-points').text()) + val);
                    if(num > 3)
                    {
                        $('#plus-'+id+'-cs-fl').hide();
                        $('#plus-'+id+'-cs-gl').hide();
                        $('#plus-'+id+'-cs-hs').hide();
                        $('#plus-'+id+'-cs-mg').hide();
                        $('#plus-'+id+'-cs-pg').hide();
                        if(!$('#cs-vc-'+id).is(':checked')) $('#cs-vc-'+id).hide();
                        if(!$('#cs-ps-'+id).is(':checked')) $('#cs-ps-'+id).hide();
                        if(!$('#cs-mp-'+id).is(':checked')) $('#cs-mp-'+id).hide();
                    }
                }
                else
                {
                    tell('adjust-used', -val);
                    $('#'+id+'-points').text(parseInt($('#'+id+'-points').text()) - val);
                    if(num < 4)
                    {
                        $('#plus-'+id+'-cs-fl').show();
                        $('#plus-'+id+'-cs-gl').show();
                        $('#plus-'+id+'-cs-hs').show();
                        $('#plus-'+id+'-cs-mg').show();
                        $('#plus-'+id+'-cs-pg').show();
                    }
                }
            });

            $('#plus-'+troopid+'-cs-fl').bind('click', function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                $('#cs-'+id+'-cs-fl-num').text(parseInt($('#cs-'+id+'-cs-fl-num').text()) + 1);
                var num = parseInt($('#cs-'+id+'-cs-fl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-gl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-hs-num').text()) +
                    parseInt($('#cs-'+id+'-cs-mg-num').text()) +
                    parseInt($('#cs-'+id+'-cs-pg-num').text());
                if($('#cs-vc-'+id).is(':checked')) num++;
                if($('#cs-ps-'+id).is(':checked')) num++;
                if($('#cs-mp-'+id).is(':checked')) num++;
                tell('adjust-used', 5);
                $('#'+id+'-points').text(parseInt($('#'+id+'-points').text()) + 5);
                if(num > 3)
                {
                    $('#plus-'+id+'-cs-fl').hide();
                    $('#plus-'+id+'-cs-gl').hide();
                    $('#plus-'+id+'-cs-hs').hide();
                    $('#plus-'+id+'-cs-mg').hide();
                    $('#plus-'+id+'-cs-pg').hide();
                    if(!$('#cs-vc-'+id).is(':checked')) $('#cs-vc-'+id).hide();
                    if(!$('#cs-ps-'+id).is(':checked')) $('#cs-ps-'+id).hide();
                    if(!$('#cs-mp-'+id).is(':checked')) $('#cs-mp-'+id).hide();
                }
                if(num > 0) $('#minus-'+id+'-cs-fl').show();

            });
            $('#minus-'+troopid+'-cs-fl').bind('click', function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                $('#cs-'+id+'-cs-fl-num').text(parseInt($('#cs-'+id+'-cs-fl-num').text()) - 1);
                var num = parseInt($('#cs-'+id+'-cs-fl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-gl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-hs-num').text()) +
                    parseInt($('#cs-'+id+'-cs-mg-num').text()) +
                    parseInt($('#cs-'+id+'-cs-pg-num').text());
                if($('#cs-vc-'+id).is(':checked')) num++;
                if($('#cs-ps-'+id).is(':checked')) num++;
                if($('#cs-mp-'+id).is(':checked')) num++;

                tell('adjust-used', -5);
                $('#'+id+'-points').text(parseInt($('#'+id+'-points').text()) - 5);
                if(num < 1) $(this).hide();
                if(num < 4)
                {
                    $('#plus-'+id+'-cs-fl').show();
                    $('#plus-'+id+'-cs-gl').show();
                    $('#plus-'+id+'-cs-hs').show();
                    $('#plus-'+id+'-cs-mg').show();
                    $('#plus-'+id+'-cs-pg').show();
                    if(!$('#cs-vc-'+id).is(':checked')) $('#cs-vc-'+id).show();
                    if(!$('#cs-ps-'+id).is(':checked')) $('#cs-ps-'+id).show();
                    if(!$('#cs-mp-'+id).is(':checked')) $('#cs-mp-'+id).show();
                }
            });

            $('#plus-'+troopid+'-cs-gl').bind('click', function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                $('#cs-'+id+'-cs-gl-num').text(parseInt($('#cs-'+id+'-cs-gl-num').text()) + 1);
                var num = parseInt($('#cs-'+id+'-cs-fl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-gl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-hs-num').text()) +
                    parseInt($('#cs-'+id+'-cs-mg-num').text()) +
                    parseInt($('#cs-'+id+'-cs-pg-num').text());
                if($('#cs-vc-'+id).is(':checked')) num++;
                if($('#cs-ps-'+id).is(':checked')) num++;
                if($('#cs-mp-'+id).is(':checked')) num++;
                tell('adjust-used', 5);
                $('#'+id+'-points').text(parseInt($('#'+id+'-points').text()) + 5);
                if(num > 3)
                {
                    $('#plus-'+id+'-cs-fl').hide();
                    $('#plus-'+id+'-cs-gl').hide();
                    $('#plus-'+id+'-cs-hs').hide();
                    $('#plus-'+id+'-cs-mg').hide();
                    $('#plus-'+id+'-cs-pg').hide();
                    if(!$('#cs-vc-'+id).is(':checked')) $('#cs-vc-'+id).hide();
                    if(!$('#cs-ps-'+id).is(':checked')) $('#cs-ps-'+id).hide();
                    if(!$('#cs-mp-'+id).is(':checked')) $('#cs-mp-'+id).hide();
                }
                if(num > 0) $('#minus-'+id+'-cs-gl').show();

            });
            $('#minus-'+troopid+'-cs-gl').bind('click', function(e) {
                e.preventDefault();
                var id = $(this).data('info');
                $('#cs-'+id+'-cs-gl-num').text(parseInt($('#cs-'+id+'-cs-gl-num').text()) - 1);
                var num = parseInt($('#cs-'+id+'-cs-fl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-gl-num').text()) +
                    parseInt($('#cs-'+id+'-cs-hs-num').text()) +
                    parseInt($('#cs-'+id+'-cs-mg-num').text()) +
                    parseInt($('#cs-'+id+'-cs-pg-num').text());
                if($('#cs-vc-'+id).is(':checked')) num++;
                if($('#cs-ps-'+id).is(':checked')) num++;
                if($('#cs-mp-'+id).is(':checked')) num++;

                tell('adjust-used', -5);
                $('#'+id+'-points').text(parseInt($('#'+id+'-points').text()) - 5);
                if(num < 1) $(this).hide();
                if(num < 4)
                {
                    $('#plus-'+id+'-cs-fl').show();
                    $('#plus-'+id+'-cs-gl').show();
                    $('#plus-'+id+'-cs-hs').show();
                    $('#plus-'+id+'-cs-mg').show();
                    $('#plus-'+id+'-cs-pg').show();
                    if(!$('#cs-vc-'+id).is(':checked')) $('#cs-vc-'+id).show();
                    if(!$('#cs-ps-'+id).is(':checked')) $('#cs-ps-'+id).show();
                    if(!$('#cs-mp-'+id).is(':checked')) $('#cs-mp-'+id).show();
                }
            });



            troopid++;
            tell('enable-buttons-militarum');
        });

        // Troops
        button.trplatoon.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-troops', 1);
            var troopnum = $('#fourtyk-militarum-troops-platoon-num').val();


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.trveterns.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-troops', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });

        // Fast Attack
        button.fascout.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.faarmoured.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.fariders.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.fahellhound.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.favalkyrie.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.favendetta.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });


        // Heavy Support
        button.hsleman.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hshydra.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hsbasilisk.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hswyvern.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hsmanticore.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.hsdeathstrike.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });


    });

    listen('disable-buttons-militarum', function() {
        for(var key in button)
        {
            if (button.hasOwnProperty(key))
            {
                button[key].hide();
            }
        }
        tell('check');
    });

    listen('enable-buttons-militarum', function() {
        tell('check');
        for(var key in button)
        {
            if (button.hasOwnProperty(key))
            {
                button[key].show();
            }
        }
    });

});