$(document).on('click', 'a[href="#"]', function (e) { e.preventDefault(); })

$(function () {
    Splitting();
})
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false,
    })
})

$(function(){
    $('.svgAni').find('#svgAni3').each(function(i,path){
        let length = path.getTotalLength();
        console.log(length)
    })
})

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

/* textanimation */
const pTag1 = document.querySelector('.first_parallel'); // 클래스 선택자 사용

const textArr1 = ['UXUI', 'PROCESS', '', 'WEB', 'PUBLISHER', '', 'WEB', 'DESIGNER'];

function initTexts(element, textArray) {
    element.innerHTML = '';
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] === '') {
            element.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;`;
        } else {
            element.innerHTML += `${textArray[i]} `;
        }
    }
}

initTexts(pTag1, textArr1);

let count1 = 0

function marqueeText(count, element, directoion) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = 'translateX(0)'
        count = 0
    }
    element.style.transform = `translateX(${count * directoion}px)`
    return count
}


function animate() {
    count1++

    count1 = marqueeText(count1, pTag1, -1)

    window.requestAnimationFrame(animate)
}

animate()

window.addEventListener('scroll', () => {
    count1 += 15
})

/* 코딩 동영상 */
$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: '.con1',
            start: '0% 80%',
            end: '100% 100%',
            scrub: 1,
            //markers: true 
        }
    })
        .to('.wrap', { backgroundColor: '#fff', color: '#000', ease: 'none', duration: 5 }, 0)
        .to('.svgAni path', { stroke: '#000', ease: 'none', duration: 5 }, 0)
        .to('.scroll', { opacity: 0, ease: 'none', duration: 5 }, 0)
        .fromTo('.video video', { 'clip-path': 'inset(60% 60% 60% 60% round 30%)' },
            { 'clip-path': 'inset(0% 0% 0% 0% round 0%)', ease: 'none', duration: 10 }, 0)

    //con02
    gsap.timeline({
        scrollTrigger:{
            trigger:'.con2',
            start:'0% 100%',
            end:'0% 20%',
            scrub:1,
            //markers:true
        }
    })
    .fromTo('.con2 .title .a',{x:'-100%'},{x:'0%',ease:'none',duration:5},0)
    .fromTo('.con2 .title .b',{x:'100%'},{x:'0%',ease:'none',duration:5},0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.website',
            start:'0% 100%',
            end:'0% 100%',
            scrub:1,
            //markers:true
        }
    })
    .to('.wrap',{backgroundColor:'#000',color:'#fff',ease:'none',duration:5},0)

    gsap.utils.toArray('.website').forEach((website,i)=>{
        ScrollTrigger.create({
            trigger:website,
            start:'top top',
            pin:true,
            scrub: 3,
            pinSpacing:false,
            //markers:true
        })
    })
})

$(function(){
    $('.con3 .slide').slick({
        arrow: false, //화살표
        dots: true, //인디케이터
        autoplay: true, //자동재생
        infinite:true,
        slidesToShow:2,
        slidesToScroll:1,
        autoplaySpeed: 6000,
        pauseOnHover: true, //호버시 멈추도록 설정
        pauseOnFocus: true,
    });
    $('#slick-slide-control00').text("DEABANG INDUSTRY");
    $('#slick-slide-control01').text("MUSIGN AGENCY");
    $('#slick-slide-control02').text("CREW A LA MODE");
    $('#slick-slide-control03').text("FANTA");
    $('.con3 .slideBox .slide .slick-arrow').css({
        'display':'none'
    })
    
})

$(function () {
    $('.txtaniBox2 .txtani1.en').simplyScroll({
        speed: 4,
        pauseOnHover: false,
        pauseOnTouch: false,
        direction: 'forwards',
    })
})
$(function () {
    $('.txtaniBox2 .txtani2').simplyScroll({
        speed: 4,
        pauseOnHover: false,
        pauseOnTouch: false,
        direction: 'backwards',
    })
})
$(function () {
    $('.txtaniBox2 .txtani3').simplyScroll({
        speed: 4,
        pauseOnHover: false,
        pauseOnTouch: false,
        direction: 'forwards',
    })
})


$(function(){
    /* gsap.registerPlugin(scrollTrigger); */

    let list = gsap.utils.toArray('.con5 .list li')
    let listA = gsap.utils.toArray('.con5 .list .a')
    let listB = gsap.utils.toArray('.con5 .list .b')
    let listC = gsap.utils.toArray('.con5 .list .c')
    
    let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length -1),
        ease:'none',
        scrollTrigger:{
            trigger:'.con5',
            pin: true,
            scrub:1,
            start:'center center',
            end: '200% ',
            //markers:true
        }
    })

    gsap.to(listA,{
        y:50,
        rotation:10,
        scrollTrigger:{
            trigger:'.con5',
            scrub:1,
            end:'200%'
        }
    })
    gsap.to(listB,{
        y:-50,
        rotation:20,
        scrollTrigger:{
            trigger:'.con5',
            scrub:1,
            end:'200%'
        }
    })
    gsap.to(listC,{
        y:-50,
        x:20,
        rotation:-10,
        scrollTrigger:{
            trigger:'.con5',
            scrub:1,
            end:'200%'
        }
    })
    gsap.timeline({
        scrollTrigger:{
            trigger:'.con6',
            start:'0% 100%',
            end:'0% 100%',
            scrub:1,
            //markers:true
        }
    })
    .to('.con5',{backgroundColor:'#000',color:'#fff',ease:'none',duration:5},0)
    .to('.con5 .list li',{color:'#000',ease:'none',duration:5},0)
})
/* responsive */

$(function(){
    $('header .menuOpen').on('click',function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
        $('body').toggleClass('on');
    })
})

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}