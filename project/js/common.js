$(function () {

    mobile(); //手机版>>滑入；
    topNavBtnHover(); //头部滑动>>导航切换
    shoppingQuantity(); //购物袋>>滑入及删除；
    picOver(); //图片展示>>滑入事件；

    //    滚动条滚动>>导航吸顶
    window.onscroll = function () {
        //alert(0)
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var $topNav = $('#header_bottom');
        var $toTop = $('#totop');
        if (scrollTop > 120) {
            $topNav.css({
                'position': 'fixed',
                'top': '0',
                'z-index': '10'
            })
        } else {
            $topNav.css({
                'position': ''
            })
        }
        if (scrollTop > 800) {
            $toTop.show();
        } else {
            $toTop.hide();
        }
    }

    




})

function mobile() { //手机版>>滑入；
    var $mobile = $('#mobile');
    $mobile.children('a').mouseover(function () {
        $mobile.children('p').stop(true).fadeIn('slow');
    })
    $mobile.children('a').mouseout(function () {
        $mobile.children('p').stop(true).fadeOut('slow');
    })
} //手机版>>滑入；

function picOver() { //图片展示>>滑入事件；
    var $pic = $('.wrap>a');
    $pic.hover(function () {
        $(this).find('.mask').show();
        $(this).find('img').stop(true).animate({
            width: '340px',
            height: '210px',
            margin: '-10px'
        }, 400);
    }, function () {
        $(this).find('.mask').hide();
        $(this).find('img').stop(true).animate({
            width: '320px',
            height: '190px',
            margin: '0'
        }, 400);
    })
} //图片展示>>滑入事件；

function shoppingQuantity() { //购物袋>>滑入及删除；
    var $shoppingQuantity = $('.shopping_quantity');
    $shoppingQuantity.mouseover(function () {
        $(this).children('p').stop(true).animate({
            height: '80px'
        }, 400).show();
    })
    $shoppingQuantity.mouseout(function () {
        $(this).children('p').stop(true).animate({
            height: '0'
        }, 400, function () {
            $(this).hide()
        });
    })
    $shoppingQuantity.find('b').click(function () {
        $(this).parent().hide();
    })
} //购物袋>>滑入及删除；

//头部滑动>>导航切换
function topNavBtnHover() { //头部滑动>>导航切换
    var $topNavBtn = $('#header_bottom>.nav>.list>li');
    //console.log($topNavBtn)
    $topNavBtn.hover(function () {
        $(this).children('a').addClass('thepage');
        $(this).find('.hide').css('display', 'block');
    }, function () {
        $(this).children('a').removeClass('thepage');
        $(this).find('.hide').css('display', 'none');
    })
} //头部滑动>>导航切换