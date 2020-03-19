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
    $(document).on('mouseenter', '#gnb .depth1 > li > a', function(){
        $('.gnb-menu > li').removeClass('menu_over');
        $(this).parent().addClass('menu_over');
    });
    $(document).on('mouseleave', '#gnb .depth1 > li', function(){
        $(this).removeClass('menu_over');
    });

    // site map 관련
    $(document).on('click', '.btn-site-map', function(){
        $('.btn-site-map').toggleClass('btn-map-close');
        $('body').toggleClass('opened');
    });

    // 언어 선택 관련
    // 모바일
    $(document).on('click', '#site-map .global-language .btn-language', function(){
        $(this).parent().toggleClass('show');
    });
    // 웹
    $(document).on('mouseenter', '#header .global-language .btn-language', function(){
        $(this).parent().addClass('show');
    });
    $(document).on('mouseleave', '#header .global-language', function(){
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
    $(document).on('click','.modal-wrapper .tab-menu li a', function(e){
        $('.modal-wrapper .tab-menu li a').parent().removeClass('active');
        $('.modal-wrapper .tab-content .tab-pane').removeClass('active');
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
                }, 'slow');
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