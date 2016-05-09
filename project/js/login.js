$(function () {
    from(); //表单事件

})

function from() { //表单事件开始；
    var $name = $('#name');
    var $password = $('#password');
    var $verification = $('#verification');
    var $random = $('#random');
    var $submit = $('#submit');
    logins()
    $name.blur(function () { //用户名失去焦点；
            if ($(this).val() != '854290782@qq.com') {
                $(this).parent().css('height', '50px');
                $(this).siblings('p').css('display', 'block');
            }


        }) //用户名失去焦点；
    $password.blur(function () { //密码失去焦点；
            if ($(this).val() != 'a111111') {
                $(this).parent().css('height', '50px');
                $(this).siblings('p').css('display', 'block');
            }

        }) //密码失去焦点；
    function random() { //随机验证码获取；
        var str = '';
        for (var i = 0; i < 4;) {
            var n = Math.floor(Math.random() * 75 + 48);
            if (n <= 57 || n >= 65 && n <= 90 || n >= 97) {
                str = str + String.fromCharCode(n);
                i++;
            }
        }
        return str;
    } //随机验证码获取；
    $random.val(random()); //页面一打开就获取验证码；
    $random.click(function () { //点击更换验证码；
            $(this).val(random());
        }) //点击更换验证码；
    $name.focus(function () { //用户名获取焦点；
            $(this).parent().css('height', '30px');
            $(this).siblings('p').css('display', 'none');
            $password.parent().css('height', '30px');
            $password.siblings('p').css('display', 'none');
            $verification.parent().css('height', '30px');
            $verification.siblings('p').css('display', 'none');
        }) //用户名获取焦点；
    $password.focus(function () { //密码获取焦点；
            $(this).parent().css('height', '30px');
            $(this).siblings('p').css('display', 'none');
            $name.parent().css('height', '30px');
            $name.siblings('p').css('display', 'none');
            $verification.parent().css('height', '30px');
            $verification.siblings('p').css('display', 'none');
        }) //密码获取焦点；
    $verification.focus(function () { //验证码获取焦点；
            $(this).parent().css('height', '30px');
            $(this).siblings('p').css('display', 'none');
            $name.parent().css('height', '30px');
            $name.siblings('p').css('display', 'none');
            $password.parent().css('height', '30px');
            $password.siblings('p').css('display', 'none');
        }) //验证码获取焦点；



    $verification.blur(function () { //验证码失去焦点；
            //console.log($(this).val()[1].toLowerCase());
            //输入的验证码转小写
            var str2 = '';
            for (var i = 0; i < $verification.val().length; i++) {
                if ($verification.val()[i].toLowerCase() == $verification.val()[i]) {
                    str2 += $verification.val()[i];
                } else {
                    str2 += $verification.val()[i].toLowerCase();
                }
            }
            //console.log(str2);
            //随机获取的验证码转小写
            var str3 = '';
            for (var i = 0; i < $random.val().length; i++) {
                if ($random.val()[i].toLowerCase() == $random.val()[i]) {
                    str3 += $random.val()[i];
                } else {
                    str3 += $random.val()[i].toLowerCase();
                }
            }
            //console.log(str3);
            //判断输入验证码的和获取的验证码是否一致；

            if (str2 == str3) {
                $(this).parent().css('height', '30px');
                $(this).siblings('p').css('display', 'none');
                $(this).siblings('.yes').find('img').show();

                logins(); //验证码失去焦点时执行登录事件;

            } else {
                $(this).parent().css('height', '50px');
                $(this).siblings('p').css('display', 'block');
                $(this).siblings('.yes').find('img').hide();

            }

        }) //验证码失去焦点结束；
    function logins() { //登录跳转事件开始
        $submit.click(function () {
            $.ajaxSetup({
                url: '../form.php',
                type: 'GET',
                data: {
                    name: $name.val(),
                    password: $password.val()
                }
                //data: $('form').serialize()
            })
            $.ajax({
                success: function (res) {
                    login(res);
                }
            })

        })

        function login(res) {
            if (res == 0) {
                setTimeout(function () {
                    window.location.href = "../index.html";
                    $verification.val('');
                }, 1000)

            } else {
                alert('请填写信息')
            }
        }
    } //登录跳转事件结束



} //表单事件结束；