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


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.elwyrdvane.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);


            troopid++;
            tell('enable-buttons-militarum');
        });
        button.eltempestus.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);


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