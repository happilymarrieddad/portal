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

        button.add = $('#button-tr-blood-add-claw');
        button.minus = $('#button-tr-blood-minus-claw');

        display.pts = $('#display-points-tr-blood');
        display.num = $('#display-tr-blood-num');
        display.leader = $('.display-tr-blood-leader');

        display.leaderTermOptions = $('.display-tr-blood-leader-options-term');
        display.leaderPowOptions = $('.display-tr-blood-leader-options-pow');

        display.leaderLeft = $('#display-tr-leader-left');
        display.leaderRight = $('#display-tr-leader-right');

        display.unitOptionOne = $('#display-tr-unit-option1');
        display.unitOptionTwo = $('#display-tr-unit-option2');
        display.unitOptionThree = $('#display-tr-unit-option3');
        display.unitOptionFour = $('#display-tr-unit-option4');
        display.unitOptionOneDiv = $('#display-tr-unit-option1-div');
        display.unitOptionTwoDiv = $('#display-tr-unit-option2-div');
        display.unitOptionThreeDiv = $('#display-tr-unit-option3-div');
        display.unitOptionFourDiv = $('#display-tr-unit-option4-div');

        display.leaderMeltaBombs = $('#display-tr-leader-meltabombs');

        input.leader = $('#input-tr-blood-leader');
        input.leaderTerm = $('#input-tr-blood-leader-term');
        input.meltabombs = $('#input-tr-blood-leader-meltabombs');

        input.leaderTermArmOne = $('#input-tr-blood-leader-term-arm1');
        input.leaderTermArmTwo = $('#input-tr-blood-leader-term-arm2');
        input.leaderPowArmOne = $('#input-tr-blood-leader-pow-arm1');
        input.leaderPowArmTwo = $('#input-tr-blood-leader-pow-arm2');

        input.unitOne = $('#input-tr-blood-unit-option1');
        input.unitTwo = $('#input-tr-blood-unit-option2');
        input.unitThree = $('#input-tr-blood-unit-option3');
        input.unitFour = $('#input-tr-blood-unit-option4');

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
            }
            tell('update-tr-blood');
        });

        input.leaderTerm.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderPowOptions.hide();
                display.leaderTermOptions.show();
                display.leaderLeft.text($('#input-tr-blood-leader-term-arm1 option:selected').text());
                display.leaderRight.text($('#input-tr-blood-leader-term-arm2 option:selected').text());
            }
            else
            {
                display.leaderTermOptions.hide();
                display.leaderPowOptions.show();
                display.leaderLeft.text($('#input-tr-blood-leader-pow-arm1 option:selected').text());
                display.leaderRight.text($('#input-tr-blood-leader-pow-arm2 option:selected').text());
            }
            tell('update-tr-blood');
        });

        input.meltabombs.change(function() {
            display.leaderMeltaBombs.toggle();
            tell('update-tr-blood');
        });

        button.add.bind('click', function(e) {
            e.preventDefault();
            numTroops++;
            display.num.text(parseInt(display.num.text()) + 1);
            if(numTroops > (maxTroops-1))
            {
                $(this).hide();
                input.unitFour.show();
            }
            if(numTroops > minTroops) button.minus.show();
            tell('update-tr-blood');
        });
        button.minus.bind('click', function(e) {
            e.preventDefault();
            numTroops--;
            display.num.text(parseInt(display.num.text()) - 1);
            if(numTroops < (minTroops+1)) $(this).hide();
            if(numTroops < maxTroops)
            {
                button.add.show();
                input.unitFour.val(0);
                input.unitFour.hide();
            }
            tell('update-tr-blood');
        });


        input.leaderTermArmOne.change(function() {
            display.leaderLeft.text($('#input-tr-blood-leader-term-arm1 option:selected').text());
            tell('update-tr-blood');
        });
        input.leaderTermArmTwo.change(function() {
            display.leaderRight.text($('#input-tr-blood-leader-term-arm2 option:selected').text());
            tell('update-tr-blood');
        });
        input.leaderPowArmOne.change(function() {
            display.leaderLeft.text($('#input-tr-blood-leader-pow-arm1 option:selected').text());
            tell('update-tr-blood');
        });
        input.leaderPowArmTwo.change(function() {
            if($('#input-tr-blood-leader-pow-arm1 option:selected').text() == 'Two Wolf Claws')
            {
                display.leaderLeft.text('');
                input.leaderPowArmOne.hide();
            }
            else input.leaderPowArmOne.show();
            display.leaderLeft.text($('#input-tr-blood-leader-pow-arm1 option:selected').text());
            tell('update-tr-blood');
        });

        input.unitOne.change(function() {
            if($('#input-tr-blood-unit-option1 option:selected').text() != 'Bolt Pistol')
            {
                display.unitOptionOneDiv.show();
                display.unitOptionOne.text($('#input-tr-blood-unit-option1 option:selected').text());
            }
            else display.unitOptionOneDiv.hide();
            tell('update-tr-blood');
        });
        input.unitTwo.change(function() {
            if($('#input-tr-blood-unit-option2 option:selected').text() != 'Chainsword')
            {
                display.unitOptionTwoDiv.show();
                display.unitOptionTwo.text($('#input-tr-blood-unit-option2 option:selected').text());
            }
            else display.unitOptionTwoDiv.hide();
            tell('update-tr-blood');
        });
        input.unitThree.change(function() {
            if($('#input-tr-blood-unit-option3 option:selected').text() != 'Bolt Pistol and Chainsword')
            {
                display.unitOptionThreeDiv.show();
                display.unitOptionThree.text($('#input-tr-blood-unit-option3 option:selected').text());
            }
            else display.unitOptionThreeDiv.hide();
            tell('update-tr-blood');
        });
        input.unitFour.change(function() {
            if($('#input-tr-blood-unit-option4 option:selected').text() != 'Bolt Pistol and Chainsword')
            {
                display.unitOptionFourDiv.show();
                display.unitOptionFour.text($('#input-tr-blood-unit-option4 option:selected').text());
            }
            else display.unitOptionFourDiv.hide();
            tell('update-tr-blood');
        });

    }); // END BIND


    // Set all values to default
    listen('config-tr-blood', function() {
        tell('update-tr-blood');
    });

    listen('update-tr-blood', function() {
        var pts = parseInt(bloodPts) * parseInt(numTroops);
        if(input.leader.is(':checked')) pts += parseInt(input.leader.val());
        if(input.leaderTerm.is(':checked'))
        {
            pts += parseInt(input.leaderTerm.val());
            pts += parseInt($('#input-tr-blood-leader-term-arm1 option:selected').val());
            pts += parseInt($('#input-tr-blood-leader-term-arm2 option:selected').val());
        }
        else
        {
            pts += parseInt($('#input-tr-blood-leader-pow-arm1 option:selected').val());
            pts += parseInt($('#input-tr-blood-leader-pow-arm2 option:selected').val());
        }
        pts += parseInt($('#input-tr-blood-unit-option1 option:selected').val());
        pts += parseInt($('#input-tr-blood-unit-option2 option:selected').val());
        pts += parseInt($('#input-tr-blood-unit-option3 option:selected').val());
        pts += parseInt($('#input-tr-blood-unit-option4 option:selected').val());
        if(input.meltabombs.is(':checked')) pts += parseInt(input.meltabombs.val());

        display.pts.text(parseInt(pts));
    });



});