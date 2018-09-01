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
            if($(window).scrollTop() > 1040) {
                $('.detail-navbar').addClass('affix');
            } else {
                $('.detail-navbar').removeClass('affix');
            }
        })(),300);
    })
      // 轮播处理
  var swiper = new Swiper('.grandmaster', {
    autoplay: true,//可选选项，自动滑动
    loop:true,
    navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
    pagination: {
      el: '.swiper-pagination',
    },
  });
})
