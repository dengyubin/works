(function(){
    var starserch=$(".y-slide").html();  //获取初始的搜索内容
    $(".y-slide").click(function(){
        $(".y-slide").empty();  //获取焦点清空搜索
       
    });
    $(".y-slide").blur(function(){
        $(".y-slide").html(starserch);  //失去焦点拿回搜索
    });
    
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
    var startTme=new Date();
    show();  //限购时间
    function show(){
        var startTime=new Date();
        var ed=startTme;
        ed.setHours(14);
        ed.setMinutes(00);
        ed.setSeconds(00);
        ed.setMilliseconds(00);
        var leaveTime=parseInt((ed.getTime()-startTime.getTime())/1000);
        var d=parseInt(leaveTime/(24*60*60));
        var h=parseInt(leaveTime/(60*60)%24);
        var m=parseInt(leaveTime/60%60);
        var s=parseInt(leaveTime%60);
        m=cleartime(m);
        h=cleartime(h);
        s=cleartime(s);
        if (leaveTime>0&&ed.getTime()===startTime.getTime()) {
            document.querySelector(".time-left a").innerHTML="<h3>严选限时购</h3><span>"+h+"</span><span>:</span><span>"+m+"</span><span>:</span><span>"+s+"</span><p>下一场 14:00 开始</p>";
        }else if(leaveTime<=0||ed.getTime()>startTime.getTime()){    //判断倒计时是否结束
            ed.setDate(ed.getDate()+1);
            ed.setHours(02);
            ed.setMinutes(00);
            ed.setSeconds(00);
            ed.setMilliseconds(00);
            leaveTime=parseInt((ed.getTime()-startTime.getTime())/1000);
            d=parseInt(leaveTime/(24*60*60));
            h=parseInt(leaveTime/(60*60)%24);
            m=parseInt(leaveTime/60%60);
            s=parseInt(leaveTime%60);
            m=cleartime(m);
            h=cleartime(h);
            s=cleartime(s);
            document.querySelector(".time-left a").innerHTML="<h3>团购结束</h3><span>"+h+"</span><span>:</span><span>"+m+"</span><span>:</span><span>"+s+"</span><p>下一场 明天14:00 开始</p>";
        };
        setTimeout(show,1000);
    }
    function cleartime(i){
        if (i<=10) {
            i="0"+i
        }
        return i
    }
})();
