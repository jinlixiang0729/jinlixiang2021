import { } from 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js'
/* 渲染首页 */
const $render1 = $('.render1')
const $render2 = $('.render2')
const $render3 = $('.render3')
const $render4 = $('.render4')
const $render5 = $('.render5')
const $render6 = $('.render6')
$.ajax({
    url: 'http://10.31.165.30//2012/fengqu/php/alldata.php',
    dataType: 'json'
}).done(function (data) {
    let str1 = ''
    let str2 = ''
    let str3 = ''
    let str4 = ''
    let str5 = ''
    let str6 = ''
    $.each(data, function (index, value) {
        if (index < 6) {
            str1 += `
        <li>
        <a href="">
            <img src="${value.picurl}" alt="">
        </a>
        <h3>
            ${value.title}
        </h3>
        <div class="price">
            <span>￥</span>
            <strong>${value.price}</strong>
            <del>
                <em>￥</em>
                <i>${value.lastprice}</i>
            </del>

        </div>
    </li>
        `
        }
        else if (index < 11 && index >= 6) {
            console.log(index);

            str2 += `
            <li>
                <a href="#">
                     <img src="${value.picurl}" alt="">
                        <div class="text">
                            <h4>${value.title}</h4>
                            <div class="price">
                                <span>￥</span>
                                <strong>${value.price}</strong>
                                <del>
                                    <em>￥</em>
                                    <i>${value.lastprice}</i>
                                </del>
                            </div>
                        </div>
                </a>
            </li>
            `
        }
        else if (index < 17 && index >= 11) {
            str3 += `
        <li>
        <a href="">
            <img src="${value.picurl}" alt="">
        </a>
        <h3>
            ${value.title}
        </h3>
        <div class="price">
            <span>￥</span>
            <strong>${value.price}</strong>
            <del>
                <em>￥</em>
                <i>${value.lastprice}</i>
            </del>

        </div>
    </li>
        `
        }
        else if (index < 22 && index >= 17) {
            console.log(index);

            str4 += `
            <li>
                <a href="#">
                     <img src="${value.picurl}" alt="">
                        <div class="text">
                            <h4>${value.title}</h4>
                            <div class="price">
                                <span>￥</span>
                                <strong>${value.price}</strong>
                                <del>
                                    <em>￥</em>
                                    <i>${value.lastprice}</i>
                                </del>
                            </div>
                        </div>
                </a>
            </li>
            `
        }
        else if (index < 28 && index >= 22) {
            str5 += `
        <li>
        <a href="">
            <img src="${value.picurl}" alt="">
        </a>
        <h3>
            ${value.title}
        </h3>
        <div class="price">
            <span>￥</span>
            <strong>${value.price}</strong>
            <del>
                <em>￥</em>
                <i>${value.lastprice}</i>
            </del>

        </div>
    </li>
        `
        }
        else if (index < 33 && index >= 28) {
            console.log(index);

            str6 += `
            <li>
                <a href="#">
                     <img src="${value.picurl}" alt="">
                        <div class="text">
                            <h4>${value.title}</h4>
                            <div class="price">
                                <span>￥</span>
                                <strong>${value.price}</strong>
                                <del>
                                    <em>￥</em>
                                    <i>${value.lastprice}</i>
                                </del>
                            </div>
                        </div>
                </a>
            </li>
            `
        }
    })
    $render1.html(str1)
    $render2.html(str2)
    $render3.html(str3)
    $render4.html(str4)
    $render5.html(str5)
    $render6.html(str6)
})
/* 回到顶部 */
const $btntop=$('.btn-top')
$(window).on('scroll',function(){
    let $top = $(window).scrollTop();
    if($top>=150){
       $btntop.show()
    }
    else{
        $btntop.hide()
    }
})
$btntop.on('click',function(){
    $('html').animate({
        scrollTop: 0
    });
})
