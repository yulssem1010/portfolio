$(function () {
    $('.gnb li a').hover(function () {
        var bar = $(this).position().left;
        var widNum = $(this).width();
        $('span.bar').css({ 'left': bar + 'px', 'width': widNum + 'px', 'opacity': 1 });
    }, function () {
        $('span.bar').css({ 'left': 0, 'width': 0, 'opacity': 0 });
    });
});

gsap.registerPlugin(ScrollTrigger);

$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: '.member ul ',
            start: 'top 90%',
            end: '20% 100%',
            scrub: 1,
            //markers: true,
        }
    })
        .to('.member li:nth-child(1)', { y: '-150px', duration: 1, ease: 'none' }, 0.2)
        .to('.member li:nth-child(2)', { y: '-150px', duration: 1, ease: 'none' }, 0.4)
        .to('.member li:nth-child(3)', { y: '-150px', duration: 1, ease: 'none' }, 0.6)
        .to('.member li:nth-child(4)', { y: '-150px', duration: 1, ease: 'none' }, 0.8)
        .to('.member li:nth-child(5)', { y: '-150px', duration: 1, ease: 'none' }, 1)


    const boxes = document.querySelectorAll('.gallery .box');
    boxes.forEach((box, index) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: box,
                start: 'top 70%',
                end: 'bottom 100%',
                scrub: 2,
                //markers: true,         
            }
        })
            .fromTo(box.querySelector('.a'), { y: '70%' }, { y: '0' }, 0.4)
            .fromTo(box.querySelector('.b'), { y: '400%' }, { y: '0' }, 1.4)
    });
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1500: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        368: {
            slidesPerView: 1,
            spaceBetween: 30
        }

    }
});

$(function(){
    $('.animate').scrolla({
        mobile:true, //모바일 버전시 활성화
        once:false, //스크롤시 딱 한번만 하고 싶을땐 true
    })
})

$(function(){
    $('.svgAni').find('path').each(function(i,path){
        var length = path.getTotalLength();
        //console.log(`path의 길이 : ${length}`)
    })
    $("a").click(function(event){
        event.preventDefault();
    });
})

$(function(){
    $('.menuOpen button.open').on('click',function(){
        $('.menuOpen .menuWrap').addClass('on');
    })
    $('.menuOpen .menuWrap .close').on('click',function(){
        $('.menuOpen .menuWrap').removeClass('on');
    })
})