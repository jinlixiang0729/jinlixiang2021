let $goodarr=[]
if (localStorage.getItem('goodmsg') && localStorage.getItem('nummsg')) {
    $goodarr = localStorage.getItem('goodmsg').split(',')
}
else {
    $goodarr = []
}

let $num = $goodarr.length
$('.cart em').html($num)
$('.gocart em').html($num)