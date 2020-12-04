
    $(function(){
        const loading = $('.loading');

        $(window).on('load',function(){
            setTimeout(function(){loading.remove();}, 1100)
            
        })
        // 54.로딩 이후에 가로 스크롤 다시 생기도록 설정
        $(window).on('pageshow',function(){
            setTimeout(function(){
                $('html,body').css({'overflow-x':'hidden','overflow-y':'visible'});
                $('body').css('overflow','visible');
            },1100)
        })
        // 19.캐로셀 옵션 설정
        $('.carousel').carousel({
        	interval : 4000
        });
        // 38.animatescroll plugin 동작구문
        $('.navbar li:nth-child(1) a').click(function(){
            $('#top').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(2) a').click(function(){
            $('#product').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(3) a').click(function(){
            $('#heritage').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(4) a').click(function(){
            $('#bebetter').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(5) a').click(function(){
            $('#cf').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(6) a').click(function(){
            $('#showroom').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(7) a').click(function(){
            $('#faq').animatescroll({padding:115,easing:'easeInQuad'});
        })

        // 65.waypoint plugin 동작구문

// product_타이틀
        $('.wp1').waypoint(function(direction){
            if(direction==='down'){
                $('.wp1').addClass('animate__animated animate__fadeInUp');
            }
        },{
            offset:1800
        })
         $('.wp1').waypoint(function(direction){
            if(direction==='up'){
                $('.wp1').removeClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:1500
        })

// product_하이라이트
         $('.wp2').waypoint(function(direction){
            if(direction==='down'){
                $('.wp2').addClass('animate__animated animate__fadeInDown')
            }
        },{
            offset:1800
        })
         $('.wp2').waypoint(function(direction){
            if(direction==='up'){
                $('.wp2').removeClass('animate__animated animate__fadeInDown')
            }
        },{
            offset:1500
        })

// heritage_타이틀
         $('.wp3').waypoint(function(direction){
            if(direction==='down'){
                $('.wp3').addClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:1800
        })
         $('.wp3').waypoint(function(direction){
            if(direction==='up'){
                $('.wp3').removeClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:1500
        })

// heritage_1927(탄생)
        $('.wp4').waypoint(function(direction){
            if(direction==='down'){
                $('.wp4').addClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:1800
        })
         $('.wp4').waypoint(function(direction){
            if(direction==='up'){
                $('.wp4').removeClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:1500
        }) 

// heritage_1959(3점식 벨트)
         $('.wp5').waypoint(function(direction){
            if(direction==='down'){
                $('.wp5').addClass('animate__animated animate__fadeInRight')
            }
        },{
            offset:1750
        })
         $('.wp5').waypoint(function(direction){
            if(direction==='up'){
                $('.wp5').removeClass('animate__animated animate__fadeInRight')
            }
        },{
            offset:1500
        })

// heritage_1967(후향식 시트)
        $('.wp6').waypoint(function(direction){
            if(direction==='down'){
                $('.wp6').addClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:1750
        })
         $('.wp6').waypoint(function(direction){
            if(direction==='up'){
                $('.wp6').removeClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:1500
        }) 


 // heritage_1976(안전혁신)
         $('.wp7').waypoint(function(direction){
            if(direction==='down'){
                $('.wp7').addClass('animate__animated animate__fadeInRight')
            }
        },{
            offset:1750
        })
         $('.wp7').waypoint(function(direction){
            if(direction==='up'){
                $('.wp7').removeClass('animate__animated animate__fadeInRight')
            }
        },{
            offset:1500
        })



// heritage_1998(커튼식 에어백)
        $('.wp8').waypoint(function(direction){
            if(direction==='down'){
                $('.wp8').addClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:1750
        })
         $('.wp8').waypoint(function(direction){
            if(direction==='up'){
                $('.wp8').removeClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:1500
        }) 



// heritage_하단 텍스트
        $('.wp9').waypoint(function(direction){
            if(direction==='down'){
                $('.wp9').addClass('animate__animated animate__zoomIn')
            }
        },{
            offset:1750
        })
         $('.wp9').waypoint(function(direction){
            if(direction==='up'){
                $('.wp9').removeClass('animate__animated animate__zoomOut')
            }
        },{
            offset:1500
        })


// bebetter_타이틀
         $('.wp10').waypoint(function(direction){
            if(direction==='down'){
                $('.wp10').addClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:1800
        })
         $('.wp10').waypoint(function(direction){
            if(direction==='up'){
                $('.wp10').removeClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:1500
        })


 // bebetter_실천1
         $('.wp11').waypoint(function(direction){
            if(direction==='down'){
                $('.wp11').addClass('animate__animated animate__slideInUp')
            }
        },{
            offset:1800
        })
         $('.wp11').waypoint(function(direction){
            if(direction==='up'){
                $('.wp11').removeClass('animate__animated animate__slideOutDown')
            }
        },{
            offset:1500
        })

 // bebetter_실천2
         $('.wp12').waypoint(function(direction){
            if(direction==='down'){
                $('.wp12').addClass('animate__animated animate__slideInUp')
            }
        },{
            offset:1700
        })
         $('.wp12').waypoint(function(direction){
            if(direction==='up'){
                $('.wp12').removeClass('animate__animated animate__slideOut')
            }
        },{
            offset:1500
        })

 // bebetter_실천3
         $('.wp13').waypoint(function(direction){
            if(direction==='down'){
                $('.wp13').addClass('animate__animated animate__slideInUp')
            }
        },{
            offset:1600
        })
         $('.wp13').waypoint(function(direction){
            if(direction==='up'){
                $('.wp13').removeClass('animate__animated animate__slideOut')
            }
        },{
            offset:1500
        })



 // bebetter_동영상1(왼쪽)
        $('.wp14').waypoint(function(direction){
            if(direction==='down'){
                $('.wp14').addClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:1750
        })
         $('.wp14').waypoint(function(direction){
            if(direction==='up'){
                $('.wp14').removeClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:1500
        })


  //bebetter_동영상2(오른쪽)
        $('.wp15').waypoint(function(direction){
            if(direction==='down'){
                $('.wp15').addClass('animate__animated animate__fadeInRight')
            }
        },{
            offset:1750
        })
         $('.wp15').waypoint(function(direction){
            if(direction==='up'){
                $('.wp15').removeClass('animate__animated animate__fadeInRight')
            }
        },{
            offset:1500
        })


//bebetter_plogging_타이틀
        $('.wp16').waypoint(function(direction){
            if(direction==='down'){
                $('.wp16').addClass('animate__animated animate__fadeIn')
            }
        },{
            offset:1600
        })
         $('.wp16').waypoint(function(direction){
            if(direction==='up'){
                $('.wp16').removeClass('animate__animated animate__fadeOut')
            }
        },{
            offset:1500
        })


//CF_동영상
        $('.wp17').waypoint(function(direction){
            if(direction==='down'){
                $('.wp17').addClass('animate__animated animate__fadeInDown')
            }
        },{
            offset:1750
        })
         $('.wp17').waypoint(function(direction){
            if(direction==='up'){
                $('.wp17').removeClass('animate__animated animate__fadeOutDown')
            }
        },{
            offset:1500
        })


 //쇼룸_타이틀
        $('.wp18').waypoint(function(direction){
            if(direction==='down'){
                $('.wp18').addClass('animate__animated animate__fadeIn')
            }
        },{
            offset:1600
        })
         $('.wp18').waypoint(function(direction){
            if(direction==='up'){
                $('.wp18').removeClass('animate__animated animate__fadeOut')
            }
        },{
            offset:1500
        })


//FAQ_타이틀
        $('.wp19').waypoint(function(direction){
            if(direction==='down'){
                $('.wp19').addClass('animate__animated animate__pulse')
            }
        },{
            offset:1600
        })
         $('.wp19').waypoint(function(direction){
            if(direction==='up'){
                $('.wp19').removeClass('animate__animated animate__pulse')
            }
        },{
            offset:1500
        })


 // fancybox호출
        $(".fancybox").fancybox();
 


        var change_btn =$(".change_btn");
        var change_img =$(".change_btn_box img");
        var car_change1 =$(".car_change1");

 
        change_btn.eq(0).click(function(){
            change_img.eq(0).attr("src","img2/color_btn01_hover.png");
            change_img.eq(1).attr("src","img2/color_btn02.png");
            change_img.eq(2).attr("src","img2/color_btn03.png");
            change_img.eq(3).attr("src","img2/color_btn04.png");
            change_img.eq(4).attr("src","img2/color_btn05.png");
            car_change1.attr("src","img2/change_color1.png");
        })

        change_btn.eq(1).click(function(){
            change_img.eq(0).attr("src","img2/color_btn01.png");
            change_img.eq(1).attr("src","img2/color_btn02_hover.png");
            change_img.eq(2).attr("src","img2/color_btn03.png");
            change_img.eq(3).attr("src","img2/color_btn04.png");
            change_img.eq(4).attr("src","img2/color_btn05.png");
            car_change1.attr("src","img2/change_color2.png");
        })

        change_btn.eq(2).click(function(){
            change_img.eq(0).attr("src","img2/color_btn01.png");
            change_img.eq(1).attr("src","img2/color_btn02.png");
            change_img.eq(2).attr("src","img2/color_btn03_hover.png");
            change_img.eq(3).attr("src","img2/color_btn04.png");
            change_img.eq(4).attr("src","img2/color_btn05.png");
            car_change1.attr("src","img2/change_color3.png");
        })

        change_btn.eq(3).click(function(){
            change_img.eq(0).attr("src","img2/color_btn01.png");
            change_img.eq(1).attr("src","img2/color_btn02.png");
            change_img.eq(2).attr("src","img2/color_btn03.png");
            change_img.eq(3).attr("src","img2/color_btn04_hover.png");
            change_img.eq(4).attr("src","img2/color_btn05.png");
            car_change1.attr("src","img2/change_color4.png");
        })

        change_btn.eq(4).click(function(){
            change_img.eq(0).attr("src","img2/color_btn01.png");
            change_img.eq(1).attr("src","img2/color_btn02.png");
            change_img.eq(2).attr("src","img2/color_btn03.png");
            change_img.eq(3).attr("src","img2/color_btn04.png");
            change_img.eq(4).attr("src","img2/color_btn05_hover.png");
            car_change1.attr("src","img2/change_color5.png");
        })

    });