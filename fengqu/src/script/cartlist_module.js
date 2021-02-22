
import { } from 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js';
if (localStorage.getItem('goodmsg') && localStorage.getItem('nummsg')) {
    let arrsid = localStorage.getItem('goodmsg').split(','); //编号  [1,2,3,4]
    let arrnum = localStorage.getItem('nummsg').split(','); //数量  [10,20,30,40]

    for (let i = 0; i < arrsid.length; i++) {
        renderList(arrsid[i], arrnum[i]); //sid:编号  num:数量。
    }
    /* 加减数量按钮 */
    /* 取出本地存储数据 */
    let $goodarr = []
    let $numarr = []

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
    $('.btn-num-reduce').on('click', function () {
        if ($(this).siblings('.num-input').val() - 1 > 0) {
            let num = $(this).siblings('.num-input').val() - 1
            $(this).siblings('.num-input').val(num)
            getlocal()
            let $id = $(this).siblings('.num-input').attr('dataid')
            let $index = $goodarr.indexOf($id);
            $numarr[$index] = parseInt(($numarr[$index]) - 1);
            localStorage.setItem('nummsg', $numarr)
            allprice()
        }
        else {
            $(this).siblings('.num-input').val('1')
        }
        return false
    })
    $('.btn-num-add ').on('click', function () {
        let num = parseInt($(this).siblings('.num-input').val()) + 1
        $(this).siblings('.num-input').val(num)
        getlocal()
        let $id = $(this).siblings('.num-input').attr('dataid')
        let $index = $goodarr.indexOf($id);
        $numarr[$index] = parseInt(parseInt(($numarr[$index])) + 1);
        localStorage.setItem('nummsg', $numarr)
        allprice()
        return false

    })

    $('.num-input').on('input', function () {
        let a = $(this).val()
        console.log(a);
        if (!(/^[0-9]+$/g.test(a))) {
            $(this).val('1')
        }
        getlocal()
        let $id = $(this).attr('dataid')
        let $index = $goodarr.indexOf($id);
        a = $(this).val()

        $numarr[$index] = parseInt(parseInt(a));
        localStorage.setItem('nummsg', $numarr)
        allprice()
    })
}

function renderList(sid, num) { //sid:编号  num:数量。
    $.ajax({
        url: 'http://10.31.165.30/2012/fengqu/php/alldata.php',
        dataType: 'json'
    }).done(function (data) {
        $.each(data, function (index, value) { //遍历数组和对象  index:数组索引  value:每一个数据-对象
            if (value.sid === sid) { //根据当前的sid找对应的数据
                let $clonebox = $('.mytr:hidden').clone(true, true);
                $clonebox.find('.td1 img').attr('src', value.picurl);
                $clonebox.find('.td1 input').attr('dataid', value.sid)
                $clonebox.find('.td2 a').html(value.title);
                $clonebox.find('.td3 strong').html(value.price);
                $clonebox.find('.td4 input').val(num);
                $clonebox.find('.td4 input').attr('dataid', value.sid)
                $clonebox.find('.td5 strong').html((value.price * num).toFixed(2));
                $clonebox.css('display', 'table-row'); //显示克隆的元素                                
                $('.mytody').append($clonebox); //追加

                allprice(); //计算总价
            }
        })
    });
}

function allprice() {
    let $allnum = 0; //存储商品的数量
    let $allprice = 0; //存储商品的总价
    $('.mytr:visible').each(function (index, element) { //遍历多个元素对象，index:索引   element:元素的元素对象。
        //$(this):当前操作的商品列表goods-item
        if ($(this).find('.sfcheckbox').prop('checked')) { //判断当前的商品列表前面的复选框是否是选中的
            $allnum += parseInt($(this).find('.num-input').val());
            $(this).find('.allprice').html($(this).find('.num-input').val() * $(this).find('strong').html())
            $allprice += parseInt($(this).find('.num-input').val() * $(this).find('strong').html());
        }
    });

    $('.haveselected').html($allnum); //赋值总的数量
    $('.s1 .text-error').html('￥' + $allprice); //赋值总的价格
}


//5.全选
$('.selectAll').on('click', function () {
    $('.mytr:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
    $('.selectAll').prop('checked', $(this).prop('checked'));
    allprice();
});


$('.mytody').on('click', 'input:checkbox', function () {
    if ($('.mytr:visible').find('input:checkbox').length === $('.mytr:visible').find('input:checked').length) {
        $('.selectAll').prop('checked', true);
    } else {
        $('.selectAll').prop('checked', false);
    }
    allprice();
});
/* 删除 */
$('.deleteSingleOrder').on('click', function () {
    let $this = $(this);
    if (window.confirm('你确定要删除吗?')) {
        $this.parents('.mytr').remove();
        delstorage($(this).parents('.mytr').find('.td4 input').attr('dataid'));
        allprice(); //计算总价

    }
    return false
});

$('#deletedSelectGoods').on('click', function () {
    if (window.confirm('你确定要删除吗?')) {
        $('.mytr:visible').each(function (index, element) {
            if ($(this).find('input:checkbox').is(':checked')) { //找到复选框，是否是选中的，如果是返回true
                $(this).remove();
                delstorage($(this).find('.td4 input').attr('dataid'));
                allprice(); //计算总价
            }
        });
    }
    return false
});
function delstorage(sid) {
    let $goodarr = []
    let $numarr = []
    if (localStorage.getItem('goodmsg') && localStorage.getItem('nummsg')) {
        $goodarr = localStorage.getItem('goodmsg').split(',')
        $numarr = localStorage.getItem('nummsg').split(',')
    }
    else {
        $goodarr = []
        $numarr = []
    }
    let $index = -1;
    $.each($goodarr, function (index, valuesid) {
        if (valuesid == sid) {
            $index = index;
        }
    });
    $goodarr.splice($index, 1);
    $numarr.splice($index, 1);
    localStorage.setItem('goodmsg', $goodarr);
    localStorage.setItem('nummsg', $numarr);
}