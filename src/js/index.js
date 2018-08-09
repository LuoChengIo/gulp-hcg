(function () {
  
  // 首页
  // 视频高度处理
  var resizeVideo = function(playobj) {
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $(".in-video").height(winHeight);
    if(winWidth/winHeight > 16/9) { //判断视窗比例
      playobj.width(winWidth);
      playobj.height(winWidth*9/16);
    }else {
      playobj.width(winHeight*16/9);
      playobj.height(winHeight);
    }
  }
  var myPlayer = videojs('player-Abbreviated');
  resizeVideo(myPlayer)
  videojs("player-Abbreviated").ready(function(){
    var myPlayer = this;
    myPlayer.play();
  });
  $(window).resize(function(){ //窗口变化改变video
    debouce(resizeVideo(myPlayer),300)
  });
  $('.palybut').on('click',function(){ // 点击播放按钮隐藏灰层，开启声音
    $('.video-mask').hide();
    myPlayer.muted(false);
  })
  $(window).scroll( function() {  // 滚动监听
    debouce((function(){ // 当video不在可视区域内，暂停播放
      var winHeight = $(window).height();
      var skt = -(document.getElementById('player-Abbreviated').getBoundingClientRect().top);
      if(skt > winHeight) {
        $('.video-mask').show();
        myPlayer.muted(true);
      }
    })(),300)
  });

  // 轮播处理
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
})()
