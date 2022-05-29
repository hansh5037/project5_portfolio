$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1600
  });
  projectSwiper = new Swiper(".project-swiper", {
      slidesPerView: "auto",
      autoplay: {
          delay: 6000,
          disableOnInteraction: false,
      },
      speed: 1000,
      loop: true, 
      pagination: {
          el: ".project-swiper .swiper-pagination",
          type: "custom",
          renderCustom: function (swiper, current) {
            var pageNum = current < 10 ? '0' + current : current
            $(".page-num").text(pageNum);
          },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  let projectImg = $('.project1').height();
  $('.project-shadow').css("height", projectImg);
  $(window).resize(function(){
    let projectImg = $('.project1').height();
    $('.project-shadow').css("height", projectImg);
  });
});