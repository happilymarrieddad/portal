function update()
{
    var mb = $('#select-mb option:selected').val().toString();
    var psu = $('#select-psu option:selected').val();
    var ram = $('#select-ram option:selected').val();
    var drive = $('#select-drive option:selected').val();
    var monitor = $('#select-monitor option:selected').val();
    var cpu = $('#select-cpu option:selected').val();
    var hdd = $('#select-hdd option:selected').val();

    var mb2 = mb.split('#');

    alert(mb2);

    $('#builder-price').text();
}