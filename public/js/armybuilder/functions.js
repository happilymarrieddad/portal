Number.prototype.formatNum = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

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
    var total = $('#input-total');

    listen('bind', function() {

        button.error = $('#alert-error');
        button.loading = $('#alert-loading');
        button.success = $('#alert-success');

        button.error.bind('click', function() {
            $(this).hide();
            total.focus();
        });
        button.loading.bind('click', function() {
            $(this).hide();
            total.focus();
        });
        button.success.bind('click', function() {
            $(this).hide();
            total.focus();
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

// Page System
$(function() {

    var ui = {};

    var input = {};

    listen('start', function() {

        ui.top = $('#display-top');
        ui.middle = $('#display-middle');
        ui.bottom = $('#display-bottom');

        input.total = $('#input-total');
        input.used = $('#input-used');
        input.left = $('#input-left');

        input.total.keyup(function() {
            var total = $(this).val();
            var left = parseInt(input.left.val());
            var used = parseInt(input.used.val());
            ui.middle.hide();
            ui.bottom.hide();
            if(isNaN(total))
            {
                tell('alert.error', 'Your total points must be a positive number');
                input.left.val(0);
                ui.top.css({'box-shadow':'0px 0px 10px yellow'});
                $(this).val('');
                $(this).focus();
            }
            else
            {
                tell('alert.loading', 'Adjusting points...');

                left = total - used;
                if(left > 0)
                {
                    input.left.val(left);
                    ui.middle.show();
                    ui.bottom.show();
                    tell('alert.success', 'Point adjustment complete!!!');
                }
                else
                {
                    tell('alert.error', 'You must enter a value larger than the points used');
                    input.left.val(0);
                    ui.top.css({'box-shadow':'0px 0px 10px yellow'});
                    $(this).val('');
                    $(this).focus();
                }

            }

        });

        ui.top.mouseenter(function() {
            $(this).css({'box-shadow':'0px 0px 10px yellow'});
            ui.middle.css({'box-shadow':'0px 0px 0px white'});
            ui.bottom.css({'box-shadow':'0px 0px 0px white'});
        });

        ui.middle.mouseenter(function() {
            $(this).css({'box-shadow':'0px 0px 10px yellow'});
            ui.top.css({'box-shadow':'0px 0px 0px white'});
            ui.bottom.css({'box-shadow':'0px 0px 0px white'});
        });

        ui.bottom.mouseenter(function() {
            $(this).css({'box-shadow':'0px 0px 10px yellow'});
            ui.middle.css({'box-shadow':'0px 0px 0px white'});
            ui.top.css({'box-shadow':'0px 0px 0px white'});
        });

        input.total.focus();

    });

});