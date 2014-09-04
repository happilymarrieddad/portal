// Page System - Controls the general ui and buttons on the page
$(function() {

    var button = {};
    var ui = {};
    var input = {};
    var display = {};
    var tbody = {};

    var hq = 0;
    var troops = 0;
    var elites = 0;
    var fastattack = 0;
    var heavysupport = 0;
    var totalunits = 0;

    listen('bind', function () {
        // Divs for the program
        ui.main = $('#menu-main');
        ui.army = $('#menu-army');
        ui.fantasy = $('.fantasy');
        ui.fourtyk = $('.fourtyk');
        ui.bsystem = $('#build-system');
        ui.bpoints = $('#build-points');
        ui.barmy = $('#build-army');
        ui.title = $('#army-title');

        tbody.hq = $('#fourtyk-hq');
        tbody.troops = $('#fourtyk-troops');
        tbody.elites = $('#fourtyk-elites');
        tbody.fastattack = $('#fourtyk-fastattack');
        tbody.heavysupport = $('#fourtyk-heavysupport');

        // Slider buttons for the menus and the clear button
        button.mainslider = $('#button-slide-main');
        button.armyslider = $('#button-slide-army');
        button.cleararmy = $('#button-clear-army');

        // 40k + - buttons
        button.hqdown = $('#fourtyk-hq-plus');
        button.hqup = $('#fourtyk-hq-minus');
        button.eldown = $('#fourtyk-elites-plus');
        button.elup = $('#fourtyk-elites-minus');
        button.trdown = $('#fourtyk-troops-plus');
        button.trup = $('#fourtyk-troops-minus');
        button.fadown = $('#fourtyk-fastattack-plus');
        button.faup = $('#fourtyk-fastattack-minus');
        button.hsdown = $('#fourtyk-heavysupport-plus');
        button.hsup = $('#fourtyk-heavysupport-minus');

        // Dropdown menu button on main menu which sets the program to the proper army
        button.beastmen = $('#button-beastmen');
        button.bretonnia = $('#button-bretonnia');
        button.fdaemons = $('#button-fdaemons');
        button.darkelves = $('#button-darkelves');
        button.dwarfs = $('#button-dwarfs');
        button.highelves = $('#button-highelves');
        button.lizardmen = $('#button-lizardmen');
        button.ogre = $('#button-ogre');
        button.orcsgoblins = $('#button-orcsgoblins');
        button.skaven = $('#button-skaven');
        button.empire = $('#button-empire');
        button.tombkings = $('#button-tombkings');
        button.vampire = $('#button-vampire');
        button.chaoswarriors = $('#button-chaoswarriors');
        button.woodelves = $('#button-woodelves');

        button.sororitas = $('#button-sororitas');
        button.militarum = $('#button-militarum');
        button.bloodangels = $('#button-bloodangels');
        button.kdaemons = $('#button-kdaemons');
        button.chaosmarines = $('#button-chaosmarines');
        button.darkangels = $('#button-darkangels');
        button.darkeldar = $('#button-darkeldar');
        button.eldar = $('#button-eldar');
        button.greyknights = $('#button-greyknights');
        button.inquisition = $('#button-inquisition');
        button.imperialknights = $('#button-imperialknights');
        button.assassinorum = $('#button-assassinorum');
        button.tempestus = $('#button-tempestus');
        button.necrons = $('#button-necrons');
        button.orks = $('#button-orks');
        button.spacemarines = $('#button-spacemarines');
        button.spacewolves = $('#button-spacewolves');
        button.tau = $('#button-tau');
        button.tyranids = $('#button-tyranids');


        input.totalpoints = $('#input-points');

        display.used = $('#display-used');
        display.left = $('#display-left');
        display.totalunits = $('#display-totalunits');


        button.mainslider.bind('click', function(e) {
            e.preventDefault();
            ui.main.slideToggle();
        });

        button.armyslider.bind('click', function(e) {
            e.preventDefault();
            window.location.reload();
        });

        button.cleararmy.bind('click', function(e) {
            e.preventDefault();
            tell('clear');
        });

        // fantasy
        button.beastmen.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Beastmen');
        });
        button.bretonnia.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Bretonnia');
        });
        button.fdaemons.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Daemons of Chaos');
        });
        button.darkelves.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Dark Elves');
        });
        button.dwarfs.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Dwarfs');
        });
        button.highelves.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'High Elves');
        });
        button.lizardmen.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Lizardmen');
        });
        button.ogre.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Ogre Kingdoms');
        });
        button.orcsgoblins.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Orcs & Goblins');
        });
        button.skaven.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Skaven');
        });
        button.empire.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'The Empire');
        });
        button.tombkings.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Tomb Kings');
        });
        button.vampire.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Vampire Counts');
        });
        button.chaoswarriors.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Chaos Warriors');
        });
        button.woodelves.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fantasy');
            tell('army', 'Wood Elves');
        });

        // 40k
        button.sororitas.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Adepta Sororitas','sororitas']);
        });
        button.militarum.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Astra Militarum','militarum']);
        });
        button.bloodangels.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Blood Angels','bloodangels']);
        });
        button.kdaemons.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Chaos Daemons','kdaemons']);
        });
        button.chaosmarines.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Chaos Space Marines','chaosmarines']);
        });
        button.darkangels.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Dark Angels','darkangels']);
        });
        button.darkeldar.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Dark Eldar','darkeldar']);
        });
        button.eldar.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Eldar','eldar']);
        });
        button.greyknights.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Grey Knights','greyknights']);
        });
        button.inquisition.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Inquisition','inquisition']);
        });
        button.imperialknights.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Imperial Knights','imperialknights']);
        });
        button.assassinorum.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Officio Assassinorum','assassinorum']);
        });
        button.tempestus.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Militarum Tempestus','tempestus']);
        });
        button.necrons.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Necrons','necrons']);
        });
        button.orks.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Orks','orks']);
        });
        button.spacemarines.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Space Marines','spacemarines']);
        });
        button.spacewolves.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Space Wolves','spacewolves']);
        });
        button.tau.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Tau Empire','tau']);
        });
        button.tyranids.bind('click', function(e) {
            e.preventDefault();
            tell('game', 'fourtyk');
            tell('army', ['Tyranids','tyranids']);
        });


        /* 40k + - buttons */
        button.hqdown.bind('click', function(e) {
            e.preventDefault();
            $(this).toggle();
            button.hqup.show();
            $('#hq-dropdown').slideDown();
        });
        button.hqup.bind('click', function(e) {
            e.preventDefault();
            $(this).toggle();
            button.hqdown.show();
            $('#hq-dropdown').slideUp();
        });
        button.eldown.bind('click', function(e) {
            e.preventDefault();
            $(this).toggle();
            button.elup.show();
            $('#elites-dropdown').slideDown();
        });
        button.elup.bind('click', function(e) {
            e.preventDefault();
            $(this).toggle();
            button.eldown.show();
            $('#elites-dropdown').slideUp();
        });
        button.trdown.bind('click', function(e) {
            e.preventDefault();
            $(this).toggle();
            button.trup.show();
            $('#troops-dropdown').slideDown();
        });
        button.trup.bind('click', function(e) {
            e.preventDefault();
            $(this).toggle();
            button.trdown.show();
            $('#troops-dropdown').slideUp();
        });
        button.fadown.bind('click', function(e) {
            e.preventDefault();
            $(this).toggle();
            button.faup.show();
            $('#fastattack-dropdown').slideDown();
        });
        button.faup.bind('click', function(e) {
            e.preventDefault();
            $(this).toggle();
            button.fadown.show();
            $('#fastattack-dropdown').slideUp();
        });
        button.hsdown.bind('click', function(e) {
            e.preventDefault();
            $(this).toggle();
            button.hsup.show();
            $('#heavysupport-dropdown').slideDown();
        });
        button.hsup.bind('click', function(e) {
            e.preventDefault();
            $(this).toggle();
            button.hsdown.show();
            $('#heavysupport-dropdown').slideUp();
        });


        input.totalpoints.keyup(function() {
            tell('alert.hide');
            var val = $(this).val();
            display.used.text((String) (used));
            if(isNaN(val))
            {
                $(this).val('');
                ui.barmy.hide();
                tell('alert.error', 'Points must be a valid number.');
            }
            else if(val < 1)
            {
                ui.barmy.hide();
                tell('alert.error', 'Points must be a positive number');
            }
            else if(val > 50000)
            {
                ui.barmy.hide();
                tell('alert.error', 'Current points limit is 50,000. Please adjust your total amount.');
            }
            else
            {
                tpoints = val;
                tell('update-points-display');
                ui.barmy.show();
            }
        });

    });

    listen('game', function(val) {
        ui.army.toggle();
        ui.fantasy.hide();
        ui.fourtyk.hide();
        ui[val].show();
        ui.bsystem.show();
        button.armyslider.show();
        button.cleararmy.show();
    });

    listen('army', function(val) {
        tell('alert.loading', 'Loading ' + val[0]);
        ui.title.text(val[0]);
        $('.'+val[1]).show();
        ui.bpoints.show();
        tell('alert.success', 'Successfully loaded ' + val[0]);
    });

    listen('hq-hide', function() {
        $('.fourtyk-hq').hide();
    });
    listen('elites-hide', function() {
        $('.fourtyk-elites').hide();
    });
    listen('troops-hide', function() {
        $('.fourtyk-troops').hide();
    });
    listen('fastattack-hide', function() {
        $('.fourtyk-fastattack').hide();
    });
    listen('heavysupport-hide', function() {
        $('.fourtyk-heavysupport').hide();
    });

    listen('hq-show', function() {
        $('.fourtyk-hq').show();
    });
    listen('elites-show', function() {
        $('.fourtyk-elites').show();
    });
    listen('troops-show', function() {
        $('.fourtyk-troops').show();
    });
    listen('fastattack-show', function() {
        $('.fourtyk-fastattack').show();
    });
    listen('heavysupport-show', function() {
        $('.fourtyk-heavysupport').show();
    });

    listen('check', function() {
        if(hq == 0)
        {
            tell('hq-hide');
            tbody['hq'].html('');
        }
        else tell('hq-show');
        if(elites == 0)
        {
            tell('elites-hide');
            tbody['elites'].html('');
        }
        else tell('elites-show');
        if(troops == 0)
        {
            tell('troops-hide');
            tbody['troops'].html('');
        }
        else tell('troops-show');
        if(fastattack == 0)
        {
            tell('fastattack-hide');
            tbody['fastattack'].html('');
        }
        else tell('fastattack-show');
        if(heavysupport == 0)
        {
            tell('heavysupport-hide');
            tbody['heavysupport'].html('');
        }
        else tell('heavysupport-show');
        display.totalunits.text(totalunits);
    });

    listen('clear', function() {
        hq = 0;
        elites = 0;
        troops = 0;
        fastattack = 0;
        heavysupport = 0;
        totalunits = 0;
        tell('check');
    });

    listen('adjust-hq', function(val) {
        hq += val;
        totalunits += val;
        tell('check');
    });
    listen('adjust-elites', function(val) {
        elites += val;
        totalunits += val;
        tell('check');
    });
    listen('adjust-troops', function(val) {
        troops += val;
        totalunits += val;
        tell('check');
    });
    listen('adjust-fastattack', function(val) {
        fastattack += val;
        totalunits += val;
        tell('check');
    });
    listen('adjust-heavysupport', function(val) {
        heavysupport += val;
        totalunits += val;
        tell('check');
    });

    listen('update-points-display', function() {
        display.used.text(used);
        display.left.text(parseInt(tpoints) - parseInt(used));
    });

    listen('adjust-used', function(val) {
        used += val;
        tell('update-points-display');
    });
});