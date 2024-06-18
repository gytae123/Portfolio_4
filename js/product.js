$(document).ready(function () {

    // 무한스크롤
    $(window).scroll(function () {
        let s_bot = $(window).scrollTop() + $(window).height();
        let main_o_bot = $('.main').offset().top + $('.main').height();
        if (s_bot - 300 >= main_o_bot) {
            load_item(find_cate_no, 8);
        }
    });

    let find_cate_no = get_url_info('cate_no');
    load_item(find_cate_no, 8);

});
