(function($){
    // banner 관련
    $(document).ready(function(){
        $('.banner-slider').bxSlider({
            auto: true,
            mode: 'vertical',
            touchEnabled: false,
            controls: false
        });
        setTimeout(function(){
            $('#banner').addClass('play');
        }, 300);
        $('.btn-banner-close').click(function(){
            $('#banner').hide();
            $('body').removeClass('banner-open');
        });
    });

    // gnb 메뉴 관련
    $(document).on('mouseenter', '.gnb-menu > li > a', function(){
        $('.gnb-menu > li').removeClass('active');
        $(this).parent().addClass('active');
    });
    $(document).on('mouseleave', '.gnb-menu > li', function(){
        $(this).removeClass('active');
    });

    // site map 관련
    $(document).on('click', '#gnb .btn-site-map', function(){
        $(this).toggleClass('btn-map-close');
        $('body').toggleClass('opened');
    });

    // 언어 선택 관련
    $(document).on('mouseenter', '.global-language .btn-language', function(){
        $(this).parent().addClass('show');
    });
    $(document).on('mouseleave', '.global-language', function(){
        $(this).removeClass('show');
    });

    // modal open 
    $(document).on('click','.btn-modal', function(){
        $('body').addClass('modal-open');
        setTimeout(function(){
            $('#modal-popup').addClass('show');
        }, 300);
    });
    // modal close
    $(document).on('click', '#modal-popup .btn-modal-close, #modal-popup .modal-backdrop', function(){
        $('body').removeClass('modal-open');
        $('#modal-popup').removeClass('show');
    });

    // modal tab 관련
    $(document).on('click','.tab-menu li a', function(e){
        var index =  $(this).parent().index();
        $('.tab-menu li a').parent().removeClass('active');
        $('.tab-pane').removeClass('active');
        $(this).parent().addClass('active');
        $($(this).attr('href')).addClass('active');
        e.preventDefault();
    });

    // scroll 관련
    $(window).on('scroll', function() {
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 210) {
            // scroll top 
            $('.quick-top').addClass('show');
            $('.quick-top .btn-top').click(function(){
                $('html, body').stop().animate({
                    scrollTop: 0
                });
            });
            // aside quick-menu
            $('#quick-menu').stop().animate({
                top: $(this).scrollTop() + 30
            }, 'slow');
        } else {
            // scroll top 
            $('.quick-top').removeClass('show');
            // aside quick-menu
            $('#quick-menu').stop().animate({
                top: 210
            }, 'slow');
        }
    });
})(jQuery);