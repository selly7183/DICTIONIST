$(document).ready(function() {
    $('#fullpage').fullpage({      
        anchors: ['Brand Story', 'Our Philosophy', 'Our Promise', 'Brand identity', 'Brand logo', 'Brand Symbol', 'Sustainability', 'Archives',  'Product'],
        navigation: true,
        navigationTooltips: ['Brand Story', 'Our Philosophy', 'Our Promise', 'Brand identity', 'Brand identity', 'Sustainability', 'Sustainability', 'Archives', 'Product'],
        showActiveTooltip: true,
        navigation:true,
        scrollOverflow: true,
		//normalScrollElements: '#sec_09',
        scrollOverflowOptions: {
			scrollbars: true,
			mouseWheel: true,
			hideScrollbars: false,
			fadeScrollbars: false,
			disableMouse: true,
			click: false,
		},
        menu: '#menu',
        afterLoad: function(anchorLink, index) {
            if (index == 2) {
                // $('#fp-nav ul').addClass('slide_active');
            } 
            else if (index == 7 || index == 8 || index == 9) {
                $('#fp-nav ul').addClass('c_black');
            } 
            else{
                $('#fp-nav ul').removeClass('c_black');
                // $('#fp-nav ul').removeClass('slide_active');
            }
        }
    });

    var sec02_li = $('.sec02_wrap li');
    var sec02_ho = $('.ho_bg');
    var txt = $('.sec02_txt');
    var subTxt = $('.sec02_sub');

    $.each(sec02_li, function(index, item){
        $(this).mouseover(function(){
            sec02_ho.removeClass('on');
            sec02_ho.eq(index).addClass('on');

            $('.sec_02_tit').css('display','none');

            txt.addClass('on');
            txt.eq(index).addClass('on2');

            subTxt.eq(index).addClass('onTxt');

        });

        $(this).mouseleave(function(){
            sec02_ho.removeClass('on');
            $('.sec_02_tit').css('display','block');
            txt.removeClass('on');
            txt.removeClass('on2');
            subTxt.removeClass('onTxt');
        });
    })

    

    //swiper
    var swiper = new Swiper(".swiper",{
        autoplay:true,
        speed: 1000,     // 스와이프시 패널이 넘어가는 속도 (.5초)
        loop: true,     //스와이프를 순환
        direction: "horizontal",    //horizontal 가로, vertical 세로
        slidesPerView: "auto",        //숫자 (해당갯수단위로 패널보임), auto : 100%, 특정 크기를 지정
        spaceBetween:30,    //패널사이 간격(px)
        centeredSlides: true,    //활성화 패널을 항상 가로 가운데 배치
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
        },
    });
    
});


/*
afterLoad: function(anchorLink, index) {
    if (index == 3) {
        setTimeout(function() {
        $('#sec_03.active .w_3 ul').addClass('h_active');
        $('.sec_h_bg').addClass('active');
        $('#sec_03.active .sec_03_bg.f_w').addClass('dis-no');
        $('#fp-nav ul').removeClass('c_black');
        }, 950);
    } else if (index == 5) {
        setTimeout(function() {
        $('#sec_05.active').addClass('ani_loaded');
        }, 7000);
        $('#fp-nav ul').removeClass('c_black');
    } else if (index == 10 || index == 11 ) {
        $('#fp-nav ul').addClass('c_black');
    } else if (index == 4 || index == 8 || index == 9 || index == 10 ) {
        $('#fp-nav ul').addClass('c_black');
    }
    else {
        $('#sec_03 .w_3 ul').removeClass('h_active');
        $('#sec_03 .sec_03_bg.f_w').removeClass('dis-no');
        $('#sec_05').removeClass('ani_loaded');
        $('#fp-nav').css('display', 'block');
        $('#fp-nav ul').removeClass('c_black');
    }
}
});
*/


