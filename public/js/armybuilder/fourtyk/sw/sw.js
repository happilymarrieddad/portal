// Unit - Configs
$(function() {

    var display = {};

    var add = {};

    listen('bind', function() {

        display.none = $('#');

        // HQ
        display.wolflord = $('#display-config-hq-wolflord');
        display.blackmane = $('#display-config-hq-blackmane');
        display.deathwolf = $('#display-config-hq-deathwolf');
        display.wolfborn = $('#display-config-hq-wolfborn');
        display.runepriest = $('#display-config-hq-runepriest');
        display.stormcaller = $('#display-config-hq-stormcaller');
        display.wolfpriest = $('#display-config-hq-wolfpriest');
        display.slayer = $('#display-config-hq-slayer');
        display.wolfguard = $('#display-config-hq-wolfguard');
        display.bjorn = $('#display-config-hq-bjorn');

        // Troops
        display.blood = $('#display-config-tr-blood');
        display.trickster = $('#display-config-tr-lukas');
        display.hunters = $('#display-config-tr-grey');

        // Elites

        // Fast Attack

        // Heavy Support

        // Lords of War




        // HQ
        add.wolflord = $('#hq-wolflord');
        add.blackmane = $('#hq-blackmane');
        add.deathwolf = $('#hq-deathwolf');
        add.wolfborn = $('#hq-wolfborn');
        add.runepriest = $('#hq-runepriest');
        add.stormcaller = $('#hq-stormcaller');
        add.wolfpriest = $('#hq-wolfpriest');
        add.slayer = $('#hq-slayer');
        add.wolfguard = $('#hq-wolfguard');
        add.bjorn = $('#hq-bjorn');

        // Troops
        add.blood = $('#tr-blood');
        add.trickster = $('#tr-trickster');
        add.hunters = $('#tr-hunters');

        // Elites

        // Fast Attack

        // Heavy Support

        // Lords of War


        // Add bind functions
        add.wolflord.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'wolflord');
            tell('config-hq-wolflord');
        });
        add.blackmane.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'blackmane');
            tell('config-hq-blackmane');
        });
        add.deathwolf.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'deathwolf');
            tell('config-hq-deathwolf');
        });
        add.wolfborn.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'wolfborn');
            tell('config-hq-wolfborn');
        });
        add.runepriest.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'runepriest');
            tell('config-hq-runepriest');
        });
        add.stormcaller.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'stormcaller');
            tell('config-hq-stormcaller');
        });
        add.wolfpriest.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'wolfpriest');
            tell('config-hq-wolfpriest');
        });
        add.slayer.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'slayer');
            tell('config-hq-slayer');
        });
        add.wolfguard.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'wolfguard');
            tell('config-hq-wolfguard');
        });
        add.bjorn.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'bjorn');
            tell('config-hq-bjorn');
        });

        add.blood.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'blood');
            tell('config-tr-blood');
        });
        add.trickster.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'trickster');
        });
        add.hunters.bind('click', function(e) {
            e.preventDefault();
            tell('route-displays', 'hunters');
            tell('config-tr-hunters');
        });


    }); // END BIND

    listen('route-displays', function(lbl) {
        for(var key in display)
        {
            if(display.hasOwnProperty(key))
            {
                display[key].hide();
            }
        }
        display[lbl].show();
    });

});