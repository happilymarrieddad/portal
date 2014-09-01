// Astra Militarum functions
$(function() {

    var tbody = {};

    var button = {};

    listen('start', function() {

        tbody.hq = $('#fourtyk-hq');
        tbody.troops = $('#fourtyk-elites');
        tbody.elites = $('#fourtyk-troops');
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


            tell('enable-buttons-militarum');
            tell('alert.success', 'Commisar Yarrick added successfully!');
        });
        button.hqccs.bind('click', function(e) {
            e.preventDefault();
            tell('alert.loading', 'Adding Company Command Squad');
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            tell('enable-buttons-militarum');
            tell('alert.success', 'Company Command Squad added successfully!');
        });
        button.hqck.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            tell('enable-buttons-militarum');
        });
        button.hqstraken.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            tell('enable-buttons-militarum');
        });
        button.hqnork.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            tell('enable-buttons-militarum');
        });
        button.hqpask.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            tell('enable-buttons-militarum');
        });
        button.hqlcomm.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            tell('enable-buttons-militarum');
        });
        button.hqcomm.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            tell('enable-buttons-militarum');
        });
        button.hqmpriest.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            tell('enable-buttons-militarum');
        });
        button.hqppsyker.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            tell('enable-buttons-militarum');
        });
        button.hqenginseer.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-hq', 1);


            tell('enable-buttons-militarum');
        });

        // Elites
        button.elogryns.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);


            tell('enable-buttons-militarum');
        });
        button.elbullogryns.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);


            tell('enable-buttons-militarum');
        });
        button.elratlings.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);


            tell('enable-buttons-militarum');
        });
        button.elwyrdvane.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);


            tell('enable-buttons-militarum');
        });
        button.eltempestus.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-elites', 1);


            tell('enable-buttons-militarum');
        });

        // Troops
        button.trplatoon.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-troops', 1);
            var troopnum = $('#fourtyk-militarum-troops-platoon-num').val();


            tell('enable-buttons-militarum');
        });
        button.trveterns.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-troops', 1);


            tell('enable-buttons-militarum');
        });

        // Fast Attack
        button.fascout.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            tell('enable-buttons-militarum');
        });
        button.faarmoured.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            tell('enable-buttons-militarum');
        });
        button.fariders.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            tell('enable-buttons-militarum');
        });
        button.fahellhound.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            tell('enable-buttons-militarum');
        });
        button.favalkyrie.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            tell('enable-buttons-militarum');
        });
        button.favendetta.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-fastattack', 1);


            tell('enable-buttons-militarum');
        });


        // Heavy Support
        button.hsleman.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            tell('enable-buttons-militarum');
        });
        button.hshydra.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            tell('enable-buttons-militarum');
        });
        button.hsbasilisk.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            tell('enable-buttons-militarum');
        });
        button.hswyvern.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            tell('enable-buttons-militarum');
        });
        button.hsmanticore.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


            tell('enable-buttons-militarum');
        });
        button.hsdeathstrike.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');
            tell('adjust-heavysupport', 1);


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