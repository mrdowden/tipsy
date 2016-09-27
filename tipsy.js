$(function() {
    $('#tipsy').on('submit', function(ev) {
        // Don't actually submit the form'
        ev.preventDefault();

        var bill = parseFloat( $('#bill').val() );
        var tip = parseFloat( $('#tip').val() );
        var people = parseInt( $('#people').val() );

        var totalTip = Math.round( bill * tip * 100) / 100;
        var tipAmount = Math.round( bill * tip / people * 100 ) / 100;
        $('#tipAmount').html(tipAmount);
        $('.panel-footer').hide().removeClass('hidden').slideDown();
    });
});
