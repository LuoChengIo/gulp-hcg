$(function(){
    $('.pages-con .pg-ct').hover(
        function () {
            $('.pages-con').addClass("active");
        },
        function () {
            $('.pages-con').removeClass("active");
        }
      );
})