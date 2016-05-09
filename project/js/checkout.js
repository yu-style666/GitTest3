$(function () {

    changePrice(); //进入购物袋让总价显示（不为0）；
    changeColor(); //点击增减商品数量颜色变化;
    changeNum(); //增减商品数量
    deleteThis(); //点击删除清空该产品数据 并 删除此
    address(); //三级联动事件
    mode(); //付款方式切换事件
    $('.shopping_quantity').click(function () {
        window.location.href = "bag.html"
    })

})

function address() { //三级联动事件
    var pro = $('#pro');
    var city = $('#city');
    var area = $('#area');

    function stopBobble(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }
    $(document).ready(function () {
        city.css("background", "#ddd");
        area.css("background", "#ddd");
        pro.click(function (e) {
            city.find('li').remove();
            area.find('li').remove();
            city.find('ul').html('-请选择城市-');
            area.find('ul').html('-请选择县区-');
            city.css("background", "#ddd");
            area.css("background", "#ddd");
            stopBobble(e);
            pro.find('li').remove();
            for (var i = 0; i < oPro.length; i++) {
                pro.append('<li>' + oPro[i] + '</li>');
            }
            pro.find('li').click(function (e) {
                city.find('ul').html('-请选择城市-');
                area.find('ul').html('-请选择县区-');
                city.css("background", "#fff");
                city.find('li').remove();
                stopBobble(e);
                pro.find('ul').html($(this).html());
                pro.find('li').hide();
                for (var i = 0; i < oCity[$(this).index('li')].length; i++) {
                    city.append('<li>' + oCity[$(this).index('li')][i] + '</li>');
                }
                city.find('li').hide();
                var that = $(this);
                console.log(that);
                city.click(function (e) {
                    city.find('li').show();
                    area.find('ul').html('-请选择县区-');
                    area.css("background", "#ddd");
                })
                city.find('li').click(function (e) {
                    area.find('ul').html('-请选择县区-');
                    area.css("background", "#fff");
                    area.find('li').remove();
                    stopBobble(e);
                    city.find('ul').html($(this).html());
                    city.find('li').hide();
                    for (var i = 0; i < oArea[that.index('li')][$(this).index() - 1].length; i++) {
                        area.append('<li>' + oArea[that.index('li')][$(this).index() - 1][i] + '</li>')
                    }
                    area.find('li').hide();
                    area.click(function (e) {
                        stopBobble(e);
                        area.find('li').show();
                    })
                    area.find('li').click(function (e) {
                        area.find('li').remove();
                        stopBobble(e);
                        area.find('ul').html($(this).html());
                        area.find('li').hide();
                    })
                })
            })
        })
    })
} //三级联动事件

function mode() { //付款方式切换事件
    var $btn = $('.list1>li');
    var $ctn = $('.list2>img');
    $btn.eq(0).css('background', '#ffffff').siblings('li').css('background', '#dddddd');
    $ctn.eq(0).show().siblings('img').hide();
    $btn.click(function () {
        $(this).css('background', '#ffffff').siblings('li').css('background', '#dddddd');
        $ctn.eq($(this).index()).stop(true).fadeIn(600).siblings('img').stop(true).fadeOut(600)
    })
} //付款方式切换事件






function changePrice() { //价钱随点击加减或删除 而改变事件；
    var allprice = 0;
    var alltotal = 0;
    //总价==商品的数量（i）*商品的单价(i)
    for (var i = 0; i < $('.goods').length; i++) {
        allprice = parseInt($('.num').eq(i).html()) * parseInt($('.price>span').eq(i).html());
        alltotal = alltotal + allprice;
    }
    $('.allprice').find('em').html(alltotal);
} //价钱随点击加减或删除 而改变事件；

function changeColor() { //点击增减商品数量 按钮颜色变化;
    $('.add,.reduce').mousedown(function () {
        $(this).css('background', 'red');
    })
    $('.add,.reduce').mouseup(function () {
        $(this).css('background', '');
    })
} //点击增减商品数量 按钮颜色变化;

function changeNum() { //增减商品数量
    $('.add').click(function () {
            //单价
            var price = parseInt($(this).parent().parent().siblings('.price').find('span').html());
            //数量
            var n = parseInt($(this).siblings('.num').html());
            n++;
            //console.log(n)
            //传值；
            $(this).siblings('.num').html(n);
            var allprice = 0;
            var alltotal = 0;
            allprice = allprice + parseInt(n * price);
            $(this).parent().parent().siblings('.subtotal').children('span').html(allprice);
            for (var i = 0; i < $('.goods').length; i++) {
                allprice = parseInt($('.num').eq(i).html()) * parseInt($('.price>span').eq(i).html());
                alltotal = alltotal + allprice;
            }
            $('.allprice').find('em').html(alltotal);
        })
        //减少商品数量
    $('.reduce').click(function () {
        var price = parseInt($(this).parent().parent().siblings('.price').find('span').html());
        var n = parseInt($(this).siblings('.num').html());
        if (n > 1) {
            n--;
        }
        $(this).siblings('.num').html(n);
        var allprice = 0;
        var alltotal = 0;
        allprice = allprice + parseInt(n * price);
        $(this).parent().parent().siblings('.subtotal').children('span').html(allprice);
        for (var i = 0; i < $('.goods').length; i++) {
            allprice = parseInt($('.num').eq(i).html()) * parseInt($('.price>span').eq(i).html());
            alltotal = alltotal + allprice;
        }
        $('.allprice').find('em').html(alltotal);
    })
} //增减商品数量
function deleteThis() { //点击删除清空该产品数据 并 删除此项;
    $('.delete').click(function () {
        //console.log($delete.siblings('.number').children('.num'))
        $(this).siblings('.number').find('.num').html('0');
        $(this).siblings('.subtotal').children('span').html('0');
        changePrice();
        $(this).parent().remove();
    })
} //点击删除清空该产品数据 并 删除此项;