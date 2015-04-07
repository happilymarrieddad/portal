// Blood Claws functions
$(function() {

    var button = {};

    var display = {};

    var input = {};

    var bloodPts = 12;

    var minTroops = 5;
    var maxTroops = 15;
    var numTroops = 5;

    var unitType = 'Blood Claws';

    listen('bind', function() {

        button.add = $('#button-tr-blood-add-claw');
        button.minus = $('#button-tr-blood-minus-claw');

        button.addUnit = $('#button-tr-blood-add-unit');

        display.pts = $('#display-points-tr-blood');
        display.num = $('#display-tr-blood-num');
        display.leader = $('.display-tr-blood-leader');

        display.leaderTermOptions = $('.display-tr-blood-leader-options-term');
        display.leaderPowOptions = $('.display-tr-blood-leader-options-pow');

        display.leaderLeft = $('#display-tr-leader-left-blood');
        display.leaderRight = $('#display-tr-leader-right-blood');
        display.leaderMeltaBombs = $('#display-tr-leader-meltabombs-blood');

        input.leader = $('#input-tr-blood-leader');
        input.leaderTerm = $('#input-tr-blood-leader-term');
        input.meltabombs = $('#input-tr-blood-leader-meltabombs');

        input.leaderTermArmOne = $('#input-tr-blood-leader-term-arm1');
        input.leaderTermArmTwo = $('#input-tr-blood-leader-term-arm2');
        input.leaderPowArmOne = $('#input-tr-blood-leader-pow-arm1');
        input.leaderPowArmTwo = $('#input-tr-blood-leader-pow-arm2');

        display.unitOptionOne = $('#display-tr-unit-option1');
        display.unitOptionTwo = $('#display-tr-unit-option2');
        display.unitOptionThree = $('#display-tr-unit-option3');
        display.unitOptionFour = $('#display-tr-unit-option4');
        display.unitOptionOneDiv = $('#display-tr-unit-option1-div');
        display.unitOptionTwoDiv = $('#display-tr-unit-option2-div');
        display.unitOptionThreeDiv = $('#display-tr-unit-option3-div');
        display.unitOptionFourDiv = $('#display-tr-unit-option4-div');




        input.unitOne = $('#input-tr-blood-unit-option1');
        input.unitTwo = $('#input-tr-blood-unit-option2');
        input.unitThree = $('#input-tr-blood-unit-option3');
        input.unitFour = $('#input-tr-blood-unit-option4');

        input.transport = $('#input-tr-blood-transportation');

        display.rhino = $('#input-tr-blood-transportation-rhino');
        display.razorback = $('#input-tr-blood-transportation-razorback');
        display.droppod = $('#input-tr-blood-transportation-droppod');
        display.stormwolf = $('#input-tr-blood-transportation-stormwolf');

        input.RhinoTwo = $('#input-tr-blood-rhino-select2');
        input.RhinoThree = $('#input-tr-blood-rhino-select3');
        input.RhinoFour = $('#input-tr-blood-rhino-select4');
        input.RhinoFive = $('#input-tr-blood-rhino-select5');
        input.RazorbackOne = $('#input-tr-blood-razorback-select1');
        input.RazorbackTwo = $('#input-tr-blood-razorback-select2');
        input.RazorbackThree = $('#input-tr-blood-razorback-select3');
        input.RazorbackFour = $('#input-tr-blood-razorback-select4');
        input.RazorbackFive = $('#input-tr-blood-razorback-select5');
        input.RazorbackSix = $('#input-tr-blood-razorback-select6');
        input.DroppodWeaponsOne = $('#input-tr-blood-droppod-select1');
        input.DroppodWeaponsTwo = $('#input-tr-blood-droppod-select2');
        input.StormwolfWeapons = $('#input-tr-blood-stormwolf-select');

        display.unitName = $('#input-tr-blood-unitname');

        input.transport.change(function() {
            var lbl = $('#input-tr-blood-transportation option:selected').text();
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
            tell('update-tr-blood');
        });

        input.StormwolfWeapons.change(function() {
            tell('update-tr-blood');
        });
        input.DroppodWeaponsOne.change(function() {
            tell('update-tr-blood');
        });
        input.DroppodWeaponsTwo.change(function() {
            tell('update-tr-blood');
        });
        input.RazorbackOne.change(function() {
            tell('update-tr-blood');
        });
        input.RazorbackTwo.change(function() {
            tell('update-tr-blood');
        });
        input.RazorbackThree.change(function() {
            tell('update-tr-blood');
        });
        input.RazorbackFour.change(function() {
            tell('update-tr-blood');
        });
        input.RazorbackFive.change(function() {
            tell('update-tr-blood');
        });
        input.RazorbackSix.change(function() {
            tell('update-tr-blood');
        });
        input.RhinoTwo.change(function() {
            tell('update-tr-blood');
        });
        input.RhinoThree.change(function() {
            tell('update-tr-blood');
        });
        input.RhinoFour.change(function() {
            tell('update-tr-blood');
        });
        input.RhinoFive.change(function() {
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
                input.leaderPowArmOne.val('');
                input.leaderPowArmTwo.val('');
            }
            else
            {
                display.leaderTermOptions.hide();
                display.leaderPowOptions.show();
                display.leaderLeft.text($('#input-tr-blood-leader-pow-arm1 option:selected').text());
                display.leaderRight.text($('#input-tr-blood-leader-pow-arm2 option:selected').text());
                input.leaderTermArmOne.val('');
                input.leaderTermArmTwo.val('');
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
            if($('#input-tr-blood-leader-pow-arm2 option:selected').text() == 'Two Wolf Claws')
            {
                display.leaderLeft.text('');
                input.leaderPowArmOne.val('');
                input.leaderPowArmOne.hide();
            }
            else input.leaderPowArmOne.show();
            display.leaderRight.text($('#input-tr-blood-leader-pow-arm2 option:selected').text());
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



        button.addUnit.bind('click', function() {
            for(var key in input)
            {
                if(input.hasOwnProperty(key))
                {
                    input[key].val();
                }
            }
            tell('adjust-tr', 1);
            // Add to Troops Div

        });

    }); // END BIND


    // Set all values to default
    listen('config-tr-blood', function() {
        for(var key in input)
        {
            if(input.hasOwnProperty(key))
            {
                input[key].val(0);
            }
        }
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
        pts += parseInt($('#input-tr-blood-transportation option:selected').val());

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
        pts += parseInt($('#input-tr-blood-droppod-select1 option:selected').val());
        pts += parseInt($('#input-tr-blood-stormwolf-select option:selected').val());
        pts += parseInt($('#input-tr-blood-razorback-select1 option:selected').val());

        if(input.meltabombs.is(':checked')) pts += parseInt(input.meltabombs.val());

        display.pts.text(parseInt(pts));
    });



});