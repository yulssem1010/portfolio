$(function () {

  /* 메인비주얼 */
  let swiper1 = new Swiper(".main_banner", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".main_banner .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main_banner .next",
      prevEl: ".main_banner .prev",
    },
    autoplay : {
      delay: 2500,
      disableOnInteraction: false,
    }
  });
  /* 랭귀지 체인지 */
  $('header ul.l_box li').first().click(function () {
    $(this).siblings().slideToggle().css('display', 'flex');
    $(this).find('i').toggleClass('fa-caret-down').toggleClass('fa-caret-up');
  });

  /* 햄버거메뉴 */
  $('header .ham_all ul').click(function () {
    $(this).removeClass('on').siblings('ul').addClass('on');
    $('.all_menu').fadeToggle();
  });

  $('main .video button').click(function(){
    $('.vid_modal').fadeIn();
  });

  $('.vid_modal i').click(function(){
    $('.vid_modal').fadeOut();
  });

  $('footer .family p').eq(0).click(function(){
    $('footer .family p.none').slideToggle();
  });

  $('aside.top').click(function(){
    $('body,html').animate({
      scrollTop : 0,
    })
  });

  /* 스크롤 이벤트 시작 */
  let evTop = $('.event').offset().top - 500; //이벤트가 스크롤 될 위치를 evTop에 저장
  let prTop = $('.products').offset().top - 500; //products가 스크롤 될 위치를 prTop에 저장
  let lineTop = $('.line_up').offset().top - 400;


  $(window).scroll(function () {
    let st = $(this).scrollTop(); //스크롤 탑 위치를 st에 저장
    //이벤트 컨텐츠 액션 시작
    if (st >= evTop) {
      $('main .event article').eq(0).addClass('on').siblings().addClass('on').css({
        'transition-delay': '0.3s',
      })
    } else {
      $('main .event article').removeClass('on');
    }
    //이벤트 컨텐츠 액션 끝

    //products 액션 시작
    if (st >= prTop) {
      for (let i = 0; i < $('.products').find('li').length; i++) {
        $('.products').find('li').eq(i).addClass('on').css({
          'animation-delay': (0.2 * i) + 's',
        })
      }
    } else {
      $('.products').find('li').removeClass('on');
    }
    //products 액션 끝
    //라인업 액션 시작
    for(let i = 0; i < $('main .line_up .container ul.move li').length; i++){
      if(st>=lineTop + (i*50)){
        $('main .line_up .container ul.move li').eq(i).addClass('on').css({
          'transition-delay' : (i*0.5) + 's',
        });
        $('main .line_up .container ul.move li').eq(i).find('.txt_box').css({
          'transition-delay' : (i) + 's',
        });
      }else {
        $('main .line_up .container ul.move li').removeClass('on');
      }
    }
    //라인업 액션 끝
  });
  /* 스크롤 이벤트 끝 */


});