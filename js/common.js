$(function(){
    // 모바일 gnb 슬라이드
    $(".gnb-open-btn").click(function(){
        $("#pf-gnb").addClass("open");
    });
    $(".gnb-close-btn").click(function(){
        $("#pf-gnb").removeClass("open");
    });

    // 위로
    let wH = $(window).height();
    let scTop = $(window).scrollTop();
    $(window).scroll(function(){
        scTop = $(window).scrollTop();
        if(scTop > wH/2){
            $(".gototop").fadeIn(300);
        } else {
            $(".gototop").fadeOut(300);
        }
    });
    $(".gototop").click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 1200);
    });
});