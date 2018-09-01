/**
 * 防抖动
 *
 * @param {*} func
 * @param {*} delay
 * @param {*} immediate
 * @returns
 */
function debouce(func,delay,immediate){
  var timer = null;
  return function(){
    var context = this;
    var args = arguments;
    if(timer) clearTimeout(time);
    if(immediate){
        //根据距离上次触发操作的时间是否到达delay来决定是否要现在执行函数
        var doNow = !timer;
        //每一次都重新设置timer，就是要保证每一次执行的至少delay秒后才可以执行
        timer = setTimeout(function(){
            timer = null;
        },delay);
        //立即执行
        if(doNow){
            func.apply(context,args);
        }
    }else{
        timer = setTimeout(function(){
            func.apply(context,args);
        },delay);
    }
  }
}
/**滚动置顶算法 */
Math.easeout = function (A, B, rate, callback) {
    if (A == B || typeof A != 'number') {
        return;
    }
    B = B || 0;
    rate = rate || 2;
    var step = function () {
        A = A + (B - A) / rate;
        if (A < 1) {
            callback(B, true);
            return;
        }
        callback(A, false);
        requestAnimationFrame(step);
    };
    step();
};
/**一些公共处理 */
$(function(){
    var doc = document.body.scrollTop? document.body : document.documentElement,
        winHeight= $(window).height(),
        winWidth = $(window).width();
    // 浮动客服以及置顶处理
    var header = $('.custom-navbar'),
        topDom = $('.float-nav .last'),
        floatNav = $('.float-nav');
    if(floatNav.length){ //判断右浮动是否存在
        $(window).scroll( function() {  // 滚动监听
            debouce((function(){ //
                if(doc.scrollTop > 100) {
                    floatNav.show()
                    if(doc.scrollTop > winHeight) {
                        topDom.show()
                    }else {
                        topDom.hide()
                    }
                }else {
                    floatNav.hide()
                }
            })(),300)
        });
        topDom.on('click',function(){ //缓动置顶
            Math.easeout(doc.scrollTop, 0, 4, function (value) {
                doc.scrollTop = value;
            });
        })
    }
    if(header.length){
        if(!$('body[nofixedhead]').length) {
            $(window).scroll( function() {  // 滚动监听
                debouce((function(){ //
                    if(doc.scrollTop > winHeight) {
                        header.addClass('navbar-fixed-top');
                    }else {
                        header.removeClass('navbar-fixed-top');
                    }
                })(),300)
            });
        }
    }
    //公共导航处理
    var dropw = $('.bg-drop-menu'),
        form  = $('#s_p_form'),
        wform  = $('#s_w_form'),
        annav  = $('.custom-navbar .an-nav');
    if(dropw.length) {
        dropw.width(winWidth);
        dropw.css('left',-($('.inlineShop').offset().left-6));
        $('.an-nav .last').on('click',function(){
            form.show();
            setTimeout(() => {
                form.addClass('active');
            }, 200);
            // form.animate({ 
            //     width: "640px",
            // }, 1000 );
            annav.hide();
        });
        $('#s_p_form .close-b').on('click',function(){
            form.removeClass('active');
            setTimeout(() => {
                form.hide();
                annav.show();
            }, 300);
        })
        $('.navbar-search').on('click',function(){
            wform.show();
        });
        $('#s_w_form .close-b').on('click',function(){
            wform.hide();
        })
        
    }
    
})