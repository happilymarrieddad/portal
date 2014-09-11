$(function() {

    listen('bind', function() {
        $('#password').change(function() {
            alert('password');
        });

        $('#password-confirm').change(function() {
            alert('password-confirm');
        });
    });

});