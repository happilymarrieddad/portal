// Melee Weapons
var powerWeapon = 15;
var powerFist = 25;
var meltaBombs = 5;

// Ranged Weapons
var plasmaPistol = 15;




// Unit - Configs
$(function() {

    var display = {};

    var add = {};

    listen('bind', function() {

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
        display.trickster = $('#display-config-tr-trickster');
        display.hunters = $('#display-config-tr-hunters');

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
            tell('config-tr-trickster');
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


// Blood Claws functions
$(function() {

    var ui = {};

    var button = {};

    var display = {};
    var ldisplay = {};

    var input = {};

    var bloodPts = 12;

    var minTroops = 5;
    var maxTroops = 15;
    var numTroops = 5;



    listen('bind', function() {

        display.pts = $('#display-points-tr-blood');
        display.num = $('#display-tr-blood-num');
        display.leader = $('.display-tr-blood-leader');

        ldisplay.leaderPower = $('#display-tr-leader-pow');
        ldisplay.leaderTerm = $('#display-tr-leader-term');
        ldisplay.leaderTermOptions = $('#display-tr-blood-leader-options-term');
        display.leaderTermLeft = $('.input-tr-blood-leader-left');
        display.leaderTermRight = $('.input-tr-blood-leader-right');
        display.leaderLeft = $('.input-tr-blood-leader-left-pow');
        display.leaderRight = $('.input-tr-blood-leader-right-pow');
        display.leaderPowOptions = $('#display-tr-blood-leader-options-pow');



        ldisplay.leaderLBoltPistol = $('#display-tr-blood-leader-lboltpistol');
        ldisplay.leaderRChainSword = $('#display-tr-blood-leader-rchainsword');

        ldisplay.leaderLStormBolter = $('#display-tr-blood-leader-lstormbolter');
        ldisplay.leaderLCombiFlamer = $('#display-tr-blood-leader-lcombiflamer');
        ldisplay.leaderLCombiPlasma = $('#display-tr-blood-leader-lcombiplasma');
        ldisplay.leaderLCombiMelta = $('#display-tr-blood-leader-lcombimelta');
        ldisplay.leaderLWolfClaw = $('#display-tr-blood-leader-lwolfclaw');
        ldisplay.leaderLThunderHammer = $('#display-tr-blood-leader-lthunderhammer');

        ldisplay.leaderRPowerWeapon = $('#display-tr-blood-leader-rpowerweapon');
        ldisplay.leaderRStormShield = $('#display-tr-blood-leader-rstormshield');
        ldisplay.leaderRFrostAxe = $('#display-tr-blood-leader-rfrostaxe');
        ldisplay.leaderRFrostSword = $('#display-tr-blood-leader-rfrostsword');
        ldisplay.leaderRWolfClaw = $('#display-tr-blood-leader-rwolfclaw');
        ldisplay.leaderRPowerFist = $('#display-tr-blood-leader-rpowerfist');
        ldisplay.leaderRChainFist = $('#display-tr-blood-leader-rchainfist');
        ldisplay.leaderRThunderHammer = $('#display-tr-blood-leader-rthunderhammer');

        input.leader = $('#input-tr-blood-leader');
        input.leaderTerm = $('#input-tr-blood-leader-term');
        input.lmeltabombs = $('#input-tr-blood-leader-meltabombs');

        input.leaderLStormBolter = $('#input-tr-blood-leader-lstormbolter');
        input.leaderLCombiFlamer = $('#input-tr-blood-leader-lcombiflamer');
        input.leaderLCombiPlasma = $('#input-tr-blood-leader-lcombiplasma');
        input.leaderLCombiMelta = $('#input-tr-blood-leader-lcombimelta');
        input.leaderLWolfClaw = $('#input-tr-blood-leader-lwolfclaw');
        input.leaderLThunderHammer = $('#input-tr-blood-leader-lthunderhammer');
        input.leaderRPowerWeapon = $('#input-tr-blood-leader-rpowerweapon');
        input.leaderRStormShield = $('#input-tr-blood-leader-rstormshield');
        input.leaderRFrostAxe = $('#input-tr-blood-leader-rfrostaxe');
        input.leaderRFrostSword = $('#input-tr-blood-leader-rfrostsword');
        input.leaderRWolfClaw = $('#input-tr-blood-leader-rwolfclaw');
        input.leaderRPowerFist = $('#input-tr-blood-leader-rpowerfist');
        input.leaderRChainFist = $('#input-tr-blood-leader-rchainfist');
        input.leaderRThunderHammer = $('#input-tr-blood-leader-rthunderhammer');

        display.leaderPowLBoltPistol = $("#input-tr-blood-leader-lboltpistol-pow");
        display.leaderPowLChainSword = $("#input-tr-blood-leader-lchainsword-pow");
        display.leaderPowLStormBolder = $("input-tr-blood-leader-lstormbolter-pow");
        display.leaderPowLCombiFlamer = $("input-tr-blood-leader-lcombiflamer-pow");
        display.leaderPowLCombiPlasma = $("input-tr-blood-leader-lcombiplasma-pow");
        display.leaderPowLCombiMelta = $("input-tr-blood-leader-lcombimelta-pow");
        display.leaderPowLThunderHammer = $("input-tr-blood-leader-lthunderhammer-pow");
        display.leaderPowLStormShield = $("input-tr-blood-leader-lstormshield-pow");
        display.leaderPowLPowerWeapon = $("input-tr-blood-leader-lpowerweapon-pow");
        display.leaderPowLFrostWeapon = $("input-tr-blood-leader-lfrostweapon-pow");
        display.leaderPowLFrostAxe = $("input-tr-blood-leader-lfrostaxe-pow");
        display.leaderPowLWolfClaw = $("input-tr-blood-leader-lwolfclaw-pow");
        display.leaderPowLPowerFist = $("input-tr-blood-leader-lpowerfist-pow");
        display.leaderPowRChainSword = $("input-tr-blood-leader-rchainsword-pow");
        display.leaderPowRBoltPistol = $("input-tr-blood-leader-rboltpistol-pow");
        display.leaderPowRThunderHammer = $("input-tr-blood-leader-rthunderhammer-pow");
        display.leaderPowRPowerWeapon = $("input-tr-blood-leader-rpowerweapon-pow");
        display.leaderPowRFrostWeapon = $("input-tr-blood-leader-rfrostweapon-pow");
        display.leaderPowRFrostAxe = $("input-tr-blood-leader-rfrostaxe-pow");
        display.leaderPowRWolfClaw = $("input-tr-blood-leader-rwolfclaw-pow");
        display.leaderPowRPowerFist = $("input-tr-blood-leader-rpowerfist-pow");

        input.leaderPowLBoltPistol = $("#input-tr-blood-leader-pow-lboltpistol");
        input.leaderPowLChainSword = $("#input-tr-blood-leader-pow-lchainsword");
        input.leaderPowLStormBolter = $("input-tr-blood-leader-pow-lstormbolder");
        input.leaderPowLCombiFlamer = $("input-tr-blood-leader-pow-lcombiflamer");
        input.leaderPowLCombiPlasma = $("input-tr-blood-leader-pow-lcombiplasma");
        input.leaderPowLCombiMelta = $("input-tr-blood-leader-pow-lcombimelta");
        input.leaderPowLThunderHammer = $("input-tr-blood-leader-pow-lthunderhammer");
        input.leaderPowLStormShield = $("input-tr-blood-leader-pow-lstormshield");
        input.leaderPowLPowerWeapon = $("input-tr-blood-leader-pow-lpowerweapon");
        input.leaderPowLFrostWeapon = $("input-tr-blood-leader-pow-lfrostsword");
        input.leaderPowLFrostAxe = $("input-tr-blood-leader-pow-lfrostaxe");
        input.leaderPowLWolfClaw = $("input-tr-blood-leader-pow-lwolfclaw");
        input.leaderPowLPowerFist = $("input-tr-blood-leader-pow-lpowerfist");
        input.leaderPowRChainSword = $("input-tr-blood-leader-pow-rchainsword");
        input.leaderPowRBoltPistol = $("input-tr-blood-leader-pow-rboltpistol");
        input.leaderPowRThunderHammer = $("input-tr-blood-leader-pow-rthunderhammer");
        input.leaderPowRPowerWeapon = $("input-tr-blood-leader-pow-rpowerweapon");
        input.leaderPowRFrostWeapon = $("input-tr-blood-leader-pow-rfrostsword");
        input.leaderPowRFrostAxe = $("input-tr-blood-leader-pow-rfrostaxe");
        input.leaderPowRWolfClaw = $("input-tr-blood-leader-pow-rwolfclaw");
        input.leaderPowRPowerFist = $("input-tr-blood-leader-pow-rpowerfist");


        input.leader.change(function() {
            if($(this).is(":checked"))
            {
                display.leader.show();
                display.num.text(parseInt(display.num.text()) - 1);
            }
            else
            {
                display.leader.hide();
                display.num.text(parseInt(display.num.text()) + 1);

                input.leaderTerm.removeAttr('checked');
                input.leaderLStormBolter.attr('checked', 'checked');
                input.leaderLCombiFlamer.removeAttr('checked');
                input.leaderLCombiPlasma.removeAttr('checked');
                input.leaderLCombiMelta.removeAttr('checked');
                input.leaderLWolfClaw.removeAttr('checked');
                input.leaderLThunderHammer.removeAttr('checked');
                input.leaderRPowerWeapon.attr('checked', 'checked');
                input.leaderRStormShield.removeAttr('checked');
                input.leaderRFrostAxe.removeAttr('checked');
                input.leaderRFrostSword.removeAttr('checked');
                input.leaderRWolfClaw.removeAttr('checked');
                input.leaderRPowerFist.removeAttr('checked');
                input.leaderRChainFist.removeAttr('checked');
                input.leaderRThunderHammer.removeAttr('checked');
                input.lmeltabombs.removeAttr('checked');

                input.leaderPowLBoltPistol.attr('checked', 'checked');
                input.leaderPowLChainSword.removeAttr('checked');
                input.leaderPowLStormBolter.removeAttr('checked');
                input.leaderPowLCombiFlamer.removeAttr('checked');
                input.leaderPowLCombiPlasma.removeAttr('checked');
                input.leaderPowLCombiMelta.removeAttr('checked');
                input.leaderPowLThunderHammer.removeAttr('checked');
                input.leaderPowLStormShield.removeAttr('checked');
                input.leaderPowLPowerWeapon.removeAttr('checked');
                input.leaderPowLFrostWeapon.removeAttr('checked');
                input.leaderPowLFrostAxe.removeAttr('checked');
                input.leaderPowLWolfClaw.removeAttr('checked');
                input.leaderPowLPowerFist.removeAttr('checked');
                input.leaderPowRChainSword.attr('checked', 'checked');
                input.leaderPowRBoltPistol.removeAttr('checked');
                input.leaderPowRThunderHammer.removeAttr('checked');
                input.leaderPowRPowerWeapon.removeAttr('checked');
                input.leaderPowRFrostWeapon.removeAttr('checked');
                input.leaderPowRFrostAxe.removeAttr('checked');
                input.leaderPowRWolfClaw.removeAttr('checked');
                input.leaderPowRPowerFist.removeAttr('checked');
            }
            tell('update-tr-blood');
        });

        input.leaderTerm.change(function() {
            // ALTER EQUIPMENT
            for (var key in ldisplay)
            {
                if(ldisplay.hasOwnProperty(key))
                {
                    ldisplay[key].hide();
                }
            }

            if($(this).is(":checked"))
            {
                ldisplay.leaderTerm.show();
                ldisplay.leaderTermOptions.show();
                ldisplay.leaderRPowerWeapon.show();
                ldisplay.leaderLStormBolter.show();
                display.leaderPowOptions.hide();
                input.leaderPowLBoltPistol.attr('checked', 'checked');
                input.leaderPowLChainSword.removeAttr('checked');
                input.leaderPowLStormBolter.removeAttr('checked');
                input.leaderPowLCombiFlamer.removeAttr('checked');
                input.leaderPowLCombiPlasma.removeAttr('checked');
                input.leaderPowLCombiMelta.removeAttr('checked');
                input.leaderPowLThunderHammer.removeAttr('checked');
                input.leaderPowLStormShield.removeAttr('checked');
                input.leaderPowLPowerWeapon.removeAttr('checked');
                input.leaderPowLFrostWeapon.removeAttr('checked');
                input.leaderPowLFrostAxe.removeAttr('checked');
                input.leaderPowLWolfClaw.removeAttr('checked');
                input.leaderPowLPowerFist.removeAttr('checked');
                input.leaderPowRChainSword.attr('checked', 'checked');
                input.leaderPowRBoltPistol.removeAttr('checked');
                input.leaderPowRThunderHammer.removeAttr('checked');
                input.leaderPowRPowerWeapon.removeAttr('checked');
                input.leaderPowRFrostWeapon.removeAttr('checked');
                input.leaderPowRFrostAxe.removeAttr('checked');
                input.leaderPowRWolfClaw.removeAttr('checked');
                input.leaderPowRPowerFist.removeAttr('checked');
            }
            else
            {
                ldisplay.leaderPower.show();
                ldisplay.leaderRChainSword.show();
                ldisplay.leaderLBoltPistol.show();
                display.leaderPowOptions.show();
                input.leaderLStormBolter.attr('checked', 'checked');
                input.leaderLCombiFlamer.removeAttr('checked');
                input.leaderLCombiPlasma.removeAttr('checked');
                input.leaderLCombiMelta.removeAttr('checked');
                input.leaderLWolfClaw.removeAttr('checked');
                input.leaderLThunderHammer.removeAttr('checked');
                input.leaderRPowerWeapon.attr('checked', 'checked');
                input.leaderRStormShield.removeAttr('checked');
                input.leaderRFrostAxe.removeAttr('checked');
                input.leaderRFrostSword.removeAttr('checked');
                input.leaderRWolfClaw.removeAttr('checked');
                input.leaderRPowerFist.removeAttr('checked');
                input.leaderRChainFist.removeAttr('checked');
                input.leaderRThunderHammer.removeAttr('checked');
            }
            tell('update-tr-blood');
        });

        input.lmeltabombs.change(function() {
            tell('update-tr-blood');
        });

        input.leaderLStormBolter.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermLeft.hide();
                $('#input-tr-blood-leader-lstormbolder-div').show();
            }
            else
            {
                display.leaderTermLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderLCombiFlamer.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermLeft.hide();
                $('#input-tr-blood-leader-lcombiflamer-div').show();
            }
            else
            {
                display.leaderTermLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderLCombiPlasma.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermLeft.hide();
                $('#input-tr-blood-leader-lcombiplasma-div').show();
            }
            else
            {
                display.leaderTermLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderLCombiMelta.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermLeft.hide();
                $('#input-tr-blood-leader-lcombimelta-div').show();
            }
            else
            {
                display.leaderTermLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderLWolfClaw.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermLeft.hide();
                $('#input-tr-blood-leader-lwolfclaw-div').show();
            }
            else
            {
                display.leaderTermLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderLThunderHammer.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermLeft.hide();
                $('#input-tr-blood-leader-lthunderhammer-div').show();
            }
            else
            {
                display.leaderTermLeft.show();
            }
            tell('update-tr-blood');
        });

        input.leaderRPowerWeapon.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermRight.hide();
                $('#input-tr-blood-leader-rpowerweapon-div').show();
            }
            else
            {
                display.leaderTermRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderRStormShield.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermRight.hide();
                $('#input-tr-blood-leader-rstormshield-div').show();
            }
            else
            {
                display.leaderTermRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderRFrostAxe.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermRight.hide();
                $('#input-tr-blood-leader-rfrostaxe-div').show();
            }
            else
            {
                display.leaderTermRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderRFrostSword.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermRight.hide();
                $('#input-tr-blood-leader-rfrostsword-div').show();
            }
            else
            {
                display.leaderTermRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderRWolfClaw.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermRight.hide();
                $('#input-tr-blood-leader-rwolfclaw-div').show();
            }
            else
            {
                display.leaderTermRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderRPowerFist.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermRight.hide();
                $('#input-tr-blood-leader-rpowerfist-div').show();
            }
            else
            {
                display.leaderTermRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderRChainFist.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermRight.hide();
                $('#input-tr-blood-leader-rchainfist-div').show();
            }
            else
            {
                display.leaderTermRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderRThunderHammer.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderTermRight.hide();
                $('#input-tr-blood-leader-rthunderhammer-div').show();
            }
            else
            {
                display.leaderTermRight.show();
            }
            tell('update-tr-blood');
        });


        // POWER ARMOUR

        input.leaderPowLBoltPistol.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLBoltPistol.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLChainSword.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLChainSword.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLStormBolter.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLStormBolter.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLCombiFlamer.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLCombiFlamer.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLCombiPlasma.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLCombiFlamer.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLCombiMelta.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLCombiMelta.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLThunderHammer.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLThunderHammer.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLStormShield.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLStormShield.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLPowerWeapon.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLPowerWeapon.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLFrostWeapon.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLFrostWeapon.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLFrostAxe.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLFrostAxe.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLWolfClaw.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLWolfClaw.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowLPowerFist.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderLeft.hide();
                display.leaderPowLPowerFist.show();
            }
            else
            {
                display.leaderLeft.show();
            }
            tell('update-tr-blood');
        });

        input.leaderPowRChainSword.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderRight.hide();
                display.leaderPowRChainSword.show();
            }
            else
            {
                display.leaderRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowRBoltPistol.change(function() {
            alert('pressed');
            if($(this).is(":checked"))
            {
                display.leaderRight.hide();
                display.leaderPowRBoltPistol.show();
            }
            else
            {
                display.leaderRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowRThunderHammer.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderRight.hide();
                display.leaderPowRThunderHammer.show();
            }
            else
            {
                display.leaderRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowRPowerWeapon.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderRight.hide();
                display.leaderPowRPowerWeapon.show();
            }
            else
            {
                display.leaderRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowRFrostWeapon.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderRight.hide();
                display.leaderPowRFrostWeapon.show();
            }
            else
            {
                display.leaderRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowRFrostAxe.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderRight.hide();
                display.leaderPowRFrostAxe.show();
            }
            else
            {
                display.leaderRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowRWolfClaw.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderRight.hide();
                display.leaderPowRWolfClaw.show();
                input.leaderPowLWolfClaw.show();
            }
            else
            {
                input.leaderPowLWolfClaw.hide();
                display.leaderRight.show();
            }
            tell('update-tr-blood');
        });
        input.leaderPowRPowerFist.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderRight.hide();
                display.leaderPowRPowerFist.show();
            }
            else
            {
                display.leaderRight.show();
            }
            tell('update-tr-blood');
        });



    }); // END BIND


    // Set all values to default
    listen('config-tr-blood', function() {


        tell('update-tr-blood');
    });

    listen('update-tr-blood', function() {
        var pts = bloodPts * numTroops;
        for(var key in input)
        {
            if(input.hasOwnProperty(key))
            {
                if(input[key].is(":checked"))
                {
                    pts += parseInt(input[key].val());
                }
            }
        }

        display.pts.text(pts);
    });



});