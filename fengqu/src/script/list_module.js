import {} from 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js'
import {} from './jquery.lazyload.js'
import {} from './jquery.pagination.js'
const $mainul = $('.maincontent ul')
let $arr = []
let $arrbegin = []
let $goodarr = []
let $numarr = []

function getlocal() {
    if (localStorage.getItem('goodmsg') && localStorage.getItem('nummsg')) {
        $goodarr = localStorage.getItem('goodmsg').split(',')
        $numarr = localStorage.getItem('nummsg').split(',')
    } else {
        $goodarr = []
        $numarr = []
    }
}

function addpwx() {
    $('.maincontent li button').each(function() {
        $(this).on('click', function(event) {
            /* 本地存储 */
            let $id = $(this).parent().parent().parent().attr('iddata');
            getlocal()
            if ($goodarr.includes($id)) {
                let $index = $goodarr.indexOf($id);
                $numarr[$index] = parseInt($numarr[$index]) + 1;
                localStorage.setItem('nummsg', $numarr);
            } else {
                $goodarr.push($id);
                localStorage.setItem('goodmsg', $goodarr);
                $numarr.push(1);
                localStorage.setItem('nummsg', $numarr);
                /* 抛物线效果 */

                let $box1 = $(this).parent().parent().find('p')
                let $box2 = $('.gocart')
                let $timer = null
                let $speedx = 0;
                $box1.css({
                    'left': event.pageX - $(window).scrollLeft() - 200,
                    'position': 'fixed',
                    'top': event.pageY - $(window).scrollTop() - 22,
                    'display': 'block'
                })
                let $box1position = {
                    x: event.pageX - $(window).scrollLeft() - 200,
                    y: event.pageY - $(window).scrollTop() - 22
                }
                let $box2position = {
                    x: $box2.offset().left - $(window).scrollLeft(),
                    y: $box2.offset().top - $(window).scrollTop()
                }
                console.log($box2position.x);


                let $a = 0.001;
                let $b = ($box2position.y - $box1position.y - $a * ($box2position.x - $box1position.x) * ($box2position.x - $box1position.x)) / ($box2position.x - $box1position.x)

                clearInterval($timer)
                $timer = setInterval(() => {
                    $speedx += 5
                    let $x = $box1position.x + $speedx
                    let $y = $box1position.y + $a * $speedx * $speedx + $b * $speedx

                    if ($box1position.x + $speedx >= $box2position.x) {
                        $box1.css('left', $box2position.x)
                        $box1.css('top', $box2position.y)
                        $box1.css('display', 'none')
                        clearInterval($timer)
                    } else {
                        $box1.css('left', $box1position.x + $speedx)
                        $box1.css('top', $box1position.y + $a * $speedx * $speedx + $b * $speedx)
                    }

                }, 1000 / 120)
            }
            return false
        })

    })
}
/* 渲染页面 */
$.ajax({
    url: 'http://10.31.165.30/2012/fengqu/php/list.php',
    dataType: 'json'
}).done(function(data) {
    let $pagenum = data.pagesize;
    let $pagecontent = data.pagecontent;
    let str = ''
    $.each($pagecontent, function(index, value) {
        str += `
            <li iddata=${value.sid}>
                <a href='detail.html?sid=${value.sid}' target="_blank">
                    <img class='lazy' data-original="${value.picurl}" alt="" width="200" height="200">
                    <h3>${value.title}</h3>
                    <div>
                    <em>￥</em>
                    <span>${value.price}</span>
                    <i>${value.lastprice}</i>
                    <button>加入购物车</button>
                    </div>
                    <p>
                        <img src="${value.picurl}">
                    </p>
                </a>
            </li>
        `
    })
    $mainul.html(str)
    addpwx()
    $('.maincontent li').each(function(index, element) {
        $arr[index] = $(this)
        $arrbegin[index] = $(this)
    })
    $('img.lazy').lazyload({
        effect: "fadeIn" //切换形式
    });
    /* 分页效果 */
    $('.page').pagination({
        pageCount: $pagenum, //总的页数
        jump: true, //是否开启跳转到指定的页数，布尔值。
        prevContent: '上一页', //将图标改成上一页下一页。
        nextContent: '下一页',
        callback: function(api) {
            // console.log(api.getCurrent())
            $.ajax({
                url: 'http://192.168.10.8/2012/fengqu/php/list.php',
                data: { page: api.getCurrent() },
                dataType: 'json'
            }).done(function(data) {
                $pagenum = data.pagesize;
                $pagecontent = data.pagecontent;
                str = ''
                $.each($pagecontent, function(index, value) {
                    str += `
            <li>
                <a href='detail.html?sid=${value.sid}' target="_blank">
                <img class='lazy' data-original="${value.picurl}" alt="" width="200" height="200">
                    <h3>${value.title}</h3>
                    <div>
                    <em>￥</em>
                    <span>${value.price}</span>
                    <i>${value.lastprice}</i>
                    <button>加入购物车</button>
                    </div>
                    <p>
                        <img src="${value.picurl}">
                    </p>
                </a>
            </li>
        `
                })
                $mainul.html(str)
                addpwx()

                $('img.lazy').lazyload({
                    effect: "fadeIn" //切换形式
                });
                $arr = []
                $arrbegin = []
                $('.maincontent li').each(function(index, element) {
                    $arr[index] = $(this)
                    $arrbegin[index] = $(this)
                })
            })
        }
    })
})
$('#sort-price').on('click', function() {
    for (let i = 0; i < $arr.length - 1; i++) {
        for (let j = 0; j < $arr.length - i - 1; j++) {
            if (parseFloat($arr[j].find('span').html()) > parseFloat($arr[j + 1].find('span').html())) {
                let temp = $arr[j]
                $arr[j] = $arr[j + 1]
                $arr[j + 1] = temp
            }
        }
    }
    $.each($arr, function(index, value) { //value:每一个li元素
        $mainul.append(value); //append相当于appendChild,逐个追加
    });
    addpwx()
})
$('#begin-price').on('click', function() {
    $.each($arrbegin, function(index, value) { //value:每一个li元素
        $mainul.append(value); //append相当于appendChild,逐个追加
    });
    addpwx()
})