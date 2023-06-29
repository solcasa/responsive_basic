
// function option () {

// } 최상위로 끌어올려주는 선언. 호이스팅



const MainSlide = new Swiper('.main_slide', {
    loop: true,
});

const leftArrow = document.querySelector('#MainVisual .arrows .left');
leftArrow.addEventListener('click', function () {
    MainSlide.slidePrev();
});
const rightArrow = document.querySelector('#MainVisual .arrows .right');
rightArrow.addEventListener('click', function () {
    MainSlide.slideNext();
});



const ProSlide = new Swiper('.pro_slide', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".sbar",
        type: "progressbar",
    },

});

