$(document).ready(function () {
    $('.dropdown-menu').mouseleave(function () {
        $(".myFakeClass").dropdown('toggle');
    });
});

// Global Variables
var troopid = 49;
var points = {};
var tpoints = null;
var used = 0;
var left = 0;

