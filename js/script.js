$(document).ready(function() {

}).on('click','.central-footer__subscribe', function () {
    let data = $('.central-footer__email').val();
    if (data) {
        $('.central-footer__email').css('border-bottom', '1px solid black');
        $('.central-footer__email').val('');
        alert('Thanks for submitting!');
    } else {
        $('.central-footer__email').css('border-bottom', '1px solid red');
    }
});

