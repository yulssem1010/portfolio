$(function () {
  $('ul.ment li').click(function () {
    let i = $(this).index();
    $('.comment article').removeClass('on').eq(i).fadeIn();
  });

  $('.btn').click(function(){
    $(this).parent('article').fadeOut();
  });

  $('ul.apps li').click(function () {
    let i = $(this).index();
    $('.app_comment article').removeClass('on').eq(i).fadeIn();
  });

  $('.app_comment .app_message_comment .go_btn').click(function(){
    window.location.href = 'move.html';
  });
});