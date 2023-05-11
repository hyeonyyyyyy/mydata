$(function(){
    $('nav').mouseover(function(){    
        $('.sub').stop().slideDown();
        $('.over_bg').stop().slideDown();
        $('.sub_bg').stop().slideDown();
    });
    //메뉴에서 마우스 아웃하면 모든 서브메뉴와 서브메뉴배경 올라감
    $('nav').mouseleave(function(){    
        $('.sub').stop().slideUp();
        $('.over_bg').stop().slideUp();
        $('.sub_bg').stop().slideUp();
    });



    var swiper = new Swiper(".mainSwiper", {
        effect : 'fade', // 페이드 효과 사용
        speed:1000,
        loop:true,
        autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 4000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        pagination: {
          el: ".main .swiper-pagination",
        },
      });
      
      var swiper02 = new Swiper(".exper-swiper", {
        slidesPerView: "auto",
        loop: true,
        slideActiveClass: "active",
        centeredSlides: true,
        slideToClickedSlide : true,
        // autoplay: {
        //   delay: 4000,
        // },
        pagination: {
          el: ".experience .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".experience .swiper-button-next",
          prevEl: ".experience .swiper-button-prev",
        },
      })

      var recoSwiper = new Swiper(".recoSwiper", {
        spaceBetween: 50,    // 슬라이드 사이 여백
        slidesPerView : '5',
        loop: true,
        autoplay:{
           delay : 4000,
          disableOnInteraction : false,
        },
        pagination: {
          el: ".progress",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".recom .swiper-button-next",
          prevEl: ".recom .swiper-button-prev",
        },
      });

      var pagingSwiper = new Swiper(".recoSwiper", {   // 슬라이드 사이 여백
        slidesPerView : '5',
        loop: true,
        pagination: {
          el: ".fraction",
          type: "fraction",
        },
      });

      $(".start").on("click",function(){
        recoSwiper.autoplay.start();
        return false;
    });

    $(".stop").on("click",function(){
        recoSwiper.autoplay.stop();
        return false;
    });
    $(".stop").click(function(){
        $(".start").addClass("active");
        $(".stop").addClass("active");
    });
    $(".start").click(function(){
        $(".start").removeClass("active");
        $(".stop").removeClass("active");
    });
    
      recoSwiper.controller.control = pagingSwiper;
      pagingSwiper.controller.control = recoSwiper;


      var $tablink = $(".tabTitle li").click(function(){
        var idx=$tablink.index(this);
        $(".tabTitle li").removeClass("on active")
        $(".tabTitle li").eq(idx).addClass("on active");
        $(".tabCont > div").hide();
        $(".tabCont > div").eq(idx).show();

      })
      $(".tab_title li").click(function(){
        var idx = $(this).index();
        $(".tab_title li").removeClass("on active");
        $(".tab_title li").eq(idx).addClass("on active");
        $(".tab_cont > div").hide();
        $(".tab_cont > div").eq(idx).show();
      });

      // 탑버튼

      
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#top').fadeIn();
      } else {
          $('#top').fadeOut();
      }
  });
  
  $("#top").click(function() {
      $('html, body').animate({
          scrollTop : 0
      }, 400);
      return false;
  });

    //햄버거 메뉴를 클릭하면 팝업 메뉴가 나타남
    $('.all').click(function(){
      $('.a_menu').fadeIn();
      // 화면 스크롤 막음
      $('html,body').css('overflow-y','hidden');
    });
    //팝업 메뉴의 닫기 버튼을 클락하면 팝업 메뉴가 왼쪽으로 들어감
    $('.close').click(function(){
      $('.a_menu').fadeOut();
      //윈도우의 화면 스크롤 활성화
      $('html,body').css('overflow-y','visible');
    });

});