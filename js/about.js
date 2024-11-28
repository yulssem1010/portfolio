$(document).on('click', 'a[href="#"]', function (e) { e.preventDefault(); })

$(function () {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function () {
        var nowScrollTop = $(window).scrollTop();

        if (nowScrollTop > prevScrollTop) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
})

$(function () {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'main',
            start: '30% 60%',
            end: '100% 100%',
            scrub: true,
            //markers:true,
        }
    })
    tl.to('.imgTwo', {
        rotateX: '0deg'
    })
        .to('.imgThree', {
            rotateX: '0deg'
        })
        .to('.resume', {
            marginTop: '50vh',
            scale: '0.8'
        }, 'sa')
        .to('.img', {
            filter: 'grayscale(1)'
        }, 'sa')
        .to('.textAA', {
            marginTop: '-120vh'
        }, 'sa')
        .to('.overlay', {
            opacity: 1,
        }, 'sa')

    gsap.timeline({
        scrollTrigger: {
            trigger: '.con1',
            start: '0% 0%',
            end: '0% 0%',
            scrub: 1,
            //markers:true
        }
    })
        .to('.overlay', {
            opacity: 0
        });
})

$(function () {
    //circle
    gsap.timeline({
        scrollTrigger: {
            trigger: '.blackcircle',
            start: '0% 50%',
            end: '30% 0%',
            scrub: 1,
            //markers:true,
        }
    })
        .fromTo('.circle', {
            'width': '0',
            'height': '0',
            'duration': '10',
            'ease': 'elastic',
            'top': '3%'
        }, {
            'width': '2500px',
            'height': '2500px',
            'duration': '10',
            'top': '30%'
        }, 0)

    //textBox
    gsap.timeline({
        scrollTrigger: ({
            trigger: '.blackcircle>.textBox',
            start: '0% 80%',
            end: '100% 80%',
            scrub: 1,
            //markers:true,
        })
    })
        .fromTo('.blackcircle>.textBox', {
            'top': '60%',
            'duration': '5',
            'ease': 'elastic',
            'opacity': '0'
        }, {
            'duration': '5',
            'ease': 'none',
            'opacity': 1,
            'top': '50%'
        })
        .to('.wrap', {
            'background': '#fff',
            'color': '#000'
        })
})
/* scrolla plugin 실행 */
$(function () {
    $('.animate').scrolla({
        mobile: true,
        once: false
    })
})
/* 가로갤러리 */
$(function () {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width:1024px)': function () {

            /* 가로스크롤 */
            let list = gsap.utils.toArray('.work ul li');
            let scrollTween = gsap.to(list, {
                xPercent: -100 * (list.length - 1), //원래 리스트의 갯수보다 1을 빼서 길이를 구한후 가로로 이동
                ease:'none',
                scrollTrigger: {
                    trigger:'.work',
                    pin:true,
                    scrub:1,
                    start:'center center',
                    end:'300%', //뷰포트 높이의 300% -> 숫자가 클수록 느려짐.
                    //markers:true
                }
            })
        }
    })
    gsap.timeline({
        scrollTrigger:{
            trigger:'.skill',
            start:'0% 100%',
            end:'0% 20%',
            scrub:1,
            //markers:true
        }
    })
    .fromTo('.skill .title .a',{x:'-100%'},{x:'0%',ease:'none',duration:5},0)
    .fromTo('.skill .title .b',{x:'100%'},{x:'0%',ease:'none',duration:5},0)
    .to('.wrap', {
        'background': '#000',
        'color': '#fff'
    })
})

$(function(){
    $('.skill .content .myskill ul.list li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        $('.skill .content .myskill ul.description li').eq(index).addClass('on').siblings().removeClass('on');
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}