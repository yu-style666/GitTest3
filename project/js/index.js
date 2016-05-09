$(function () {
        $.get('data/index.json', function (res) {
            //console.log(res); //查看是否获取json
            Luxurygoods(res); //奢品大牌加入json事件;
            Fashion(res); //潮流时尚加入json事件;
            Today(res); //今日上新加入json事件;
            BestSellers(res); //热卖品牌加入json事件;
            Activity(res); //热卖活动加入json事件;
            tomorrow(res); //活动即将开始 今天 json事件;
            Tuesday(res); //活动即将开始 周二 json事件;
            Wednesday(res); //活动即将开始 周三 json事件;
            Thursday(res); //活动即将开始 周四 json事件;
            Friday(res); //活动即将开始 周五 json事件;
            moveAuto(res); //轮播图获取json事件;

            $('.wrap>a').click(function () {
                window.location.href = "html/women.html"
            });

        })
        seckill(); //秒杀点击关闭；
        $('#totop').click(function () { //一键置顶；
            $('html,body').stop(true).animate({
                'scrollTop': '0'
            }, 400)
        });
        $('.link').find('li').hover(function () { //大图移入显示事件
            //console.log($(this).index()); 
            $(this).css('opacity', '0.5')
        }, function () {
            $(this).css('opacity', '0')
        });
        $('.shopping_quantity').click(function () {
            window.location.href = "html/bag.html"
        })

    })
    //图片展示>>滑入事件；
