$(document).ready(function () {
    $('.dropdown-menu').mouseleave(function () {
        $(".myFakeClass").dropdown('toggle');
    });
});

Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

/* Javascript for Survey Program */
if (!String.prototype.fill) {
    String.prototype.fill = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number] : match;
        });
    };
}

// Listen/Tell System
(function ($) {
    var que = {}, debug = true;

    function log() {
        if (!debug) return;
        if (console && console.log) console.log(arguments);
    }

    function tell(e, p) {
        p = p || null;
        if (!que.hasOwnProperty(e)) return log(e, 'nothing listening');
        $.each(que[e], function (i, o) {
            var v = o(p) || null;
            log('event', e, 'with', p, '=> ' + v);
        });
        return true;
    }

    function listen(e, obj) {
        if (typeof e == 'object') {
            $.each(e, function (i, ev) {
                listen(ev, obj);
            });
        } else if (typeof e == 'string') {
            if (!que.hasOwnProperty(e)) que[e] = [];
            que[e].push(obj);
        } else {
            log('Que Reject', e);
        }
    }

    // Export to global
    window.tell = tell;
    window.listen = listen;
    window.debug = debug;

    if (debug) window.que = que;


}(jQuery));

// Server jQuery
(function($){
    listen('server.get', function (cfg) {
        $.ajax({
            dataType : 'json',
            url      : cfg[0],
            data     : cfg[1],
            method   : 'get'
        }).always(cfg[2]);
        return "getting package from server";
    });

    listen('server.post', function (cfg) {
        $.ajax({
            dataType : 'json',
            url      : cfg[0],
            data     : cfg[1],
            method   : 'post'
        }).always(cfg[2]);
        return "posted package to server";
    });
}(jQuery));


// Message System
$(function () {

    var button = {};

    listen('bind', function() {

        button.error = $('#alert-error');
        button.loading = $('#alert-loading');
        button.success = $('#alert-success');

        button.error.bind('click', function() {
            $(this).hide();
        });
        button.loading.bind('click', function() {
            $(this).hide();
        });
        button.success.bind('click', function() {
            $(this).hide();
        });

    });

    listen('alert.error', function(val) {
        tell('alert.hide');
        button.error.show();
        button.error.text(val);
        setTimeout(function() {
            button.error.fadeOut('fast');
        }, 4000);
    });

    listen('alert.loading', function(val) {
        tell('alert.hide');
        button.loading.show();
        button.loading.text(val);
        setTimeout(function() {
            button.loading.fadeOut('fast');
        }, 4000);
    });

    listen('alert.success', function(val) {
        tell('alert.hide');
        button.success.show();
        button.success.text(val);
        setTimeout(function() {
            button.success.fadeOut('fast');
        }, 4000);
    });

    listen('alert.hide', function() {
        button.loading.hide();
        button.error.hide();
        button.success.hide();
    });
});

// Page System - Controls the general ui and buttons on the page
$(function() {

    var button = {};
    var ui = {};
    var input = {};
    var display = {};

    var tpoints = null;
    var used = 0;
    var left = null;

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
        display.used.text((String) (used));


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
            var val = $(this).val();
            display.used.text((String) (used));
            if(isNaN(val))
            {
                $(this).val('');
                display.left.text((String) (0));
                ui.barmy.hide();
                tell('alert.error', 'Points must be a valid number.');
            }
            else if(val < 1)
            {
                ui.barmy.hide();
                display.left.text((String) (0));
                tell('alert.error', 'Points must be a positive number');
            }
            else if(val > 50000)
            {
                ui.barmy.hide();
                display.left.text((String) (0));
                tell('alert.error', 'Current points limit is 50,000. Please adjust your total amount.');
            }
            else
            {
                tpoints = val;
                display.left.text(parseInt(tpoints - used).formatMoney(0,'.',','));
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

    listen('toggle-hq', function() {

    });
});


/* Fantasy Functions */

// Beastmen functions
$(function() {

});

// Bretonnia functions
$(function() {

});

// Daemons of Chaos functions
$(function() {

});

// Dark Elves functions
$(function() {

});

// Dwarfs functions
$(function() {

});

// High Elves functions
$(function() {

});

// Lizardmen functions
$(function() {

});

// Ogre Kingdoms functions
$(function() {

});

// Orcs & Goblins functions
$(function() {

});

// Skaven functions
$(function() {

});

// The Empire functions
$(function() {

});

// Tomb Kings functions
$(function() {

});

// Vampire Counts functions
$(function() {

});

// Warriors of Chaos functions
$(function() {

});

// Wood Elves functions
$(function() {

});


/* 40k Functions */

// Adepta Sororitas functions
$(function() {

});

// Astra Militarum functions
$(function() {

    var button = {};

    listen('start', function() {

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

        // HQ
        button.hqyarrick.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });
        button.hqccs.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });
        button.hqck.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });
        button.hqstraken.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });
        button.hqnork.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });
        button.hqpask.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });
        button.hqlcomm.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });
        button.hqcomm.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });
        button.hqmpriest.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });
        button.hqppsyker.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });
        button.hqenginseer.bind('click', function(e) {
            e.preventDefault();
            tell('disable-buttons-militarum');


            tell('enable-buttons-militarum');
        });

        // Elites


        // Troops


        // Fast Attack


        // Heavy Support


    });

    listen('disable-buttons-militarum', function() {
        for(var key in button)
        {
            if (button.hasOwnProperty(key))
            {
                button[key].attr('disabled', 'disabled');
            }
        }
    });
    listen('enable-buttons-militarum', function() {
        for(var key in button)
        {
            if (button.hasOwnProperty(key))
            {
                button[key].removeAttr('disabled');
            }
        }
    });

});

// Blood Angels functions
$(function() {

});

// Chaos Daemons functions
$(function() {

});

// Chaos Space Marines functions
$(function() {

});

// Dark Angels functions
$(function() {

});

// Dark Eldar functions
$(function() {

});

// Eldar functions
$(function() {

});

// Grey Knights functions
$(function() {

});

// Inquisition functions
$(function() {

});

// Imperial Knights functions
$(function() {

});

// Officio Assassinorum functions
$(function() {

});

// Militarum Tempestus functions
$(function() {

});

// Necrons functions
$(function() {

});

// Orks functions
$(function() {

});

// Space Marines functions
$(function() {

});

// Space Wolves functions
$(function() {

});

// Tau Empire functions
$(function() {

});

// Tyranids functions
$(function() {

});

// Startup
$(function () {
    tell('bind');
    tell('alert.loading', 'Loading Army Builder...');
    tell('start');
    tell('alert.success', 'Army Builder loaded successfully!');
});