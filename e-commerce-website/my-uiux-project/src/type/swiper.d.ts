const swiper = new Swiper(".swiper-container", {
    modules: [Thumbs] as unknown as SwiperModule[],
    thumbs: {
        swiper: anotherSwiperInstance,
    },
});
