// Grey Hunters
$(function() {

    var display = {};

    var input = {};

    var button = {};

    var greyPts = 14;

    var minTroops = 5;
    var maxTroops = 10;
    var numTroops = 5;

    var numCCWeapons = 0;

    var unitType = 'Grey Hunters';

    listen('bind', function() {

        display.main = $('#display-config-tr-grey');
        display.pts = $('#display-points-tr-grey');
        display.num = $('#display-num-tr-grey');

        display.optionOneDiv = $('#display-wargear-option1-tr-grey-div');
        display.optionOneH = $('#display-wargear-option1-tr-grey');
        display.optionTwoDiv = $('#display-wargear-option2-tr-grey-div');
        display.optionTwoH = $('#display-wargear-option2-tr-grey');
        display.optionThreeDiv = $('#display-wargear-option3-tr-grey-div');
        display.optionThreeH = $('#display-wargear-option3-tr-grey');
        display.optionFourDiv = $('#display-wargear-option4-tr-grey-div');
        display.optionFourH = $('#display-wargear-option4-tr-grey');

        display.ccDiv = $('#display-cc-num-tr-grey-div');
        display.cc = $('#display-cc-num-tr-grey');


        display.leader = $('.display-tr-grey-leader');

        display.leaderTermOptions = $('.display-tr-grey-leader-options-term');
        display.leaderPowOptions = $('.display-tr-grey-leader-options-pow');

        display.leaderLeft = $('#display-tr-leader-left-grey');
        display.leaderRight = $('#display-tr-leader-right-grey');
        display.leaderMeltaBombs = $('#display-tr-leader-meltabombs-grey');

        input.leader = $('#input-tr-grey-leader');
        input.leaderTerm = $('#input-tr-grey-leader-term');
        input.meltabombs = $('#input-tr-grey-leader-meltabombs');

        input.leaderTermArmOne = $('#input-tr-grey-leader-term-arm1');
        input.leaderTermArmTwo = $('#input-tr-grey-leader-term-arm2');
        input.leaderPowArmOne = $('#input-tr-grey-leader-pow-arm1');
        input.leaderPowArmTwo = $('#input-tr-grey-leader-pow-arm2');


        button.addUnit = $('#button-add-unit-tr-grey');

        button.add = $('#button-add-tr-grey');
        button.minus = $('#button-minus-tr-grey');
        button.addCC = $('#button-add-tr-ccweapon');
        button.minusCC = $('#button-minus-tr-ccweapon');


        input.optionOne = $('#input-option1-tr-grey');
        input.optionTwo = $('#input-option2-tr-grey');
        input.optionThree = $('#input-option3-tr-grey');
        input.optionFour = $('#input-option4-tr-grey');
        input.standard = $('#input-add-standard-tr-grey');


        input.transport = $('#input-tr-grey-transportation');

        display.rhino = $('#input-tr-grey-transportation-rhino');
        display.razorback = $('#input-tr-grey-transportation-razorback');
        display.droppod = $('#input-tr-grey-transportation-droppod');
        display.stormwolf = $('#input-tr-grey-transportation-stormwolf');

        input.RhinoTwo = $('#input-tr-grey-rhino-select2');
        input.RhinoThree = $('#input-tr-grey-rhino-select3');
        input.RhinoFour = $('#input-tr-grey-rhino-select4');
        input.RhinoFive = $('#input-tr-grey-rhino-select5');
        input.RazorbackOne = $('#input-tr-grey-razorback-select1');
        input.RazorbackTwo = $('#input-tr-grey-razorback-select2');
        input.RazorbackThree = $('#input-tr-grey-razorback-select3');
        input.RazorbackFour = $('#input-tr-grey-razorback-select4');
        input.RazorbackFive = $('#input-tr-grey-razorback-select5');
        input.RazorbackSix = $('#input-tr-grey-razorback-select6');
        input.DroppodWeaponsOne = $('#input-tr-grey-droppod-select1');
        input.DroppodWeaponsTwo = $('#input-tr-grey-droppod-select2');
        input.StormwolfWeapons = $('#input-tr-grey-stormwolf-select');




        button.add.bind('click', function(e) {
            e.preventDefault();
            numTroops++;
            button.addCC.show();
            if(input.leader.is(":checked")) display.num.text(numTroops - 1);
            else display.num.text(numTroops);
            if(numTroops > (maxTroops-1))
            {
                $(this).hide();
            }
            if(numTroops == 10)
            {
                input.optionFour.show();
            }
            if(numTroops > minTroops) button.minus.show();
            tell('update-tr-grey');
        });
        button.minus.bind('click', function(e) {
            e.preventDefault();
            numTroops--;
            if(input.leader.is(":checked")) display.num.text(numTroops - 1);
            else display.num.text(numTroops);
            if(numTroops < (minTroops+1)) $(this).hide();
            if(numTroops < maxTroops)
            {
                button.add.show();
                input.optionFour.val(0);
                display.optionFourDiv.hide();
                input.optionFour.hide();

            }

            if(numCCWeapons > 0)
            {
                var nt = numTroops;
                if(input.leader.is(":checked")) nt--;
                if(nt < numCCWeapons)
                {
                    numCCWeapons = nt;
                    display.cc.text(numCCWeapons);
                    button.addCC.hide();
                }

            }
            tell('update-tr-grey');
        });
        button.addCC.bind('click', function() {
            numCCWeapons++;
            display.cc.text(numCCWeapons);
            if(numCCWeapons == 1)
            {
                display.ccDiv.show();
                button.minusCC.show();
            }
            if(numCCWeapons == numTroops)
            {
                $(this).hide();
            }
            tell('update-tr-grey');
        });
        button.minusCC.bind('click', function() {
            numCCWeapons--;
            display.cc.text(numCCWeapons);
            if(numCCWeapons < 1) display.ccDiv.hide();
            if(numCCWeapons == 0) $(this).hide();
            if(numCCWeapons < numTroops) button.addCC.show();
            tell('update-tr-grey');
        });

        input.optionOne.change(function() {
            if($('#input-option1-tr-grey option:selected').text() != 'Boltgun/Bolt Pistol')
            {
                display.optionOneH.text($('#input-option1-tr-grey option:selected').text());
                display.optionOneDiv.show();
            }
            else display.optionOneDiv.hide();
            tell('update-tr-grey');
        });
        input.optionTwo.change(function() {
            if($('#input-option2-tr-grey option:selected').text() != 'Boltgun/Bolt Pistol')
            {
                display.optionTwoH.text($('#input-option2-tr-grey option:selected').text());
                display.optionTwoDiv.show();
            }
            else display.optionTwoDiv.hide();
            tell('update-tr-grey');
        });
        input.optionThree.change(function() {
            if($('#input-option3-tr-grey option:selected').text() != 'Boltgun/Melee Weapon')
            {
                display.optionThreeH.text($('#input-option3-tr-grey option:selected').text());
                display.optionThreeDiv.show();
            }
            else display.optionThreeDiv.hide();
            tell('update-tr-grey');
        });
        input.optionFour.change(function() {
            if($('#input-option4-tr-grey option:selected').text() != 'Boltgun/Melee Weapon')
            {
                display.optionFourH.text($('#input-option4-tr-grey option:selected').text());
                display.optionFourDiv.show();
            }
            else display.optionFourDiv.hide();
            tell('update-tr-grey');
        });
        input.standard.change(function() {
            tell('update-tr-grey');
        });
        input.transport.change(function() {
            var lbl = $('#input-tr-grey-transportation option:selected').text();
            display.rhino.hide();
            display.razorback.hide();
            display.droppod.hide();
            display.stormwolf.hide();

            input.RhinoTwo.removeAttr('checked');
            input.RhinoThree.removeAttr('checked');
            input.RhinoFour.removeAttr('checked');
            input.RhinoFive.removeAttr('checked');
            input.RazorbackOne.val(0);
            input.RazorbackTwo.removeAttr('checked');
            input.RazorbackThree.removeAttr('checked');
            input.RazorbackFour.removeAttr('checked');
            input.RazorbackFive.removeAttr('checked');
            input.RazorbackSix.removeAttr('checked');
            input.DroppodWeaponsOne.val(0);
            input.DroppodWeaponsTwo.removeAttr('checked');
            input.StormwolfWeapons.val(0);

            switch(lbl)
            {
                case 'Rhino':
                    display.rhino.show();
                    break;
                case 'Razorback':
                    display.razorback.show();
                    break;
                case 'Drop Pod':
                    display.droppod.show();
                    break;
                case 'Stormwolf':
                    display.stormwolf.show();
                    break;
            }
            tell('update-tr-grey');
        });

        input.StormwolfWeapons.change(function() {
            tell('update-tr-grey');
        });
        input.DroppodWeaponsOne.change(function() {
            tell('update-tr-grey');
        });
        input.DroppodWeaponsTwo.change(function() {
            tell('update-tr-grey');
        });
        input.RazorbackOne.change(function() {
            tell('update-tr-grey');
        });
        input.RazorbackTwo.change(function() {
            tell('update-tr-grey');
        });
        input.RazorbackThree.change(function() {
            tell('update-tr-grey');
        });
        input.RazorbackFour.change(function() {
            tell('update-tr-grey');
        });
        input.RazorbackFive.change(function() {
            tell('update-tr-grey');
        });
        input.RazorbackSix.change(function() {
            tell('update-tr-grey');
        });
        input.RhinoTwo.change(function() {
            tell('update-tr-grey');
        });
        input.RhinoThree.change(function() {
            tell('update-tr-grey');
        });
        input.RhinoFour.change(function() {
            tell('update-tr-grey');
        });
        input.RhinoFive.change(function() {
            tell('update-tr-grey');
        });

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
            tell('update-tr-grey');
        });

        input.leaderTerm.change(function() {
            if($(this).is(":checked"))
            {
                display.leaderPowOptions.hide();
                display.leaderTermOptions.show();
                display.leaderLeft.text($('#input-tr-grey-leader-term-arm1 option:selected').text());
                display.leaderRight.text($('#input-tr-grey-leader-term-arm2 option:selected').text());
                input.leaderPowArmOne.val('');
                input.leaderPowArmTwo.val('');
            }
            else
            {
                display.leaderTermOptions.hide();
                display.leaderPowOptions.show();
                display.leaderLeft.text($('#input-tr-grey-leader-pow-arm1 option:selected').text());
                display.leaderRight.text($('#input-tr-grey-leader-pow-arm2 option:selected').text());
                input.leaderTermArmOne.val('');
                input.leaderTermArmTwo.val('');
            }
            tell('update-tr-grey');
        });


        input.leaderTermArmOne.change(function() {
            display.leaderLeft.text($('#input-tr-grey-leader-term-arm1 option:selected').text());
            tell('update-tr-grey');
        });
        input.leaderTermArmTwo.change(function() {
            display.leaderRight.text($('#input-tr-grey-leader-term-arm2 option:selected').text());
            tell('update-tr-grey');
        });
        input.leaderPowArmOne.change(function() {
            display.leaderLeft.text($('#input-tr-grey-leader-pow-arm1 option:selected').text());
            tell('update-tr-grey');
        });
        input.leaderPowArmTwo.change(function() {
            if($('#input-tr-grey-leader-pow-arm2 option:selected').text() == 'Two Wolf Claws')
            {
                display.leaderLeft.text('');
                input.leaderPowArmOne.val('');
                input.leaderPowArmOne.hide();
            }
            else input.leaderPowArmOne.show();
            display.leaderRight.text($('#input-tr-grey-leader-pow-arm2 option:selected').text());
            tell('update-tr-grey');
        });

    });

    listen('update-tr-grey', function() {
        var pts = parseInt(greyPts) * parseInt(numTroops);

        pts += parseInt(display.cc.text() * 2);

        if(input.leader.is(':checked')) pts += parseInt(input.leader.val());
        if(input.leaderTerm.is(':checked'))
        {
            pts += parseInt(input.leaderTerm.val());
            pts += parseInt($('#input-tr-grey-leader-term-arm1 option:selected').val());
            pts += parseInt($('#input-tr-grey-leader-term-arm2 option:selected').val());
        }
        else
        {
            pts += parseInt($('#input-tr-grey-leader-pow-arm1 option:selected').val());
            pts += parseInt($('#input-tr-grey-leader-pow-arm2 option:selected').val());
        }
        if(input.standard.is(":checked")) pts += parseInt(input.standard.val());
        pts += parseInt($("#input-option1-tr-grey option:selected").val());
        pts += parseInt($("#input-option2-tr-grey option:selected").val());
        pts += parseInt($("#input-option3-tr-grey option:selected").val());
        pts += parseInt($("#input-option4-tr-grey option:selected").val());
        pts += parseInt($('#input-tr-grey-transportation option:selected').val());

        if(input.DroppodWeaponsTwo.is(":checked")) pts += parseInt(input.DroppodWeaponsTwo.val());
        if(input.RazorbackTwo.is(":checked")) pts += parseInt(input.RazorbackTwo.val());
        if(input.RazorbackThree.is(":checked")) pts += parseInt(input.RazorbackThree.val());
        if(input.RazorbackFour.is(":checked")) pts += parseInt(input.RazorbackFour.val());
        if(input.RazorbackFive.is(":checked")) pts += parseInt(input.RazorbackFive.val());
        if(input.RazorbackSix.is(":checked")) pts += parseInt(input.RazorbackSix.val());
        if(input.RhinoTwo.is(":checked")) pts += parseInt(input.RhinoTwo.val());
        if(input.RhinoThree.is(":checked")) pts += parseInt(input.RhinoThree.val());
        if(input.RhinoFour.is(":checked")) pts += parseInt(input.RhinoFour.val());
        if(input.RhinoFive.is(":checked")) pts += parseInt(input.RhinoFive.val());
        pts += parseInt($('#input-tr-grey-droppod-select1 option:selected').val());
        pts += parseInt($('#input-tr-grey-stormwolf-select option:selected').val());
        pts += parseInt($('#input-tr-grey-razorback-select1 option:selected').val());

        display.pts.text(parseInt(pts));
    });

});