(function(){
    var nav=$('.nav span');
    nav[0].className='redline';
    for(i=0;i<nav.length;i++){
        nav[i].i=i;
        nav[i].onclick=function(){
            for(i=0;i<nav.length;i++){
                nav[i].className='nullline';
            }
            this.className='redline';
        }
    }
    var footbtn=$('.footer-bar > span');
    footbtn[0].className='red';
    var nullcolor=getStyle(footbtn[0]).color;
    for(i=0;i<footbtn.length;i++){
        footbtn[i].i=i;
        footbtn[i].onclick=function(){
            for(i=0;i<footbtn.length;i++){
                footbtn[i].className=nullcolor;
            }
            this.className='red';
        }
    }
    
    var backButton=$('.back_to_top');  //回到顶部
    function backToTop() {
        $('html,body').animate({
            scrollTop: 0             //滚动距离变回0
        }, 800);
    }
    backButton.on('click', backToTop);
    
    $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    });
    $(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop:true,//可选选项，自动滑动
        /*分页器*/
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            freeMode : true,
        },
    })
    var mySwiper = new Swiper('.swiper-container-1',{
        slidesPerView : 2.5,
        slidesPerGroup : 1,
        freeMode: true,//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根
    })
    var mySwiper = new Swiper('.swiper-container-2',{
        slidesPerView : 1.2,
        slidesPerGroup : 1,
        freeMode: true,
    })
    function getStyle(ele){return ele.currentStyle || getComputedStyle(ele);}
    //获取样式兼容
})();
