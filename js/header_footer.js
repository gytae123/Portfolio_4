$(document).ready(function () {
    ///////////// 헤더의 메뉴 따라다니게 하기 //////////
    let menu_o_top = $('.menu').offset().top;
    let h_top_banner = $('.top_banner').height();
    let menu_height = $('.menu').height();
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();

        if (s_top + h_top_banner >= menu_o_top) {
            $('.menu').addClass('menu_active');
            $('.main').css({
                paddingTop: menu_height
            });
            $('.pan').css({
                position: 'fixed',
                left: 0,
                top: h_top_banner + menu_height
            });
        }
        else {
            $('.menu').removeClass('menu_active');
            $('.main').css({
                paddingTop: 0
            })
            $('.pan').css({
                position: 'absolute',
                left: 0,
                top: '100%'
            });
        }
    });
    ///////////// 메뉴 아래쪽 판 /////////////
    $('.menu_item > a , .pan').hover(function () {

        $('.pan').addClass('pan_active');

        if (!$(this).hasClass('pan')) {
            $('.pan_item').removeClass('pan_item_active');
            $('.pan_item').eq($(this).parent().index()).addClass('pan_item_active');
        }

    }, function () {
        $('.pan').removeClass('pan_active');
    })
});
