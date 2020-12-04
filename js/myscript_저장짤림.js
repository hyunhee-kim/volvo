
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
            $('#showroom').animatescroll({padding:80,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(7) a').click(function(){
            $('#faq').animatescroll({padding:115,easing:'easeInQuad'});
        })
        // 65.waypoint plugin 동작구문
        $('.wp1').waypoint(function(direction){
            if(direction==='down'){
                $('.wp1').addClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:'7%'
        })
         $('.wp1').waypoint(function(direction){
            if(direction==='up'){
                $('.wp1').removeClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:'20%'
        })

         $('.wp2').waypoint(function(direction){
            if(direction==='down'){
                $('.wp2').addClass('animate__animated animate__fadeInDown')
            }
        },{
            offset:'12%'
        })
         $('.wp2').waypoint(function(direction){
            if(direction==='up'){
                $('.wp2').removeClass('animate__animated animate__fadeInDown')
            }
        },{
            offset:'20%'
        })


         $('.wp3').waypoint(function(direction){
            if(direction==='down'){
                $('.wp3').addClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:'40%'
        })
         $('.wp3').waypoint(function(direction){
            if(direction==='up'){
                $('.wp3').removeClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:'100%'
        })

        $('.wp4').waypoint(function(direction){
            if(direction==='down'){
                $('.wp4').addClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:'60%'
        })
         $('.wp4').waypoint(function(direction){
            if(direction==='up'){
                $('.wp4').removeClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:'100%'
        }) 

         $('.wp5').waypoint(function(direction){
            if(direction==='down'){
                $('.wp5').addClass('animate__animated animate__fadeInRight')
            }
        },{
            offset:'70%'
        })
         $('.wp5').waypoint(function(direction){
            if(direction==='up'){
                $('.wp5').removeClass('animate__animated animate__fadeInRight')
            }
        },{
            offset:'100%'
        })

        $('.wp6').waypoint(function(direction){
            if(direction==='down'){
                $('.wp6').addClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:'80%'
        })
         $('.wp6').waypoint(function(direction){
            if(direction==='up'){
                $('.wp6').removeClass('animate__animated animate__fadeInLeft')
            }
        },{
            offset:'100%'
        })  

        //  $('.wp6').waypoint(function(direction){
        //     if(direction==='down'){
        //         $('.wp6').addClass('animate__animated animate__pulse')
        //     }
        // },{
        //     offset:'80%'
        // })
        //  $('.wp6').waypoint(function(direction){
        //     if(direction==='up'){
        //         $('.wp6').removeClass('animate__animated animate__pulse')
        //     }
        // },{
        //     offset:'100%'
        // })

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
            change_img.eq(2