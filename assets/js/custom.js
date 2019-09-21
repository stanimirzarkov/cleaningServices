(function ($) {
    //side menu
    // $('.showMenu').on('click', function () {
    //     $('#menu').animate({
    //         'left': 0
    //     }, 200);
    // });
    // $('.hideMenu').on('click', function () {
    //     $('#menu').animate({
    //         'left': '-100%'
    //     }, 200);
    // });
    // $(window).scroll(function(){
    //     var scrollPos=$(window).scrollTop();
    //     if(scrollPos>450){
    //         $('#header').addClass('white');
    //     }else{
    //         $('#header').removeClass('white');
    //     }
    // });
    // $('.showProfile').on('click', function(){
    //    $(this).closest('.profile').addClass('full');
    //    $(this).closest('.profile').removeAttr('title');
    // });
    // $('.hideProfile').on('click', function(){
    //    $(this).closest('.profile').removeClass('full');
    //    $(this).closest('.profile').prop('title', 'View full profile');
    // });
    // function callAnimate(animationName, target){
    //     var service = $(target).offset().top;
    //     var targetPosition = $(window).scrollTop() + $(window).height()*0.8  
    //     if  (targetPosition >= service) {
    //         $('.service1>div>img').removeClass('fadeOutLeft');
    //         $('.service1>div>img').addClass('fadeInLeft');
    //     } else{
    //         $('.service1>div>img').removeClass('animated fadeInLeft');
    //         if(!$('.service1>div>img').hasClass('animated')){
    //             $('.service1>div>img').addClass('animated fadeOutLeft');
    //         }
    //     }
    // }
    $(window).on('scroll', function () {
        var service1 = $('.service1').offset().top;
        var service2 = $('.service2').offset().top;
        var service3 = $('.service3').offset().top;
        var targetPosition = $(window).scrollTop() + $(window).height() * 0.8
        if (targetPosition >= service1) {
            $('.service1>div>img').removeClass('fadeOutLeft');
            $('.service1>div>img').addClass('fadeInLeft');
        } else {
            $('.service1>div>img').removeClass('animated fadeInLeft');
            if (!$('.service1>div>img').hasClass('animated')) {
                $('.service1>div>img').addClass('animated fadeOutLeft');
            }
        }
        if (targetPosition >= service2) {
            $('.service2>div>img').removeClass('fadeOutRight');
            $('.service2>div>img').addClass('fadeInRight');
        } else {
            $('.service2>div>img').removeClass('animated fadeInRight');
            if (!$('.service2>div>img').hasClass('animated')) {
                $('.service2>div>img').addClass('animated fadeOutRight');
            }
        }
        if (targetPosition >= service3) {
            $('.service3>div>img').removeClass('fadeOutLeft');
            $('.service3>div>img').addClass('fadeInLeft');
        } else {
            $('.service3>div>img').removeClass('animated fadeInLeft');
            if (!$('.service3>div>img').hasClass('animated')) {
                $('.service3>div>img').addClass('animated fadeOutLeft');
            }
        }
    });

    $('.openPopup').on('click', function () {
        $('html, body').css('overflow', 'hidden');
        $(".popup").fadeIn(100);
    });
    $('.closePopup').on('click', function () {
        $(".popup").fadeOut(100)
        $('html, body').removeAttr('style');
    });
}(jQuery));