$(document).ready(function () {
    let cate_no = get_url_info("cate_no");
    let item_no = get_url_info("item_no");

    if (cate_no == null || item_no == null) {
        // if( get_url_info("cate_no") == null || get_url_info("item_no") == null) {
        alert("잘못된 경로입니다")
        location.replace('index.html')
    }
    item_no = item_no - 1;

    const list_array = [BEST_LIST, NEW_LIST, OUTER_LIST, TOP_LIST, BOTOM_LIST, ACC_LIST, BAG_LIST];

    let TMP_ITEM_LIST = list_array[cate_no];

    const ITEM_SRC = TMP_ITEM_LIST[item_no].src;
    const ITEM_TITLE = TMP_ITEM_LIST[item_no].title;
    const ITEM_O_PRICE = TMP_ITEM_LIST[item_no].o_price;
    const ITEM_S_PRICE = TMP_ITEM_LIST[item_no].s_price;

    // console.log(ITEM_SRC)
    // console.log(ITEM_TITLE)
    // console.log(ITEM_O_PRICE)
    // console.log(ITEM_S_PRICE)

    let list = '';
    let c_name = SEC_LIST[cate_no];
    //////////////
    list += '<div class="item_big_img">';
    list += '    <img src="img/items/' + c_name + '/' + ITEM_SRC + '" alt="">';
    list += '    <div class="magnifier" style="background-image: url(img/items/' + c_name + '/' + ITEM_SRC + ')"></div>'
    list += '</div>';
    list += '<div class="item_info_area">';
    list += '    <div class="item_title">';
    list += '        ' + ITEM_TITLE + '';
    list += '    </div>';
    list += '    <div class="item_options">';
    list += '        <table class="item_info_sec1">';
    list += '            <tr>';
    list += '                <td class="ii_title">소비자가</td>';
    list += '                <td class="ii_desc">';
    list += '                    <div><del>' + comma(ITEM_O_PRICE) + '원</del></div>';
    list += '                </td>';
    list += '            </tr>';
    list += '            <tr>';
    list += '                <td class="ii_title">판매가</td>';
    list += '                <td class="ii_desc">';
    list += '                    <div>' + comma(ITEM_S_PRICE) + '원</div>';
    list += '                </td>';
    list += '            </tr>';
    list += '            <tr>';
    list += '                <td class="ii_title">배송비</td>';
    list += '                <td class="ii_desc">';
    list += '                    <select>';
    list += '                        <option value="">주문시 결제</option>';
    list += '                        <option value="">수령시 결제</option>';
    list += '                    </select>';
    list += '                    <div>2,500원 (3,000,000원 이상 구매 시 무료)</div>';
    list += '                </td>';
    list += '            </tr>';
    list += '            <tr>';
    list += '                <td class="ii_title">적립금</td>';
    list += '                <td class="ii_desc">';
    list += '                    <div>10,000원(20%)</div>';
    list += '                </td>';
    list += '            </tr>';
    list += '        </table>';
    list += '';
    list += '        <table class="item_info_sec2">';
    list += '            <tr>';
    list += '                <td class="color_title"><span>색상</span></td>';
    list += '                <td class="color_container">';
    list += '                    <div class="color_box">';
    list += '                        <div class="cb_black">';
    list += '                            <span class="color_name">BLACK</span>';
    list += '                        </div>';
    list += '                    </div>';
    list += '                    <div class="color_box">';
    list += '                        <div class="cb_white">';
    list += '                            <span class="color_name">WHITE</span>';
    list += '                        </div>';
    list += '                    </div>';
    list += '                    <div class="color_box">';
    list += '                        <div class="cb_gray">';
    list += '                            <span class="color_name">GRAY</span>';
    list += '                        </div>';
    list += '                    </div>';
    list += '                    <div class="opt_required">[필수] 옵션을 선택해 주세요</div>';
    list += '                </td>';
    list += '            </tr>';
    list += '        </table>';
    list += '        <div class="selected_opt">';
    list += '            <div class="sel_opt_title">(최소주문수량 1개 이상)</div>';
    list += '        </div>';
    list += '        <div class="opt_continer">';
    list += '            <table class="opt_box">';
    list += '            </table>';
    list += '        </div>';
    list += '    </div>';
    list += '    <div class="total_price">';
    list += '        <div class="total_price_box">';
    list += '            TOTAL: <span id="final_price">0원</span>(<span id="final_qty">0</span>개)';
    list += '        </div>';
    list += '    </div>';
    list += '';
    list += '    <div class="btn_item">';
    list += '        <div class="btn_buy">BUY IT NOW</div>';
    list += '        <div class="btn_addCart">ADD TO CART</div>';
    list += '        <div class="btn_wishlist">WISH LIST</div>';
    list += '    </div>';
    list += '</div>';

    $('.detail_area').append(list);

    ///////////////

    let color_opt_chk = [true, true, true];
    $(document).on('click', '.color_box', function () {
        if (color_opt_chk[$(this).index()] == true) {
            color_opt_chk[$(this).index()] = false;
            let item_color = $(this).find('.color_name').text();

            let opt_list = '';
            opt_list += '<tr>';
            opt_list += '   <td class="opt_name">';
            opt_list += '        <div>마켓디자인</div>';
            opt_list += '        <div>-' + item_color + '</div>';
            opt_list += '    </td>';
            opt_list += '    <td class="opt_qty">';
            opt_list += '        <input type="button" class="btn_qty btn_minus" value="-">';
            opt_list += '        <input type="text" class="txt_qty" value="1">';
            opt_list += '        <input type="button" class="btn_qty btn_plus" value="+">';
            opt_list += '        <img src="img/product/btn_price_delete.gif" alt="" class="btn_price_del">';
            opt_list += '        <input type="hidden" value="' + $(this).index() + '" class="chk_item_order"> '
            opt_list += '    </td>';
            opt_list += '    <td class="opt_price">';
            opt_list += '        <div>' + comma(ITEM_S_PRICE) + '원</div>';
            opt_list += '        <div>(적립 10,000원)</div>';
            opt_list += '    </td>';
            opt_list += '</tr>';
            document.getElementsByClassName('opt_box')[0].innerHTML += opt_list;
            total_price();
        }
        else {
            alert('이미 선택한 옵션입니다.')
        }

    });

    $(document).on('click', '.btn_minus', function () {
        let minus_qty = Number($(this).next('.txt_qty').val()) - 1;
        if (minus_qty > 0) {
            $(this).next('.txt_qty').attr('value', minus_qty);
            total_price();
        }
        else {
            alert("최소 주문 수량은 1개 입니다.");
        }
    })
    $(document).on('click', '.btn_plus', function () {
        let plus_qty = Number($(this).prev('.txt_qty').val()) + 1;
        if (plus_qty > 0) {
            $(this).prev('.txt_qty').attr('value', plus_qty);
            total_price();
        }
        else {
            alert("최소 주문 수량은 1개 입니다.");
        }
    })
    $(document).on('click', '.btn_price_del', function () {
        let tmp_index_no = $(this).next('.chk_item_order').val();
        color_opt_chk[tmp_index_no] = true;
        $(this).parent().parent('tr').parent('tbody').remove();
        total_price();
    });

    function total_price() {
        let total_price = 0;
        let total_qty = 0;

        for (let i = 0; i < $('.txt_qty').length; i++) {
            total_price += $('.txt_qty').eq(i).val() * ITEM_S_PRICE;
            total_qty += Number($('.txt_qty').eq(i).val());
        }

        $('#final_price').text(comma(total_price) + "원");
        $('#final_qty').text(total_qty)
    }
    ///// 돋보기 /////
    let magnifier = $('.magnifier');
    let target = $('.item_big_img');
    let target_w = target.width();
    let target_h = target.height();

    $('.item_big_img').on({
        mouseenter: function () {
            target_w = target.width();
            target_h = target.height();

            magnifier.fadeIn(0)
        },
        mouseleave: function () {
            magnifier.fadeOut(0)
        },
        mousemove: function () {
            let mouseX = event.pageX - target.offset().left;
            let mouseY = event.pageY - target.offset().top;

            let pos_X = mouseX - (magnifier.width() / 2);
            let pos_Y = mouseY - (magnifier.height() / 2);

            let bg_X = -mouseX + (magnifier.width() / 2);
            let bg_y = -mouseY + (magnifier.height() / 2);

            magnifier.css({
                left: pos_X,
                top: pos_Y,

                backgroundSize: target_w + "px " + target_h + "px",
                backgroundPosition: bg_X + "px " + bg_y + "px",

            })
        }
    });
});