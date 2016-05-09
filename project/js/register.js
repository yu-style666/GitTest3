$(function () {
    from2(); //表单事件
})

function from2() { //表单事件开始；
    var $name = $('#name');
    var $password = $('#password');
    var $password2 = $('#password2');
    var $verification = $('#verification');
    var $massage = $('#verification2')
    var $random = $('#random');
    var $submit = $('#submit');
    var regEmail = /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/; //邮箱或手机号
    var regPassword = /^[a-zA-Z]\w{4,20}$/; //字母开头5-17位
    var regNum = /^\d{6}$/;
    $name.blur(function () { //用户名失去焦点；
            if (regEmail.test($(this).val()) == false) {
                $(this).parent().css('height', '50px');
                $(this).siblings('p').show();
            } else {
                $(this).parent().css('height', '30px');
                $(this).siblings('p').hide();
                $(this).siblings('.yes').find('img').show();
            }
        }) //用户名失去焦点；
    $password.blur(function () { //密码失去焦点；
            if (regPassword.test($(this).val()) == false) {
                $(this).parent().css('height', '50px');
                $(this).siblings('p').show();
                $(this).val('');
            } else {
                $(this).parent().css('height', '30px');
                $(this).siblings('p').hide();
                $(this).siblings('.yes').find('img').show();
            }
            $password2.blur(function () { //确认密码失去焦点
                    if ($(this).val().length > 0) { //密码长度大于0
                        if ($(this).val() == $password.val()) {
                            $(this).parent().css('height', '30px');
                            $(this).siblings('p').hide();
                            $(this).siblings('.yes').find('img').show();
                        } else {
                            $(this).siblings('.yes').find('img').hide();
                            $(this).parent().css('height', '50px');
                            $(this).siblings('p').show();
                        }
                    } else {
                        $(this).siblings('.yes').find('img').hide();
                        $(this).parent().css('height', '50px');
                        $(this).siblings('p').show();
                    }

                }) //确认密码失去焦点；

        }) //密码失去焦点；

    $massage.blur(function () { //短信验证失去焦点；
            if (regNum.test($(this).val()) == true) {
                $(this).siblings('.yes').find('img').show();
                $(this).parent().css('height', '30px');
                $(this).siblings('p').hide();
            } else {
                $(this).parent().css('height', '50px');
                $(this).siblings('p').show();
                $(this).siblings('.yes').find('img').hide();
            }
        }) //短信验证失去焦点；


    $name.focus(function () { //用户名获取焦点；
            $(this).parent().css('height', '30px');
            $(this).siblings('p').hide();
            $(this).siblings('.yes').find('img').hide();
            $password.parent().css('height', '30px');
            $password.siblings('p').hide();
            $verification.parent().css('height', '30px');
            $verification.siblings('p').hide();
            $password2.parent().css('height', '30px');
            $password2.siblings('p').hide();
            $massage.parent().css('height', '30px');
            $massage.siblings('p').hide();
        }) //用户名获取焦点；
    $password.focus(function () { //密码获取焦点；
            $(this).parent().css('height', '30px');
            $(this).siblings('p').hide();
            $(this).siblings('.yes').find('img').hide();
            $name.parent().css('height', '30px');
            $name.siblings('p').hide();
            $verification.parent().css('height', '30px');
            $verification.siblings('p').hide();
            $password2.parent().css('height', '30px');
            $password2.siblings('p').hide();
            $massage.parent().css('height', '30px');
            $massage.siblings('p').hide();
        }) //密码获取焦点；
    $password2.focus(function () { //再次确认获取焦点；
            $(this).parent().css('height', '30px');
            $(this).siblings('p').hide();
            $(this).siblings('.yes').find('img').hide();
            $password.parent().css('height', '30px');
            $password.siblings('p').hide();
            $name.parent().css('height', '30px');
            $name.siblings('p').hide();
            $verification.parent().css('height', '30px');
            $verification.siblings('p').hide();
            $massage.parent().css('height', '30px');
            $massage.siblings('p').hide();
        }) //挨次确认获取焦点；
    $verification.focus(function () { //验证码获取焦点；
            $(this).parent().css('height', '30px');
            $(this).siblings('p').hide();
            $(this).siblings('.yes').find('img').hide();
            $password.parent().css('height', '30px');
            $password.siblings('p').hide();
            $name.parent().css('height', '30px');
            $name.siblings('p').hide();
            $password2.parent().css('height', '30px');
            $password2.siblings('p').hide();
            $massage.parent().css('height', '30px');
            $massage.siblings('p').hide();
            str2 = '';
            str3 = '';
        }) //验证码获取焦点；
    $massage.focus(function () { //短信验证码获取焦点；
            $(this).parent().css('height', '30px');
            $(this).siblings('p').hide();
            $(this).siblings('.yes').find('img').hide();
            $password.parent().css('height', '30px');
            $password.siblings('p').hide();
            $name.parent().css('height', '30px');
            $name.siblings('p').hide();
            $password2.parent().css('height', '30px');
            $password2.siblings('p').hide();
            $verification.parent().css('height', '30px');
            $verification.siblings('p').hide();
        }) //短信验证码获取焦点；









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
    var str2 = '';
    var str3 = '';
    $verification.blur(function () { //验证码失去焦点；
            //console.log($(this).val()[1].toLowerCase());
            //输入的验证码转小写

            for (var i = 0; i < $verification.val().length; i++) {
                if ($verification.val()[i].toLowerCase() == $verification.val()[i]) {
                    str2 += $verification.val()[i];
                } else {
                    str2 += $verification.val()[i].toLowerCase();
                }
            }
            //console.log(str2);
            //随机获取的验证码转小写

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
                $verification.siblings('.yes').find('img').css('display', 'block');

            } else {
                $(this).parent().css('height', '50px');
                $(this).siblings('p').css('display', 'block');
                $verification.siblings('.yes').find('img').css('display', 'none');

            }
        }) //验证码失去焦点结束；


    $submit.click(function () {
        if (regEmail.test($name.val()) == true && regPassword.test($password.val()) == true && $password2.val() == $password.val() && regNum.test($massage.val()) == true &&str2==str3) {
            alert('注册成功，请登录！')
            setTimeout(function(){
                window.location.href="../index.html"
            },2000)
            
            
        } else {
            alert('请填写完整')
        }
    })


} //表单事件结束；