//////// 쿠키 /////////
// 쿠키 있는지 확인 
let string_cookie = getCookie('test_cookie');
if(string_cookie == null || string_cookie == '0'){
    $('.layer_popup').css({ display: "block" })
} 
function getCookie(c_name) {
    let tmp_cookie = document.cookie.split(";");
    for(let i = 0; i < tmp_cookie.length; i++) {
        let crumb = tmp_cookie[i].split("=");

        if(c_name == crumb[0].replace(" ","")) {
            return unescape(crumb[1]);
        }
    }
    return null;
}
function setCookie(name, value, exp) {
    let dt = new Date();
    // 1000 * 60 * 60 * 24 = 24시간
    dt.setTime(dt.getTime() + (1000 * 60 * 60 * 24 * exp))
    document.cookie = name+'='+value+';expires='+dt.toUTCString()+';path=/';   
    document.getElementsByClassName('layer_popup')[0].style.display="none";
}   


$(document).ready(function(){
    ////////////// 레이어팝업 //////////////
    $('.p_img').eq(0).css('display', 'block')
    $(document).on('mouseenter', '.popup_btn', function(){
        if($('.p_img').eq($(this).index()).css('display') != "block") {
            $('.p_img').stop().fadeOut(200)
            $('.p_img').eq($(this).index()).stop().fadeIn(200)
        }
    });
    $(document).on('click', '.btn_close', function(){
        $('.layer_popup').css({ display: 'none'})
    });

    // 레이어팝업 끌고 다니기 
    let in_mouse_posX = 0, in_mouse_posY = 0;
    $('.layer_popup').mousedown(function(event){
        in_mouse_posX = event.clientX - $('.layer_popup').position().left;
        in_mouse_posY = event.clientY - $('.layer_popup').position().top;
// console.log(in_mouse_posX,in_mouse_posY )        

        $(document).on('mousemove', function(event){
            let x_pos = event.clientX;
            let y_pos = event.clientY;

            $('.layer_popup').css({
                left: x_pos - in_mouse_posX,
                top: y_pos - in_mouse_posY,
            })
        });
    });
    $('.layer_popup').mouseup(function(){
        $(document).off('mousemove')
    });



    /////////////// 메인배너 이미지 슬라이드 ///////////////
    // 기본 첫번째 판에 left: 0 적용
    $('.box').eq(0).css({left: 0})

    // 인디케이터 버튼 삽입
    let mb_count = $('.box').length;
    for(let i=0; i<mb_count; i++) {
        $('.indicator').append('<div class="circle"></div>')
    }
    $('.circle').eq(0).addClass('indi_active');
    // 인디케이터 선택시 해당 이미지 슬라이드
    $('.circle').on('click', function(){
        let curr_circle = $(this).index();
        
        if(!$(this).hasClass('indi_active')) {
            slide(curr_circle, '100%', (mb_index - 1) % mb_count, '-100%');
            mb_index = curr_circle + 1;
        }
    });


    // 좌우버튼 누르면 슬라이드 동작
    let mb_timer = 500;
    let mb_index = 1;
    $('#btn_R').on('click', function(){
        slide(mb_index % mb_count, '100%', (mb_index - 1) % mb_count, '-100%');
        mb_index+=1;
    });
    $('#btn_L').on('click', function(){
        mb_index-=1;
        slide((mb_index - 1) % mb_count, '-100%', mb_index % mb_count, '100%')
    });
    
    function slide(coming, c_pos, outing, o_pos) {
        // 들어올판
        $('.box').eq(coming).css({
            left: c_pos
        }).animate({
            left: 0
        }, mb_timer)
        // 나갈판
        $('.box').eq(outing).animate({
            left: o_pos
        }, mb_timer);

        // 인디케이터 색변경
        $('.circle').eq(coming).addClass('indi_active')
        $('.circle').eq(outing).removeClass('indi_active')
        // 버튼 초기화
        $('.btn_slide').css({pointerEvents: 'none'}) 
        setTimeout(function() {
            $('.btn_slide').css({pointerEvents: 'auto'})
        }, mb_timer);
    }

    // 자동으로 슬라이드
    let mb_interval;
    auto_slide();

    function auto_slide() {
        mb_interval = setInterval(function() {
            $('#btn_R').trigger('click')
        }, mb_timer + 2000);
    }
    // main_banner 영역에 마우스 들어가면 인터벌 멈췄다가 빠지면 다시 동작시키기
    $('.main_banner').hover(function(){
        clearInterval(mb_interval);
    }, function(){
        auto_slide();
    })

    let w_ranking_o_top = $('#w_ranking').offset().top;
    let best_o_top = $('#best').offset().top;
    let new_o_top = $('#new').offset().top;
    let w_ranking_chk = true;
    let best_chk = true;
    let new_chk = true;
    ////// 아이템 위로 올라가게 하기 ///////
    $(window).scroll(function(){
        let s_bot = $(window).scrollTop() + $(window).height();

        if(w_ranking_o_top <= s_bot - 200) {
            for(let i = 0; i<= $('#w_ranking .item_init').length ; i++) {
                (function(tmp_i) {
                    setTimeout(function() {
                        $('#w_ranking .item_init').eq(tmp_i).addClass('item_acitve'); 
                    }, i * 100);
                })(i)
            } 
            if(w_ranking_chk) {
                w_ranking_o_top = $('#w_ranking').offset().top;
                best_o_top = $('#best').offset().top;
                new_o_top = $('#new').offset().top;
                w_ranking_chk = false;
            }
        }
        if(best_o_top <= s_bot - 200) {
            for(let i = 0; i<= $('#best .item_init').length ; i++) {
                (function(tmp_i) {
                    setTimeout(function() {
                        $('#best .item_init').eq(tmp_i).addClass('item_acitve'); 
                    }, i * 100);
                })(i)
            } 
            if(best_chk) {
                w_ranking_o_top = $('#w_ranking').offset().top;
                best_o_top = $('#best').offset().top;
                new_o_top = $('#new').offset().top;
                best_chk = false;
            }
            
        }
        if(new_o_top <= s_bot - 200) {
            for(let i = 0; i<= $('#new .item_init').length ; i++) {
                (function(tmp_i) {
                    setTimeout(function() {
                        $('#new .item_init').eq(tmp_i).addClass('item_acitve'); 
                    }, i * 100);
                })(i)
            } 
            if(new_chk) {
                w_ranking_o_top = $('#w_ranking').offset().top;
                best_o_top = $('#best').offset().top;
                new_o_top = $('#new').offset().top;
                new_chk = false;
            }
        }
    });

    load_item(0, 8); // best
    load_item(1, 8); // new

    
    // let w_ranking_o_top = $('#w_ranking').offset().top;
    // let best_o_top = $('#best').offset().top;
    // let new_o_top = $('#new').offset().top;
})