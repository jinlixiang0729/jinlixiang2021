import { } from 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js'
let $id = window.location.search.substr(1).split('=')[1]
const $spic = $('.goodimg')
const $sf = $('.sf')
const $bf = $('.df')
const $bpic = $('.dt')
const $goodimg = $('.goodimg1')

if (!$id) { $id = 1 }
const $goodmsg = $('.goodmsg')
const $smallpic = $('.good1 ul')
$.ajax({
    url: 'http://10.31.165.30/2012/fengqu/php/getsid.php',
    data: { 'datasid': $id },
    dataType: 'json'
}).done(function (data) {
    $goodmsg.html(data.title)
    $(".goodimg").attr("src", data.picurl);
    $(".dt").attr("src", data.picurl);
    $('#titleInfo h1').html(data.title)
    $('.brand').html(data.brand)
    $('.nowprice').html(data.price)
    $('.preprice').html(data.lastprice)
    let $picarr = data.piclisturl.split(',');
    let $piclstr = ''
    $.each($picarr, function (index, value) {
        $piclstr += `
            <li>
                <img src='${value}'
            </li>       `
    })
    $smallpic.html($piclstr)
    $('.good ul li').on('click', function () {
        let $src = $(this).find('img').attr('src')
        $(".goodimg").attr("src", $src)
        $(".dt").attr("src", $src)
    })
})
$goodimg.hover(function () {

    //3.2.计算小放的尺寸和比例
    $sf.width($spic.outerWidth() * $bf.outerWidth() / $bpic.outerWidth());
    $sf.height($spic.outerHeight() * $bf.outerHeight() / $bpic.outerHeight());
    let $bili = $bpic.outerWidth() / $spic.outerWidth(); //比例
    $spic.css('visibility', 'hidden');
    $bf.css('visibility', 'visible');
    //3.3.鼠标在小图里面移动，小放跟随鼠标
    $goodimg.on('mousemove', function (ev) {
        let $leftvalue = ev.pageX - $spic.offset().left - $sf.outerWidth() / 2;
        let $topvalue = ev.pageY - $spic.offset().top - $sf.outerHeight() / 2;
        if ($leftvalue < 0) {
            $leftvalue = 0;
        } else if ($leftvalue >= $spic.outerWidth() - $sf.outerWidth()) {
            $leftvalue = $spic.outerWidth() - $sf.outerWidth();
        }

        if ($topvalue < 0) {
            $topvalue = 0;
        } else if ($topvalue >= $spic.outerHeight() - $sf.outerHeight()) {
            $topvalue = $spic.outerHeight() - $sf.outerHeight();
        }

        $sf.css({
            left: $leftvalue,
            top: $topvalue
        });

        $bpic.css({
            left: -$bili * $leftvalue,
            top: -$bili * $topvalue
        });
    });
}, function () {
    $spic.css('visibility', 'visible');
    $bf.css('visibility', 'hidden');
});
/* 加入购物车 */
let $goodarr = []
let $numarr = []
const $count = $('.count')
function getlocal() {
    if (localStorage.getItem('goodmsg') && localStorage.getItem('nummsg')) {
        $goodarr = localStorage.getItem('goodmsg').split(',')
        $numarr = localStorage.getItem('nummsg').split(',')
    }
    else {
        $goodarr = []
        $numarr = []
    }
}
$('.addcart').on('click', function () {
    let $countval = $count.val()
    
    if (/^[0-9]*$/.test($countval)) {
        getlocal()
        if ($goodarr.includes($id)) {
            let $index = $goodarr.indexOf($id);
            $numarr[$index] = parseInt($numarr[$index]) + parseInt($count.val());
         

            localStorage.setItem('nummsg', $numarr);
        }
        else {
            $goodarr.push($id);
            localStorage.setItem('goodmsg', $goodarr);
            $numarr.push($count.val());
            localStorage.setItem('nummsg', $numarr);
        }
    }
    else{
        alert('请输入数字')
    }

})