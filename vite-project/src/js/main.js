'use strict'

import '../scss/style.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import gsap from 'gsap';
import ScrollTrigger  from "gsap/ScrollTrigger";

const showOfficies = document.getElementById('officiesBtn');
const modal = document.querySelector('.modal');
const body = document.body;
const arrowImg = document.querySelector('.officies__roll img');
const filterBtns = document.querySelector('.officies__list');
const newLists = document.getElementById('newList');


function showMobileMenu() {
  const newList = `
    <div class="list__container">
    <div class="list__item">
    <div class='item'>
      <p>Москва</p>
      <button class='listBtn'><img src="./public/icons/arrow.png" alt="arrow"></button>
    </div>
    <ul>
      <li>Москва</li>
    </ul>
  </div>
  <div class="list__item">
    <div class='item'>
      <p>Центр</p>
      <button class='listBtn'><img src="./public/icons/arrow.png" alt="arrow"></button>
    </div>
    <ul>
      <li>Воронеж</li>
      <li>Ярославль</li>
      <li>Белгород</li>
    </ul>
  </div>
  <div class="list__item">
    <div class='item'>
      <p>Северо-<br>запад</p>
      <button class='listBtn'><img src="./public/icons/arrow.png" alt="arrow"></button>
    </div>
    <ul>
      <li>Санкт-Петербург</li>
      <li>Калининград</li>
    </ul>
  </div>
  <div class="list__item">
    <div class='item'>
      <p>Юг</p>
      <button class='listBtn'><img src="./public/icons/arrow.png" alt="arrow"></button>
    </div>
    <ul>
      <li>Ростов-на-<br>Дону</li>
      <li>Краснодар</li>
      <li>Волгоград</li>
    </ul>
  </div>
  <div class="list__item">
    <div class='item'>
      <p>Волга</p>
      <button class='listBtn'><img src="./public/icons/arrow.png" alt="arrow"></button>
    </div>
    <ul>
      <li>Казань</li>
      <li>Самара</li>
      <li>Уфа</li>
      <li>Оренбург</li>
      <li>Нижний <br> Новгород</li>
    </ul>
  </div>
  <div class="list__item">
    <div class='item'>
      <p>Урал</p>
      <button class='listBtn'><img src="./public/icons/arrow.png" alt="arrow"></button>
    </div>
    <ul>
      <li>Екатеринбург</li>
      <li>Челябинск</li>
      <li>Пермь</li>
      <li>Сургут</li>
      <li>Тюмень</li>
      <li>Ижевск</li>
    </ul>
  </div>
  <div class="list__item">
    <div class='item'>
      <p>Сибирь</p>
      <button class='listBtn'><img src="./public/icons/arrow.png" alt="arrow"></button>
    </div>
    <ul>
      <li>Новосибирск</li>
      <li>Омск</li>
      <li>Томск</li>
      <li>Красноярск</li>
      <li>Иркутск</li>
    </ul>
  </div>
  <div class="list__item">
    <div class='item'>
      <p>Дальний <br> восток</p>
      <button class='listBtn'><img src="./public/icons/arrow.png" alt="arrow"></button>
    </div>
    <ul>
      <li>Хабаровск</li>
      <li>Владивосток</li>
    </ul>
  </div>
    </div>
  `;
  
  newLists.innerHTML = newList;
  const listBtns = document.querySelectorAll('.listBtn');
  const listBtnsImg = document.querySelectorAll('.item img');
  const nameItems = document.querySelectorAll('.item p');
  const listItems = document.querySelectorAll('.list__item ul');

  listBtns.forEach((listBtn, index1) => {
    listBtn.addEventListener('click', function() {
      nameItems.forEach((nameItem, index4) => {
        if (index1 === index4) {
          nameItem.style.color = nameItem.style.color === 'rgb(163, 12, 51)' ? 'rgba(68, 68, 68, 1)' : '#A30C33';
        }
      })
      listBtnsImg.forEach((listBtnImg, index3) => {
        if (index1 === index3) {
          listBtnImg.classList.toggle('rotate');
        }
      });
      listItems.forEach((listItem, index2) => {
        if (index1 === index2) {
          listItem.style.display = (listItem.style.display === 'flex') ? 'none' : 'flex';
        } 
      })
    })
  })
}

