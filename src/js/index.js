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
  // 系列产品tab切换处理
  $('.top-tabs .tl').on('click',function(){
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass("active");
    $(".in-list>.in-item").eq(index).addClass("active").siblings().removeClass("active");
   })
   //产品展示处理
   new Swiper('.aswiper', {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.aswiper-next',
      prevEl: '.aswiper-prev',
    },
  });
  new Swiper('.bswiper', {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.bswiper-next',
      prevEl: '.bswiper-prev',
    },
  });
  new Swiper('.cswiper', {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.cswiper-next',
      prevEl: '.cswiper-prev',
    },
  });
})()
