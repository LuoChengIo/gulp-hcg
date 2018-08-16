$(function(){
    $('.pages-con .pg-ct').hover(
        function () {
            $('.pages-con').addClass("active");
        },
        function () {
            $('.pages-con').removeClass("active");
        }
      );
    $(window).scroll( function() {  // 滚动监听
        debouce((function(){ // 
            if($(window).scrollTop() > 900) {
                $('.detail-navbar').addClass('affix');
            } else {
                $('.detail-navbar').removeClass('affix');
            }
        })(),300);
    })
})
