// when presubscribed email is entered to be subscribed, save to db here
$(document).on('click', '.subscribe', function(e) {
    e.preventDefault();
    var email = $('#email').val();
    $.ajax({
        method: "POST",
        url: "/",
        data: {
            body: email
        }
        // then log it and empty the input box
    }).done(function(data) {
        // console.log(data);
        if(data.code === 11000) {
            // console.log('ERROR!');
            $('.error-success-msg').html('');
            $('.input-round.justify-content-center.justify-content-lg-end').append('<div class="error-success-msg">That email has already subscribed.</div>');
        } else {
            // console.log('SAVED!');
            $('.error-success-msg').html('');
            $('.input-round.justify-content-center.justify-content-lg-end').append('<div class="error-success-msg">Thanks for subscribing!</div>');
        }
    });
});