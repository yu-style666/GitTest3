//alert(0)//确保成功引入
window.onload = function () {
    var mag = new magnifier({
        'id': 'magnifier', //大盒子id
        'scal': 2, //倍率；
        'boxWidth': 396, //主盒子宽度
        'boxHeight': 454, //主盒子高度
        'ballBg': 'rgba(255, 255, 255, 0.5)', //滤镜颜色
        'url': '../images/big0.jpg', //图片路径；
        'ball': 'ball', //滤镜id；
        'bigImg': 'img1' //右大图片id名；
    })
}
$(function () {
    tab(); //点击换图
    changeNum(); //商品数量的加减;
    countdown(); //倒计时
    //尺寸的点击变色;
    $('.shopping_quantity').click(function () {
        window.location.href = "bag.html"
    })
    
    
    $('.go>a').click(function () {
        window.location.href = "bag.html"
    })

var $size = $('.size');
$size.find('li').click(function () {
        $(this).css({
            'background': '#000000',
            'color': 'red'
        }).siblings('li').css({
            'background': '#ffffff',
            'color': '#000000'
        })
    })
    //放大镜
var $magnifier = $('#magnifier');

$magnifier.mouseover(function () {
    $('.pic_msg').css('display', 'none')
})
$magnifier.mouseout(function () {
    $('.pic_msg').css('display', 'block')
});

//小图滑入 大图随之改变 ；
var $lis = $('.pics>li');
var $src = $lis.find('img').attr('src');
//console.log($('.pics').find('img').attr('src'))
$lis.hover(function () {
//alert(0)
$('#magnifier').find('img').attr('src', $(this).find('img').attr('src'))
})



})
//点击换图
function tab() {
    var arrowLeft = document.getElementById('details_prev')
    var arrowRight = document.getElementById('details_next')
    var list2 = document.getElementsByClassName('pics')[0];
    var lis = list2.getElementsByTagName('li');
    //console.log(lis.length)
    var iNum = 1;
    arrowLeft.onclick = function () {
        for (var i = 0; i < iNum; i++) {
            list2.insertBefore(lis[lis.length - 1], lis[0]);
        }
    }
    arrowRight.onclick = function () {
        for (var i = 0; i < iNum; i++) {
            list2.appendChild(lis[0]);
        }
    }
}
//商品数量的加减
function changeNum() {
    var $reduce = $('#reduce');
    var $add = $('#add');
    var $num = $('.num');
    var n = 1;
    $reduce.click(function () {
        if (n > 1) {
            n--;
        }
        $num.html(n);
    })

    $add.click(function () {
            n++;
            $num.html(n);
        })
        //加减按钮点击时变色
    $reduce.mousedown(function () {
        $(this).css('background', 'blue');
    })
    $reduce.mouseup(function () {
        $(this).css('background', '');
    })
    $add.mousedown(function () {
        $(this).css('background', 'blue');
    })
    $add.mouseup(function () {
        $(this).css('background', '');
    })
}
//倒计时
function countdown() {
    var date = new Date();
    var date2 = new Date('2016/06/01 00:00:00');
    var t = date2 - date;
    var ts = Math.floor(t / 1000);
    var s = ts % 60;
    var m = Math.floor(ts / 60) % 60;
    var h = Math.floor(ts / 3600) % 24;
    var d = Math.floor(ts / (3600 * 24));
    var timer;
    if (d < 10) {
        $('#day').html('0' + d);
    } else {
        $('#day').html(d);
    }
    if (h < 10) {
        $('#hour').html('0' + h);
    } else {
        $('#hour').html(h);
    }
    if (m < 10) {
        $('#minute').html('0' + m);
    } else {
        $('#minute').html(m);
    }
    if (s < 10) {
        $('#second').html('0' + s);
    } else {
        $('#second').html(s);
    }
    if (ts <= 0) {
        clearInterval(timer);
        ts -= 0;
        $('#day').html("00");
        $('#hour').html("00");
        $('#minute').html("00");
        $('#second').html("00");
    }
    timer = setInterval(function () {
        ts--;
        s = ts % 60;
        m = Math.floor(ts / 60) % 60;
        h = Math.floor(ts / 3600) % 24;
        d = Math.floor(ts / (3600 * 24));
        if (d < 10) {
            $('#day').html('0' + d);
        } else {
            $('#day').html(d);
        }
        if (h < 10) {
            $('#hour').html('0' + h);
        } else {
            $('#hour').html(h);
        }
        if (m < 10) {
            $('#minute').html('0' + m);
        } else {
            $('#minute').html(m);
        }
        if (s < 10) {
            $('#second').html('0' + s);
        } else {
            $('#second').html(s);
        }
        if (ts <= 0) {
            clearInterval(timer);
            ts -= 0;
            $('#day').html("00");
            $('#hour').html("00");
            $('#minute').html("00");
            $('#second').html("00");
        }
    }, 1000)
}