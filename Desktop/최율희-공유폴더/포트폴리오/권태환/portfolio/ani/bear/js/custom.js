$(function () {
  $('ul.ment li').click(function () {
    let i = $(this).index();
    $('.comment article').removeClass('on').eq(i).fadeIn();
  });

  $('.btn').click(function(){
    $(this).parent('article').fadeOut();
  });

  $('.mainbear').click(function(){
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
      setTimeout(function() {
          window.location.href = 'sub1.html'; 
      }, 500);
    }
  });
});