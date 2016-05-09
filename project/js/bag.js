$(function () {
    $('.shopping_quantity').click(function () {
        window.location.href = "bag.html"
    })


    //ajax获取json

    $.get('../data/shoppingCart.json', function (res) {
        //console.log(res);//查看是否获取；

        for (var i = 1; i < res.shoppingCart.length; i++) {
            var $id = res.shoppingCart[i].id; //该商品的id
            var $url = res.shoppingCart[i].url; //图片
            var $brand = res.shoppingCart[i].brand; //品牌
            var $title = res.shoppingCart[i].title; //标题
            var $size = res.shoppingCart[i].size; //尺寸
            var $price = res.shoppingCart[i].price; //单价
            var $subtotal = res.shoppingCart[i].subtotal; //小计
            var $goods = $('<div class="goods"><img src=' + $url + ' alt=""><div class="massage"><b>' + $brand + '</b><p>' + $title + '</p><span>' + $size + '</span></div><div class="price"><em>￥</em><span>' + $price + '</span></div><div class="number"><p><b class="add" onselectstart="return false">+</b><b class="num">1</b><b class="reduce" onselectstart="return false">-</b></p></div><div class="discount"></div><div class="subtotal"><em>￥</em><span>' + $subtotal + '</span></div><div class="delete"><img src="../images/delete.jpg" alt=""></div></div>');
            $('#cart').append($goods);
        }
        changePrice(); //进入购物袋让总价显示（不为0）；
        changeColor(); //点击增减商品数量颜色变化;
        changeNum(); //增减商品数量
        deleteThis(); //点击删除清空该产品数据 并 删除此项;
        fn(res); //尾部添加id为0的这件商品
    })

})



function fn(res) { //尾部添加id为0的这件商品
    //获取cookie 的 id
    var id = $.cookie('id');
    //console.log(id);
    var $id = res.shoppingCart[id].id; //该商品的id
    var $url = res.shoppingCart[id].url; //图片
    var $brand = res.shoppingCart[id].brand; //品牌
    var $title = res.shoppingCart[id].title; //标题
    var $size = res.shoppingCart[id].size; //尺寸
    var $price = res.shoppingCart[id].price; //单价
    var $subtotal = res.shoppingCart[id].subtotal; //小计
    var $goods = $('<div class="goods"><img src=' + $url + ' alt=""><div class="massage"><b>' + $brand + '</b><p>' + $title + '</p><span>' + $size + '</span></div><div class="price"><em>￥</em><span>' + $price + '</span></div><div class="number"><p><b class="add" onselectstart="return false">+</b><b class="num">1</b><b class="reduce" onselectstart="return false">-</b></p></div><div class="discount"></div><div class="subtotal"><em>￥</em><span>' + $subtotal + '</span></div><div class="delete"><img src="../images/delete.jpg" alt=""></div></div>');
    $('#cart').append($goods);
    changePrice(); //进入购物袋让总价显示（不为0）；
    changeColor(); //点击增减商品数量颜色变化;
    changeNum(); //增减商品数量
    deleteThis(); //点击删除清空该产品数据 并 删除此项;
} //尾部添加id为0的这件商品
function changePrice() { //价钱随点击加减或删除 而改变事件；
    var allprice = 0;
    var alltotal = 0;
    //总价==商品的数量（i）*商品的单价(i)
    for (var i = 0; i < $('.goods').length; i++) {
        allprice = parseInt($('.num').eq(i).html()) * parseInt($('.price>span').eq(i).html());
        alltotal = alltotal + allprice;
    }
    $('#alltotal').html(alltotal);
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
            $('#alltotal').html(alltotal);
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
        $('#alltotal').html(alltotal);
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