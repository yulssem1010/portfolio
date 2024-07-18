$(function () {
  //nav
  $('ul.gnb>li,.nav_bg').hover(function () {
    $('ul.sub,.nav_bg').stop().slideDown();
  }, function () {
    $('ul.sub,.nav_bg').stop().slideUp();
  });

  $('main ul.fix li:last-child').click(function(){
    $('html,body').animate({
      scrollTop : 0
    },500);
  });

  /* intro 타이핑효과 */
  const $text = document.querySelector(".typing .text");

  const letters = [
    "할 수 없었기 때문에 포기한 것이 아니라,\n\n포기했기 때문에 할 수 없었던 것이다.",
  ];

  const speed = 80;
  let i = 0;

  const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
  }

  const typing = async () => {
    const letter = changeLineBreak(letters[i].split(""));
    while (letter.length) {
      await wait(speed);
      $text.innerHTML += letter.shift();
    }
    await wait(2000); // 타이핑이 끝난 후 2초 대기
    $text.innerHTML = ""; // 타이핑이 끝난 후 텍스트 초기화
    setTimeout(typing, 500); // 0.5초 후에 다시 타이핑 시작
  }

  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }

  setTimeout(typing, 200); // 처음 0.2초 후에 타이핑 시작

  /* about */
  $('ul.about_section > li').click(function() {
    if ($(this).hasClass('active')) { 
      $(this).removeClass('active'); 
      $(this).find( 'ul.about_section_sub').slideUp('slow'); 
    } else {
      $('ul.about_section > li').removeClass('active' ); 
      $('ul.about_section > li ul.about_section_sub').slideUp('slow');
      $(this).addClass('active'); 
      $(this).find('ul.about_section_sub').slideDown('slow'); 
    } 
  });

  /* web_design */
  let swiper = new Swiper(".webSwiper", {
    slidesPerView: "auto",
    spaceBetween: 50,
  });

  $('#rel_site').on('change',function(){
    let thisTxt = $(this).val();
    $('.txt').text(thisTxt);
    location.href = 'http://' + thisTxt;
  });

  /* 코딩효과 */
  const text_html = [
    `<div class="content">`,
    `<figure class="kt_video">`,
    `<video autoplay muted loop>`,
    `<source src="img/ktwiz.mp4" type="video/mp4">`,
    `</video>`,
    `<div class="scroll">`,
    `<p>scroll</p>`,
    `<a href="#"><img src="img/scroll_down.png" alt="스크롤 내리기"></a>`,
    `</div>`,
    `</figure>`,
    `<section class="team_schedule">`,
    `<div class="container">`,
    `<h2>Team Schedule</h2>`,
    `<div class="game_slide_wrap swiper">`,
    `<ul class="game swiper-wrapper">`,
    `<li class="swiper-slide">`,
    `<dl class="team">`,
    `<dt>06. 06 목</dt>`,
    `<dd class="home_team"><img src="img/teamKt_logo.png" alt="케이티로고"><span>0</span></dd>`,
    `<dd class="away_team"><img src="img/teamHanhwa_logo.png" alt="한화로고"><span>6</span></dd>`,
    `</dl>`,
    `</li>`,
  ];

  let indexes = [0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0,0,0,0]; // 각 텍스트의 인덱스를 저장하는 배열
  let currentTextIndex = 0; // 현재 타이핑 중인 텍스트의 인덱스
  let speedc = 1; // 타이핑 속도

  function typeWriter() {
    if (currentTextIndex < text_html.length) {
        let txt = text_html[currentTextIndex];
        let len = txt.length;
        let index = indexes[currentTextIndex];

        if (index < len) {
            document.getElementById("text").innerHTML += txt.charAt(index);
            indexes[currentTextIndex]++;
            setTimeout(typeWriter, speedc);
        } else {
            document.getElementById("text").innerHTML += '<br>'; // 줄바꿈 추가
            currentTextIndex++;
            setTimeout(typeWriter, speedc);
        }
    }
  }

  typeWriter();

  const text_css = [
    `main figure.kt_video { width: 100%; height: calc(100vh - 90px); background: #000; position: relative;}`,
    `main figure.kt_video video{width: 100%; height: 100%; object-fit: cover;}`,
    `@keyframes scroll {`,
    `0% {`,
    `transform: translate(0,0);`,
    `transform: scale(.5);`,
    `}`,
    `50% {`,
    `transform: scale(1);`,    
    `}`,
    `100% {`,
    `}`
];

let indexes_css = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 각 텍스트의 인덱스를 저장하는 배열
let currentTextIndex_css = 0; // 현재 타이핑 중인 텍스트의 인덱스
let speedc_css = 1; // 타이핑 속도

function typeWriter_css() {
    if (currentTextIndex_css < text_css.length) {
        let txt = text_css[currentTextIndex_css];
        let len = txt.length;
        let index = indexes_css[currentTextIndex_css];

        if (index < len) {
            document.getElementById("text_css").innerHTML += txt.charAt(index);
            indexes_css[currentTextIndex_css]++;
            setTimeout(typeWriter_css, speedc_css);
        } else {
            document.getElementById("text_css").innerHTML += '<br>'; // 줄바꿈 추가
            currentTextIndex_css++;
            setTimeout(typeWriter_css, speedc_css);
        }
    }
}

// 2초(2000밀리초) 뒤에 타이핑 시작
setTimeout(typeWriter_css, 2000);

  const text_js = [
    `let swiper = new Swiper(".game_slide_wrap", {`,
    `slidesPerView: 3,`,
    `slidesPerGroup: 3,`,
    `spaceBetween:10,`,
    `navigation: {`,
    `nextEl: ".team_schedule .next",`,
    `prevEl: ".team_schedule .prev",`,
    `},`,
    `});`
  ];

  let indexes_js = [0, 0, 0,0, 0, 0,0, 0, 0]; // 각 텍스트의 인덱스를 저장하는 배열
  let currentTextIndex_js = 0; // 현재 타이핑 중인 텍스트의 인덱스
  let speedc_js = 1; // 타이핑 속도

  function typeWriter_js() {
    if (currentTextIndex_js < text_js.length) {
        let txt = text_js[currentTextIndex_js];
        let len = txt.length;
        let index = indexes_js[currentTextIndex_js];

        if (index < len) {
            document.getElementById("text_js").innerHTML += txt.charAt(index);
            indexes_js[currentTextIndex_js]++;
            setTimeout(typeWriter_js, speedc_js);
        } else {
            document.getElementById("text_js").innerHTML += '<br>'; // 줄바꿈 추가
            currentTextIndex_js++;
            setTimeout(typeWriter_js, speedc_js);
        }
    }
  }

 // 2초(2000밀리초) 뒤에 타이핑 시작
  setTimeout(typeWriter_js, 4000);

  /* clone coding */
  $('#clone_coding .container ul.sub_tit li').click(function () {
    let i = $(this).index();
    $('.clone_visual ul.slide li').removeClass('on').eq(i).addClass('on');
    $('#clone_coding .container ul.sub_tit li').removeClass('on');
    $(this).addClass('on');
  });

  /* 햄버거 메뉴 */
  const navToggle = document.querySelector("ul.nav_move li i");
  const menu = document.querySelector("#menu.menu");
  const overlay = document.querySelector(".overlay");
  const menuClose = document.querySelector("#menu.menu ul>li.close i");

  navToggle.addEventListener("click", function() {
    menu.classList.toggle("show");
    overlay.classList.toggle("show");
  });

  menuClose.addEventListener("click", function() {
    menu.classList.remove("show");
    overlay.classList.remove("show");
  });
});