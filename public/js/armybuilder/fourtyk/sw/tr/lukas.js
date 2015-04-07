// Lukas the Trickster
$(function() {

    var button = {};

    listen('bind', function() {

        button.addUnit = $('#button-tr-lukas-add-unit');

        button.addUnit.bind('click', function() {
            tell('adjust-tr', 1);
            $('#tr-trickster').hide();
            // Add to the Troops Div
        });

    });


});