$(function() {
    $('#tipsy').on('submit', function(ev) {
        // Don't actually submit the form'
        ev.preventDefault();

        var bill = parseFloat( $('#bill').val() );
        var tip = parseFloat( $('#tip').val() );
        var people = parseInt( $('#people').val() );

        if(people > 1) {
            $('#tipEach').show();
            $('#totalSummary').show();
            $('#tipSummary').removeClass('col-xs-offset-3');
        } else {
            $('#tipEach').hide();
            $('#totalSummary').hide();
            $('#tipSummary').addClass('col-xs-offset-3');
        }

        var tipAmountEach = Math.round( bill * tip / people * 100 ) / 100;
        var totalBillEach = Math.round( bill * (1 + tip) / people * 100 ) / 100;
        $('#tipAmount').html(tipAmountEach.toFixed(2));
        $('#totalBill').html(totalBillEach.toFixed(2));
        $('.panel-footer').hide().removeClass('hidden').slideDown();
    });
});
