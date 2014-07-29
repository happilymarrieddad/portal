function update()
{

    if($('#select-cpu option:selected').data('socket') != $('#select-mb option:selected').data('socket'))
    {
        $('#messages').text('The cpu and motherboard socket must match!');
    }
    else
    {

        $('#messages').text('');

        var mb = parseFloat($('#select-mb option:selected').val());
        $('#span-mb').text($('#select-mb option:selected').text());
        var psu = parseFloat($('#select-psu option:selected').val());
        $('#span-psu').text($('#select-psu option:selected').text());
        var ram = parseFloat($('#select-ram option:selected').val());
        $('#span-ram').text($('#select-ram option:selected').text());
        var drive = parseFloat($('#select-drive option:selected').val());
        $('#span-drive').text($('#select-drive option:selected').text());
        var monitor = parseFloat($('#select-monitor option:selected').val());
        $('#span-monitor').text($('#select-monitor option:selected').text());
        var cpu = parseFloat($('#select-cpu option:selected').val());
        $('#span-cpu').text($('#select-cpu option:selected').text());
        var hdd = parseFloat($('#select-hdd option:selected').val());
        $('#span-hdd').text($('#select-hdd option:selected').text());

        $('#builder-price').text((mb+psu+ram+drive+monitor+cpu+hdd)/100);
    }
}