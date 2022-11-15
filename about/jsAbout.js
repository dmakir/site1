$(document).ready(function() {
    $('.content').click(function(event) {
        $('.text').removeClass('active');
        let num = $(this).attr('data-num');
        $('#block' + num).addClass('active');
    })


});