function picOver() {
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
}
//活动即将开始
function activity() {
    //活动鼠标移入 蒙板显示
    var $box = $('.box');
    var $btns = $('.btns');
    var $activitiesCtn = $('.activitiesCtn');
    var $underLine = $('.underline');
    $box.hover(function () {
            $(this).children('.mask').show();
        }, function () {
            $(this).children('.mask').hide();
        })
        //点击按钮tab切换
    $btns.children('li').hover(function () {
        $activitiesCtn.children('li').eq($(this).index()).show().siblings('li').hide();
        $underLine.css({
            'left': $(this).index() * $underLine.width()
        })
    })
}
//秒杀点击关闭；
function seckill() {
    var $seckill1 = $('#seckill1');
    var $seckill2 = $('#seckill2');
    $seckill2.find('.close').click(function () {
        $seckill2.stop(true).animate({
            height: '0'
        }, 200, function () {
            $seckill1.stop(true).animate({
                width: '102px'
            })
        })
    })
    $seckill1.click(function () {
        $seckill1.stop(true).animate({
            width: '0'
        }, 200, function () {
            $seckill2.stop(true).animate({
                height: '144px'
            })
        })
    })
}
//奢品大牌加入jaon事件函数;
function Luxurygoods(res) {
    for (var i = 0; i < res.Luxurygoods.length; i++) {
        var $id = res.Luxurygoods[i].id;
        var $url = res.Luxurygoods[i].url;
        var $title = res.Luxurygoods[i].title;
        var $tips = res.Luxurygoods[i].tips;
        var $discount = res.Luxurygoods[i].discount;
        var $wrap = ('<div class="wrap" id=' + $id + '><a href="#"><div class="wrap_box"><img src=' + $url + ' alt=""><div class="mask"><p>' + $tips + '</p></div></div><div class="wrap_introduce"><span>' + $title + '</span><span class="discount"><em>' + $discount + '</em>折起</span></div></a></div>');
        $('.Luxurygoods').append($wrap);
    }
    picOver();
}
//潮流时尚加入jaon事件函数;
function Fashion(res) {
    for (var i = 0; i < res.Fashion.length; i++) {
        var $id = res.Fashion[i].id;
        var $url = res.Fashion[i].url;
        var $title = res.Fashion[i].title;
        var $tips = res.Fashion[i].tips;
        var $discount = res.Fashion[i].discount;
        var $wrap = ('<div class="wrap" id=' + $id + '><a href="#"><div class="wrap_box"><img src=' + $url + ' alt=""><div class="mask"><p>' + $tips + '</p></div></div><div class="wrap_introduce"><span>' + $title + '</span><span class="discount"><em>' + $discount + '</em>折起</span></div></a></div>');
        $('.Fashion').append($wrap);
    }
    picOver();
}
//今日上新加入jaon事件函数;
function Today(res) {
    for (var i = 0; i < res.Today.length; i++) {
        var $id = res.Today[i].id;
        var $url = res.Today[i].url;
        var $title = res.Today[i].title;
        var $tips = res.Today[i].tips;
        var $discount = res.Today[i].discount;
        var $wrap = ('<div class="wrap" id=' + $id + '><a href="#"><div class="wrap_box"><img src=' + $url + ' alt=""><div class="mask"><p>' + $tips + '</p></div></div><div class="wrap_introduce"><span>' + $title + '</span><span class="discount"><em>' + $discount + '</em>折起</span></div></a></div>');
        $('.Today').append($wrap);
    }
    picOver();
}
//热卖品牌加入jaon事件函数;
function BestSellers(res) {
    for (var i = 0; i < res.BestSellers.length; i++) {
        var $id = res.BestSellers[i].id;
        var $url = res.BestSellers[i].url;
        var $title = res.BestSellers[i].title;
        var $tips = res.BestSellers[i].tips;
        var $discount = res.BestSellers[i].discount;
        var $wrap = ('<div class="wrap" id=' + $id + '><a href="#"><div class="wrap_box"><img src=' + $url + ' alt=""><div class="mask"><p>' + $tips + '</p></div></div><div class="wrap_introduce"><span>' + $title + '</span><span class="discount"><em>' + $discount + '</em>折起</span></div></a></div>');
        $('.BestSellers').append($wrap);
    }
    picOver();
}
//热卖活动加入jaon事件函数;
function Activity(res) {
    for (var i = 0; i < res.Activity.length; i++) {
        var $id = res.Activity[i].id;
        var $url = res.Activity[i].url;
        var $title = res.Activity[i].title;
        var $tips = res.Activity[i].tips;
        var $discount = res.Activity[i].discount;
        var $wrap = ('<div class="wrap" id=' + $id + '><a href="#"><div class="wrap_box"><img src=' + $url + ' alt=""><div class="mask"><p>' + $tips + '</p></div></div><div class="wrap_introduce"><span>' + $title + '</span><span class="discount"><em>' + $discount + '</em>折起</span></div></a></div>');
        $('.Activity').append($wrap);
    }
    picOver();
}
//活动即将开始 今天 jaon事件函数;
function tomorrow(res) {
    for (var i = 0; i < res.tomorrow.length; i++) {
        var $id = res.tomorrow[i].id;
        var $url = res.tomorrow[i].url;
        var $title = res.tomorrow[i].title;
        var $discount = res.tomorrow[i].discount;
        var $box = ('<div class="box"><dl class="introduce"><dt><img src=' + $url + ' alt=""></dt><dd><p>' + $title + '</p><span><em>' + $discount + '</em>折起</span></dd></dl><div class="mask"><div class="subscribe"><a href="#">预览</a>|<a href="#">订购</a></div></div></div>');
        $('.tomorrow').append($box);
    }
    activity(); //活动鼠标移入 蒙板显示
}
//活动即将开始 周二 jaon事件函数;
function Tuesday(res) {
    for (var i = 0; i < res.Tuesday.length; i++) {
        var $id = res.Tuesday[i].id;
        var $url = res.Tuesday[i].url;
        var $title = res.Tuesday[i].title;
        var $discount = res.Tuesday[i].discount;
        var $box = ('<div class="box"><dl class="introduce"><dt><img src=' + $url + ' alt=""></dt><dd><p>' + $title + '</p><span><em>' + $discount + '</em>折起</span></dd></dl><div class="mask"><div class="subscribe"><a href="#">预览</a>|<a href="#">订购</a></div></div></div>');
        $('.Tuesday').append($box);
    }
    activity(); //活动鼠标移入 蒙板显示
}
//活动即将开始 周三 jaon事件函数;
function Wednesday(res) {
    for (var i = 0; i < res.Wednesday.length; i++) {
        var $id = res.Wednesday[i].id;
        var $url = res.Wednesday[i].url;
        var $title = res.Wednesday[i].title;
        var $discount = res.Wednesday[i].discount;
        var $box = ('<div class="box"><dl class="introduce"><dt><img src=' + $url + ' alt=""></dt><dd><p>' + $title + '</p><span><em>' + $discount + '</em>折起</span></dd></dl><div class="mask"><div class="subscribe"><a href="#">预览</a>|<a href="#">订购</a></div></div></div>');
        $('.Wednesday').append($box);
    }
    activity(); //活动鼠标移入 蒙板显示
}
//活动即将开始 周四 jaon事件函数;
function Thursday(res) {
    for (var i = 0; i < res.Thursday.length; i++) {
        var $id = res.Thursday[i].id;
        var $url = res.Thursday[i].url;
        var $title = res.Thursday[i].title;
        var $discount = res.Thursday[i].discount;
        var $box = ('<div class="box"><dl class="introduce"><dt><img src=' + $url + ' alt=""></dt><dd><p>' + $title + '</p><span><em>' + $discount + '</em>折起</span></dd></dl><div class="mask"><div class="subscribe"><a href="#">预览</a>|<a href="#">订购</a></div></div></div>');
        $('.Thursday').append($box);
    }
    activity(); //活动鼠标移入 蒙板显示
}
//活动即将开始 周五 jaon事件函数;
function Friday(res) {
    for (var i = 0; i < res.Friday.length; i++) {
        var $id = res.Friday[i].id;
        var $url = res.Friday[i].url;
        var $title = res.Friday[i].title;
        var $discount = res.Friday[i].discount;
        var $box = ('<div class="box"><dl class="introduce"><dt><img src=' + $url + ' alt=""></dt><dd><p>' + $title + '</p><span><em>' + $discount + '</em>折起</span></dd></dl><div class="mask"><div class="subscribe"><a href="#">预览</a>|<a href="#">订购</a></div></div></div>');
        $('.Friday').append($box);
    }
    activity(); //活动鼠标移入 蒙板显示
}


