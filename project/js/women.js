$(function () {
    countdown(); //倒计时
    loadImg(16); //分页效果
    $('.shopping_quantity').click(function () {
        window.location.href = "bag.html"
    })
})


function loadImg(Num) { //分页效果
    $.ajax({
        url: '../data/women.json',
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            //console.log(res); //确认是否获取
            var showNum = Math.ceil(res.length / Num)
            $('#Pagination').pagination(showNum, {
                num_edge_entries: 1, //边缘页数
                num_display_entries: 4, //主题页数
                items_per_page: 1, //每页显示1项
                prev_text: "上一页", //上一页
                next_text: "下一页", //下一页
                callback: function (pagaIndex) {
                    var html = '<div>';
                    for (var i = pagaIndex * Num; i < (pagaIndex + 1) * Num; i++) {
                        if (i < res.length) {
                            var $id=res[i].id;
                            var $url = res[i].url;
                            var $brand = res[i].brand;
                            var $title = res[i].title;
                            var $price = res[i].price;
                            var $delete = res[i].delete;
                            var $size1 = res[i].size1;
                            var $size2 = res[i].size2;
                            var $size3 = res[i].size3;
                            var $size4 = res[i].size4;
                            var $size5 = res[i].size5;
                            html += '<div class="coat" id='+$id+'>';
                            html += '<img src=' + $url + ' alt="">';
                            html += '<h3>' + $brand + '</h3>';
                            html += '<p>' + $title + '</p>';
                            html += '<div>';
                            html += '<span class="price">￥<em>' + $price + '</em></span>';
                            html += '<span class="delete">￥<em>' + $delete + '</em></span>';
                            html += '</div>';
                            html += '<div class="recommend">买手推荐</div>';
                            html += '<div class="mask">';
                            html += '<ul class="size">';
                            html += '<li>' + $size1 + '</li>';
                            html += '<li>' + $size2 + '</li>';
                            html += '<li>' + $size3 + '</li>';
                            html += '<li>' + $size4 + '</li>';
                            html += '<li>' + $size5 + '</li>';
                            html += '</ul>';
                            html += '</div>';
                            html += '</div>';
                        }
                    }
                    html += '</div>';
                    $('#list').html(html);
                    mask(); //移入蒙板事件；
                    $('.coat>img').click(function () {
                        //1.取值
                        var id = $('.coat').attr('id');
                        console.log(id);
                        //2.存储cookie
                        $.cookie('id', id, {
                            path: "/"
                        });
                        //页面跳转；
                        window.location.href = "details.html"
                    })
                }
            })
        }
    })
} //分页效果

function mask() { //移入蒙板事件；
    var $size = $('.size>li');
    $size.click(function () {
        $(this).css({
            'background': '#000000',
            'color': '#ffffff'
        }).siblings('li').css({
            'background': '#ffffff',
            'color': '#000000'
        })
    })

    var $img = $('.coat>img');
    $img.hover(function () {
        $(this).siblings('.mask').css('display', 'block');
    }, function () {
        $(this).siblings('.mask').css('display', 'none');
    })
    $('.mask').hover(function () {
        $(this).css('display', 'block');
    }, function () {
        $(this).css('display', 'none');
    })
} //移入蒙板事件；



function countdown() { //倒计时
    var date = new Date();
    var date2 = new Date('2016/10/01 00:00:00');
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
} //倒计时