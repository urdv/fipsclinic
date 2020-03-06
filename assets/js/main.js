(function($){
    $(document).ready(function() {
        // main slider
        setTimeout(function(){
            $('.jumbotron').addClass('action');
        }, 500);
        $('.jumbotron ul').bxSlider({
            auto: true,
            pause: 6000,
            touchEnabled: true,
            controls: false,
            pager: true,
            onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
                $('.jumbotron ul li.active').removeClass('active');
                $('.jumbotron ul li').eq(currentSlideHtmlObject + 1).addClass('active');
            },
            onSliderLoad: function() {
                $('.jumbotron ul li').eq(1).addClass('active');
            },
        });
        // focus pick slider
        $('.rank-list').bxSlider({
            auto: false,
            pause: 6000,
            touchEnabled: false,
            controls: true,
            pager: false,
            slideWidth: 300,
            slideMargin: 26,
            minSlides: 4,
            maxSlides: 4,
            moveSlides: 1
        });

        // story-slide
        $('.story-slide').bxSlider({
            auto: true,
            pause: 6000,
            touchEnabled: true,
            controls: false,
            pager: true
        });
    });
})(jQuery);