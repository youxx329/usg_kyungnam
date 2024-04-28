$(document).ready(function () {

    // main visual
    const swiper = new Swiper('.swiper', {
        centeredSlides: true,
        speed: 600,
        parallax: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: "#swiper01_next",
            prevEl: "#swiper01_prev",
        },
    });

    //스톱
    $(".swiper-button-area .stop").click(function () {
        $(".toggle").toggleClass('on');
        swiper.autoplay.stop();
        return false;
    });
    //플레이
    $(".swiper-button-area .play").click(function () {
        $(".toggle").toggleClass('on');
        swiper.autoplay.start();
        return false;
    });

});



 $(document).ready(function () {

var swiper = new Swiper('.swiper02', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

     

});


