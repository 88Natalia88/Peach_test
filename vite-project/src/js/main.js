import '../scss/style.scss';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

  const swiper = new Swiper('.swiper', {
    /*speed: 400,
    spaceBetween: 100,
    direction: 'horizontal',*/
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    /*mousewheel: true,
    keyboard: true,*/
  });