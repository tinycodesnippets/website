console.log('main.js');

// when save comment is clicked, add comment to db
$(document).on('click', '.subscribe', function(e) {
    e.preventDefault();
    console.log('subscribe!');
    var email = $('#email').val();
    console.log(email);
    // var dbId = $(this).data('dbid');
    // grab id from data attr, use ajax post method to send comment from text-input val to the article
    $.ajax({
        method: "POST",
        url: "/",
        data: {
            body: email
        }
        // then log it and empty the input box
    }).done(function(data) {
        console.log(data);
        if(data.code === 11000) {
            console.log('ERROR!');
            $('.error-success-msg').html('');
            $('.input-round.justify-content-center.justify-content-lg-end').append('<div class="error-success-msg">That email has already subscribed.</div>');
        } else {
            console.log('SAVED!');
            $('.error-success-msg').html('');
            $('.input-round.justify-content-center.justify-content-lg-end').append('<div class="error-success-msg">Thanks for subscribing!</div>');
        }
    });
});