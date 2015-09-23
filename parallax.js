var image = $('.image'),
    layer = $('div[class*="layer-"]'),
    w = $(window).width(),
    h = $(window).height();

$(window).on('mousemove', function(e) {
    var offsetX = 0.5 - e.pageX / w,
        offsetY = 0.5 - e.pageY / h,
        offsetImage = $('.image').data('offset'),
        transformImage = 'translateY(' + (-offsetX * offsetImage) + 'px) rotateX(' + (-offsetY * offsetImage) + 'deg) rotateY(' + (offsetX * (offsetImage * 2)) + 'deg)';

    $('.image').css('transform', transformImage);

    $('div[class*="layer-"]').each(function() {
        var $this = $(this),
            offsetLayer = $(this).data("offset") || 0,
            transformLayer = 'translateX(' + offsetX * offsetLayer +'px) translateY(' + offsetY * offsetLayer + 'px)';

        $(this).css('transform', transformLayer);
    });
});
