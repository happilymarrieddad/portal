// Startup
$(function () {
    tell('bind');
    tell('alert.loading', 'Loading Army Builder...');
    tell('start');
    tell('alert.success', $('#army-title').text() + ' army builder loaded successfully!');
});