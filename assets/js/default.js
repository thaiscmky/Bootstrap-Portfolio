
$( document ).ready(function() {
  $('.navbar').css( "margin-top", "13%" );
});

$(window).on('scroll', function(event) {
    var scrollValue = $(window).scrollTop();
    if ( scrollValue > 100) {
         $('.navbar').css( "margin-top", "0" );
    } else $('.navbar').css( "margin-top", "13%" );
});