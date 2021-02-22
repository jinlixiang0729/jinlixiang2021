import { } from 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js'
const $topnav=$('.topnav')
$(window).on('scroll',function(){
    let $top = $(window).scrollTop();
    if($top>=150){
       $topnav.stop(true).animate({
           height:48
       },300)
    }
    else{
        $topnav.stop(true).animate({
            height:0
        },300) 
    }
})
