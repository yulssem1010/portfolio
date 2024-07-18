$(function(){
  //nav
  $('ul.gnb>li,.nav_bg').hover(function(){
    $('ul.sub,.nav_bg').stop().slideDown();
  },function(){
    $('ul.sub,.nav_bg').stop().slideUp();
  });

  //highlight
  let slideI = 0;
  $('main section.ranking_highlight ul.container li.highlight ul.bg_h li').eq(slideI).siblings().hide();
  setInterval(function(){
    if(slideI<2){
      slideI++;
    }else {
      slideI = 0;
    }
    $('main section.ranking_highlight ul.container li.highlight ul.bg_h li').eq(slideI).fadeIn().siblings().fadeOut();
  },5000);

  //team_schedule
  let swiper = new Swiper(".game_slide_wrap", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween:10,
    navigation: {
      nextEl: ".team_schedule .next",
      prevEl: ".team_schedule .prev",
    },
  });

  //player
  /* let swiper2 = new Swiper(".player_card_slide", {
    slidesPerView: 3,
    slidesPerGroup: 2,
    spaceBetween:10,
    navigation: {
      nextEl: ".player_ltgt .next",
      prevEl: ".player_ltgt .prev",
    },
  });
 */
  var swiper2 = new Swiper(".player_card_slide", {
    slidesPerView: 3,
    slidesPerGroup: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".player_ltgt .next",
      prevEl: ".player_ltgt .prev",
    },
  });

  //store
  let slide2 = 0;
  $('main section.news_store ul.container li.store ul.banner li').eq(slide2).siblings().hide();
  setInterval(function(){
    if(slide2<1){
      slide2++;
    }else {
      slide2 = 0;
    }
    $('main section.news_store ul.container li.store ul.banner li').eq(slide2).fadeIn().siblings().fadeOut();
  },5000);

  /* footer */
  $('footer .family p').eq(0).click(function(){
    $('footer .family p.none').slideToggle();
  });

});