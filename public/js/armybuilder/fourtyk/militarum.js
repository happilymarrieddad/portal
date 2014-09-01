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