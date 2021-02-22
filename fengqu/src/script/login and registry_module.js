import { } from 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js'
const $userName = $('#username')
const $tel = $('#tel')
const $password = $('#password')
const $zcbtn = $('.zcym button')
const $gspan = $('.zcym li span')
const $login = $('.loginym')
const $zc = $('.zcym')
const $mask = $('.mask')
const $zcclose = $('.zcym .close')
const $loginclose = $('.loginym .close')
const $go = $('.login span')
const $loginuser = $('.loginym #dluser')
const $loginps = $('.loginym #dlmm')
const $dlspan = $('.loginym li span')
const $dlbtn = $('.loginym button')
let $userNameflag = false
let $telflag = false
let $passwordflag = false
let $samename = true
/* 开始隐藏欢迎和退出 */
$go.eq(3).hide()
$go.eq(4).hide()
/* 退出按钮 */
$go.eq(4).on('click', function () {
    $go.eq(1).show()
    $go.eq(2).show()
    $go.eq(3).hide()
    $go.eq(4).hide()
    $('.loginym input').val('')
    $('.zcym input').val('')
})
/* 跳转登录 */
$('.zcym a').on('click', function () {
    $login.show()
    $zc.hide()
    $('.loginym input').val('')
    $('.zcym input').val('')

})
/* 跳转注册 */
$('.loginym a').on('click', function () {
    $zc.show()
    $login.hide()
    $('.loginym input').val('')
    $('.zcym input').val('')

})
/* 点击登录 */
$go.eq(1).on('click', function () {
    $mask.show()
    $login.show()
})
/* 点击注册 */
$go.eq(2).on('click', function () {
    $mask.show()
    $zc.show()
})
/* 关闭注册 */
$zcclose.on('click', function () {
    $mask.hide()
    $zc.hide()
    $('.loginym input').val('')
    $('.zcym input').val('')
    $gspan.eq(0).html('')
    $gspan.eq(1).html('')

})
/* 关闭登录 */
$loginclose.on('click', function () {
    $mask.hide()
    $login.hide()
    $('.loginym input').val('')
    $('.zcym input').val('')
 
})
/* 提交注册信息按钮 */
$zcbtn.on('click', function () {
    if ($tel.val() == '') {
        $gspan.eq(0).html('请输入你的手机号码')
        $gspan.eq(0).css('color', 'red')
    }
    if ($passwordflag == false) {
        $gspan.eq(2).html('密码请设置6-18位字母、数字或标点符号')
        $gspan.eq(2).css('color', 'red')
    }
    if ($userNameflag == true && $telflag == true && $passwordflag == true) {
        $login.show()
        $zc.hide()
        $.ajax({
            url: 'http://10.31.165.30/2012/fengqu/php/registry.php',
            data: {
                username: $userName.val(),
                tel: $tel.val(),
                password: $password.val(),
            },
            type: 'post'
        })
        /* 重置标记 */
        $userNameflag = false
        $telflag = false
        $passwordflag = false
    }

})
/* 表单验证 */
$userName.on('focus', function () {
    $gspan.eq(1).html('')
})
/* 重名检测 */
$userName.on('input', function () {
    $.ajax({
        url: 'http://10.31.165.30/2012/fengqu/php/registry.php',
        data: {
            checkname: $userName.val()
        },
        type: 'post'
    }).done(function (data) {
        if (data == 'true') {
            $gspan.eq(1).html('用户名已存在')
            $gspan.eq(1).css('color', 'red')
            $samename = false
        }
    })
})
$userName.on('blur', function () {
    if ($samename) {
        if ($userName.val() !== '') {
            if ($userName.val().replace(/[\u4e00-\u9fa5]/g, '**').length <= 14) {
                if (/^[a-zA-Z\u4e00-\u9fa5]+$/g.test(this.value) == true) {
                    $gspan.eq(1).html('√')
                    $gspan.eq(1).css('color', 'green')

                } else {
                    $gspan.eq(1).html('用户名只能由英文和汉字构成')
                    $gspan.eq(1).css('color', 'red')
                }
            } else {
                $gspan.eq(1).html('用户名过长')
                $gspan.eq(1).css('color', 'red')

            }
        } else {
            $gspan.eq(1).html('用户名不能为空')
            $gspan.eq(1).css('color', 'red')
        }
    }
}
)
$tel.on('focus', function () {
    $gspan.eq(0).html('')
})
$tel.on('blur', function () {
    if ($tel.val() !== '') {
        if (/^1[3578]\d{9}$/.test(this.value) == true) {
            $gspan.eq(0).html('√')
            $gspan.eq(0).css('color', 'green')
            $telflag = true
        } else {
            $gspan.eq(0).html('您的手机号码格式有误')
            $gspan.eq(0).css('color', 'red')
        }
    } else {
        $gspan.eq(0).html('请输入你的手机号码')
        $gspan.eq(0).css('color', 'red')
    }
})
$password.on('focus', function () { $gspan.eq(2).html('') })
$password.on('input', function () {
    if (/[\w_]+/.test($password.val()) == true && $password.val().length > 6 && $password.val().length < 18) {
        $passwordflag = true
    }
})
$password.on('blur', function () {
    if ($password.value == '') {
        $gspan.eq(2).html('密码不能为空')
        $gspan.eq(2).css('color', 'red')
    }
})
/* 登录界面 */
/* 判断用户名是否为空 */
$loginuser.on('blur', function () {
    if ($loginuser.val() == '') {
        $dlspan.eq(0).html('请输入丰趣海淘帐号')
        $dlspan.eq(0).css('color', 'red')
    }
})
/* 提交登录信息 */
$dlbtn.on('click', function () {
    $.ajax({
        url: 'http://10.31.165.30/2012/fengqu/php/login.php',
        type: 'post',
        data: {
            user: $loginuser.val(),
            pass: $loginps.val()
        }
    }).done(function (data) {
        if (data === 'true') {
            window.localStorage.setItem('username', $loginuser.val())
            $go.eq(1).hide()
            $go.eq(2).hide()
            $go.eq(3).html('欢迎回来,' + window.localStorage.getItem('username'))
            $go.eq(3).show()
            $go.eq(4).show()
            $mask.hide()
            $login.hide()
        } else {
            $dlspan.eq(1).html('密码错误')
            $dlspan.eq(1).css('color', 'red')
            password.value = ''
        }
    })
})
if(window.localStorage.getItem('username')){
            $go.eq(1).hide()
            $go.eq(2).hide()
            $go.eq(3).html('欢迎回来,' + window.localStorage.getItem('username'))
            $go.eq(3).show()
            $go.eq(4).show()
}