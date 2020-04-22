window.onload = function() {
  var mySwiperBanner = new Swiper('.swiper-container-banner', {
    loop: true,
    // autoplay: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-banner-btn-next',
      prevEl: '.swiper-banner-btn-prev',
    },
  });
  var mySwiperBrand = new Swiper('.swiper-container-brand', {
    loop: true,
    // autoplay: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-brand-btn-next',
      prevEl: '.swiper-brand-btn-prev',
    },
  });
  var mySwiperTeam = new Swiper('.module-team-mobile', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    coverflowEffect: {
      rotate: 0,
    },
  });
};
