/**
 * Created by Mengying on 2017/5/18.
 */
$(function(){
        $("#image-a").attr("data-image-src","images/1.jpg");
        $("#image-b").attr("data-image-src","images/xiongdazhen.jpg");
        $("#image-c").attr("data-image-src","images/denjiaxian.png");

    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        $('#ios-notice').removeClass('hidden');
        $('.parallax-container').height( $(window).height() * 0.5 | 0 );
    } else {
        $(window).resize(function(){
            var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
            $('.parallax-container').height(parallaxHeight);
        }).trigger('resize');
    }

    $('#clickme').click(function() {
        $('#welcome').fadeOut('slow', function() {
            // Animation complete.
        });
    });


});
