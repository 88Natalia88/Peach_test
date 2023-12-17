import '../scss/style.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', async function () {
  const svgUrl = './public/icons/map.svg?raw';
  const svgResponse = await fetch(svgUrl);
  const svgText = await svgResponse.text();

  const svgContainer = document.querySelector('.map');
  svgContainer.innerHTML = svgText;

  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');
      updateMap(filter);
      updateUnderline(this);
    });
  });

  function updateMap(filter) {
    const allCities = svgContainer.querySelectorAll('.city');
    allCities.forEach(city => {
      city.style.display = 'none';
    });

    if (filter === 'all') {
      allCities.forEach(city => {
        city.style.display = 'inline';
      });
    } else {
      const filteredCities = svgContainer.querySelectorAll(`.${filter}`);
      filteredCities.forEach(city => {
        city.style.display = 'inline';
      });
    }
  }
});

/*
document.addEventListener('DOMContentLoaded', function () {
  const mapObject = document.querySelector('.map__bg');
  const svgDoc = mapObject.contentDocument;

  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');
      updateMap(filter);
      updateUnderline(this);
    });
  });

  function updateMap(filter) {
    const allCities = svgDoc.querySelectorAll('.city');
    allCities.forEach(city => {
      city.style.display = 'none';
    });

    if (filter === 'all') {
      allCities.forEach(city => {
        city.style.display = 'inline';
      });
    } else {
      const filteredCities = svgDoc.querySelectorAll(`.${filter}`);
      filteredCities.forEach(city => {
        city.style.display = 'inline';
      });
    }
  }
});*/

function updateUnderline(clickedButton) {
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.classList.remove('underline');
  });

  clickedButton.classList.add('underline');
}

const showOfficies = document.getElementById('officiesBtn');
const modal = document.querySelector('.modal');
//const modalOverlay = document.querySelector('.modal__overlay');
const body = document.body;
const arrowImg = document.querySelector('.officies__roll img');

showOfficies.addEventListener('click', function () {
  const isModalVisible = modal.style.display === 'block';
  
  if (isModalVisible) {

    modal.style.display = 'none';
    body.style.overflow = 'auto';
    arrowImg.classList.remove('rotate');
  } else {

    modal.style.display = 'block';
    body.style.overflow = 'hidden';
    arrowImg.classList.add('rotate');
  }
});


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
