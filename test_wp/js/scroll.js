/*
var header = $('.logo_conteiner'),
    isScroll = false;
$(window).on('scroll', function() {
  if($(this).scrollTop() > 1650 && isScroll === false) {
    isScroll = true;
    header.addClass('out');
  } else if($(this).scrollTop() <= 1650 && isScroll === true) {
    isScroll = false;
    header.removeClass('out');
  }

});
*/




$(window).scroll(function(){
  ($(window).scrollTop() > 650 && $(window).scrollTop() < 1200)?
  $('.logo_conteiner').addClass('out'):
  $('.logo_conteiner').removeClass('out');
});


