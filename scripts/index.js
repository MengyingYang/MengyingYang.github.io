/**
 * Created by Mengying on 2017/5/18.
 */
$(function(){
        $("#image-banner").attr("data-image-src","images/1.jpg");
        $("#image-a").attr("data-image-src","images/timg.jpg");
        $("#image-b").attr("data-image-src","images/xiongdazhen2.jpg");
        $("#image-c").attr("data-image-src","images/dengjiaxian3.jpg");
        $("#image-d").attr("data-image-src","images/shiye.jpg");
        $("#image-e").attr("data-image-src","images/city2.jpg");


    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        $('#ios-notice').removeClass('hidden');
        $('.parallax-container').height( $(window).height() * 0.5 | 0 );
    } else {
        $(window).resize(function(){
            var parallaxHeight = Math.max($(window).height() * 1, 200) | 0;
            $('.parallax-container').height(parallaxHeight);
        }).trigger('resize');
    }

    $('#clickme').click(function() {
        $('#welcome').fadeOut('slow', function() {
            // Animation complete.
        });
    });


});
