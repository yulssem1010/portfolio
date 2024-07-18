$(function(){
  $('.h_left button').click(function(){
    $('.h_left button').toggleClass('on');
    $('header .mobile_nav').toggle();
  });
});