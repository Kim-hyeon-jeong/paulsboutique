$(function(){
   
    $(window).resize(function () {

        if (window.innerWidth > 880) {  // 다바이스 크기가 480이상일때 
            $(".ham").click(function(){
                $("#navRe").toggle();
            })
        } else {
            $(".ham").click(function(){
                $("#nav").css("display","block");
            })
            $(".xBtn").click(function(){
                $("#nav").css("display","none");
            })
            $("#nav>li").click(function(){
                $(this).children(".sub").toggle();
                $(this).siblings().children(".sub").css("display","none");
                $(this).children(".subname").css("color","#696969")
                .parent().siblings().children(".subname").css("color","white");
            })
        }
    }).resize();

    $(".list").slick({
        slidesToShow:2, //보여지는 갯수
        slidesToScroll:2, //움직이는 갯수
        autoplay:true,
        autoplaySpeed:2200,
        responsive:[ //bxslider를 제외한 나머지는 모두 반응형써줘야 반응형 적용됨
            {
                breakpoint:767,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1
                }
            }

        ]
        
    })
    $(".list2").slick({
        centerMode:true,
        slidesToShow:4, //보여지는 갯수
        slidesToScroll:1, //움직이는 갯수
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        responsive:[ //bxslider를 제외한 나머지는 모두 반응형써줘야 반응형 적용됨
            {
                breakpoint:767,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1
                }
            }

        ]
    })
    
    var lastScroll = 0;
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>1000){
            $("#nav>li>a").css("color","black");
            $("h1>a").css("color","black");
            $(".Gnb a").css("color","black");
            $("#hamimg").attr("src","images/hamblack.png");
        }else{
            $("#nav>li>a").css("color","white");
            $("h1>a").css("color","white");
            $(".Gnb a").css("color","white");
            $("#hamimg").attr("src","images/hamBtn.png");
        }
        lastScroll = scroll;
    })
  
    var clock = $(".clock").FlipClock({
        // clockFace : "DailyCounter"
      clockFace: "DailyCounter",
      autoStart: true
    });
    // set time
    //초단위로 쓰기 하루: 24*60*60
    clock.setTime(24*60*60*30);

    // countdown mode
    //(true)하면 카운트다운모드
    clock.setCountdown(true);

    // start the clock
    clock.start();
})