function moveAuto(res) { //轮播事件
    //console.log(res.carousel.length)
    for (var i = 0; i < res.carousel.length; i++) { //循环添加li 图片
        var $carouselImg = res.carousel[i].img;
        //console.log($carouselImg);
        var $carouselLi = '<li><img src=' + res.carousel[i].img + '></li>';
        var $btn = '<b></b>'
        $('.imgs').append($carouselLi);
        $('.btns').append($btn);
    } //循环添加li 图片
    $('.imgs').width(res.carousel.length * $('.imgs').find('li').width());
    var index = 0;
    var $imgs = $('.imgs');
    var timer;
    var $imgWidth = $imgs.find('li').width();
    var $btns = $('.carousel .btns').find('b');
    $btns.eq(0).css('background', 'red')

    function next() { //下一张
        index++;
        if (index > $imgs.find('li').length - 1) {
            index = 0;
        }
        $imgs.stop(true).animate({
            'marginLeft': -$imgWidth * index
        }, 600);
        $btns.eq(index).css('background', 'red').siblings('b').css('background', '#dddddd');
    } //下一张
    function prev() { //上一张
        index--;
        if (index < 0) {
            index = $imgs.find('li').length - 1;
        }
        $imgs.stop(true).animate({
            'marginLeft': -$imgWidth * index
        }, 600);
        $btns.eq(index).css('background', 'red').siblings('b').css('background', '#dddddd');
    } //上一张
    $('.prev').click(prev); //点击上一张
    $('.next').click(next); //点击下一张
    timer = setInterval(next, 1500); //自动轮播;

    $('.carousel').hover(function () { //鼠标滑入
            clearInterval(timer);
            $('.prev').show();
            $('.next').show();
        }, function () {
            if (timer) {
                clearInterval(timer);
            }
            timer = setInterval(next, 1500);
            $('.prev').hide();
            $('.next').hide();
        }) //鼠标滑入
    $btns.click(function () { //小按钮的点击事件
            index = $(this).index();
            $(this).css('background', 'red').siblings('b').css('background', '#dddddd');
            $imgs.stop(true).animate({
                'marginLeft': -$imgWidth * index
            }, 600);
        }) //小按钮的点击事件
}