function showDesktopModal() {
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
  arrowImg.classList.add('rotate');
}

function hideDesktopModal() {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
  arrowImg.classList.remove('rotate');
}

function handleWindowSizeChange() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1025) {
    hideDesktopModal();
  }
}

function toggleMobileMenu() {
  if (newLists.children.length > 0) {
    arrowImg.classList.remove('rotate');
    filterBtns.style.display = 'block';
    newLists.innerHTML = '';
  } else {
    arrowImg.classList.add('rotate');
    filterBtns.style.display = 'none';
    showMobileMenu();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  showOfficies.addEventListener('click', function() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1024) {
      toggleMobileMenu();
    } else {
      if (modal.style.display === 'block') {
        hideDesktopModal();
      } else {
        showDesktopModal();
      }
    }
  });
});

const introBtn = document.querySelectorAll('.introBtn');
const wrapBtn = document.querySelectorAll('.imgWrap');
const imgWrap = document.querySelectorAll('.intro__button img');
introBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    
      imgWrap[index].classList.toggle('rotate');

      
      if (wrapBtn[index].style.height === '240px') {
          wrapBtn[index].style.height = '60px'; 
          wrapBtn[index].style.overflow = 'hidden';
    
      } else {
          wrapBtn[index].style.height = '240px';
          wrapBtn[index].style.overflow = 'visible';
          
      }
  });
});


function animation(){
  gsap.registerPlugin(ScrollTrigger);
  let mediaAnimation = gsap.matchMedia();

  mediaAnimation.add("(min-width: 1025px)", () => {
    
    const tlFirstPage = gsap.timeline({})
    tlFirstPage.to('.first-page__title', {
      duration: 1,
      delay: 0.6,
      xPercent: -13,
      ease: 'back.out(1.1)'
    })
    .to('.first-page__link', {
      duration: 1,
      delay: 0.6,
      xPercent: -50,
      ease: 'back.out(1.1)'
    }, '<')
  
    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: '.about',
        start: 'top 15%',
        scrub: 0.5,
        pin: true
      }
    })
      tlText.to('.about__text p', {
        scale:1
      })
  
        const tlMission = gsap.timeline({
          scrollTrigger: {
            trigger: '.mission',
            start: 'top 15%',
            scrub: 0.5,
            pin: true
          }
        })
        tlMission.to('.mission__text', {
          scale:1
        })
        tlMission.to('.mission__title', {
          scale:1
        }, '>')

      })

      mediaAnimation.add("(max-width: 768px)", () => {
        const tlFirstPage = gsap.timeline({})
        tlFirstPage.to('.first-page__title', {
          duration: 1,
          delay: 0.6,
          xPercent: 0,
          ease: 'back.out(1.1)'
        })
        .to('.first-page__link', {
          duration: 1,
          delay: 0.6,
          xPercent: 0,
          ease: 'back.out(1.1)'
        }, '<')
        const tlText = gsap.timeline({
          scrollTrigger: {
            trigger: '.about',
            start: 'top 75%',
            scrub: 0.5,
            //pin: true
          }
        })
          tlText.to('.about__text p', {
            scale:1
          })
      
            const tlMission = gsap.timeline({
              scrollTrigger: {
                trigger: '.mission',
                start: 'top 75%',
                scrub: 0.5,
                //pin: true
              }
            })
            tlMission.to('.mission__text', {
              scale:1
            })
            tlMission.to('.mission__title', {
              scale:1
            }, '<')
    
  
    });
}




window.addEventListener('DOMContentLoaded', () => {
  animation();
  window.addEventListener('resize', () => {
    handleWindowSizeChange();
  })
})

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
