$(document).ready(function () {
    ////////////// 탑 배너 //////////////// 
    let top_banner_index = 1;
    let tb_count = $('.tb_item').length;
    setInterval(() => {
        // 들어올거
        $('.tb_item').eq(top_banner_index % tb_count).css({
            top: '100%'
        }).animate({
            top: 0
        }, 500)

        // 나갈거
        $('.tb_item').eq((top_banner_index % tb_count) - 1).animate({
            top: '-100%'
        }, 500)

        top_banner_index += 1;
    }, 1000);


});