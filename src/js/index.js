(function () {
  
  // 首页
  $(".an-video").height($(window).height());
  $(".head-search").on("click", function () {
    $(".head-wrapper").addClass("head-search-show");
  });
  $('.head-search-close').on("click", function () {
    console.log('----')
    $(".head-wrapper").removeClass("head-search-show");
  });

  // $(".an-head-search").on("mouseleave", function () {
  //   $(this).find("input").stop().hide(300);
  // });
  var swiper = new Swiper('.grandmaster', {
    autoplay: true,//可选选项，自动滑动
    pagination: {
      el: '.swiper-pagination',
    },
  });
  // var mySwiper = new Swiper('.swiper-container', {
  //   autoplay: true,//可选选项，自动滑动
  //   pagination: {
  //     el: '.top-tabs',
  //     bulletElement : 'li',
  //     type: 'custom',
  //     clickable: true,
  //   },
  // });
  $('.top-tabs').on('click','li',function(){
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass("active");
    $(".pt-container>div").eq(index).addClass("active").siblings().removeClass("active");
   })
  //  视频初始化
  var videoObj = videojs("my-video");
  $('#myModal').on('show.bs.modal', function(){ // 模态框居住处理
    var $this = $(this);
    var $modal_dialog = $this.find('.modal-dialog');
    // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
    $this.css('display', 'block');
    $modal_dialog.css({'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2) });
  });
  $('#myModal').on('hide.bs.modal', function(){ // 模态框关闭视频暂停
    videoObj.pause();
  });
  
})()
