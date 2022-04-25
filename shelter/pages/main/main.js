/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/main/sass/style.scss":
/*!****************************************!*\
  !*** ./src/pages/main/sass/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/pages/main/script.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/pages/main/sass/style.scss");

const data = [];
const url = 'https://anton13602.github.io/JSON_shelter/pest_main.jsonsss';
const urlLocal = "../../assets/json/pets.json";

async function getJson() {
  try {
    const response = await fetch(url);
    const dog = await response.json();
    dog.forEach(element => {
      data.push(element);
    });
  } catch {
    const response = await fetch(urlLocal);
    const dog = await response.json();
    dog.forEach(element => {
      data.push(element);
    });
  }
}

const nextBtn = document.querySelector('.button__arrow-next');
const prevBtn = document.querySelector('.button__arrow-prev');
const carousel = document.querySelector('.pets__slider');
const sliderLeftsImg = document.querySelectorAll('.slider-left .colum__img img');
const sliderLeftTitle = document.querySelectorAll('.slider-left .colum__title');
const sliderRigthTitle = document.querySelectorAll('.slider-rigth .colum__title');
const sliderRigthImg = document.querySelectorAll('.slider-rigth .colum__img img');

const moveLeft = () => {
  carousel.classList.add("transition-left");
  prevBtn.removeEventListener("click", moveLeft);
  nextBtn.removeEventListener("click", moveRight);
};

const moveRight = () => {
  carousel.classList.add("transition-right");
  prevBtn.removeEventListener("click", moveLeft);
  nextBtn.removeEventListener("click", moveRight);
};

prevBtn.addEventListener("click", moveLeft);
nextBtn.addEventListener("click", moveRight);
carousel.addEventListener("animationend", event => {
  if (event.animationName === "move-left") {
    carousel.classList.remove("transition-left");
    const leftSlider = document.querySelector('.slider-left');
    document.querySelector(".slider-head").innerHTML = leftSlider.innerHTML;
  } else {
    carousel.classList.remove("transition-right");
    const rightSlider = document.querySelector('.slider-rigth');
    document.querySelector(".slider-head").innerHTML = rightSlider.innerHTML;
  }

  changeSlide();
  readPopupDom();
  prevBtn.addEventListener("click", moveLeft);
  nextBtn.addEventListener("click", moveRight);
});

function startArrayCards() {
  let arr = [];

  for (let i = 0; i < sliderLeftTitle.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (sliderLeftTitle[i].innerHTML === data[j].name) {
        arr.push(j);
        break;
      }
    }
  }

  return arr;
}

function getRandomSlider(n) {
  let res = [];
  let firstArr;

  switch (true) {
    case window.screen.width >= 1279.98:
      firstArr = startArrayCards();
      break;

    case window.screen.width < 767.98:
      firstArr = startArrayCards().slice(0, 1);
      break;

    default:
      firstArr = startArrayCards().slice(0, 2);
  }

  while (res.length < n) {
    let random = Math.floor(Math.random() * data.length);
    let found = false;

    if (res.includes(random)) {
      found = true;
    }

    if (!found) {
      res.push(random);
    }
  }

  let newArr = [...res, ...firstArr];
  let setArr = [...new Set(newArr)].length;
  let sumLength = res.length + firstArr.length;
  return setArr === sumLength ? res : getRandomSlider(n);
}

function numberOfSlides() {
  let n;

  switch (true) {
    case window.screen.width >= 1279.98:
      n = 3;
      break;

    case window.screen.width < 767.98:
      n = 1;
      break;

    default:
      n = 2;
  }

  return getRandomSlider(n);
}

function changeSlide() {
  let newArr = numberOfSlides();

  for (let i = 0; i < newArr.length; i++) {
    sliderLeftsImg[i].src = data[newArr[i]].img;
    sliderLeftTitle[i].innerHTML = data[newArr[i]].name;
    sliderRigthTitle[i].innerHTML = data[newArr[i]].name;
    sliderRigthImg[i].src = data[newArr[i]].img;
  }
} //close


const popupCloseIcon = document.querySelectorAll('.close-popup');

function getLinkImg(link) {
  const arrLink = link.split('/').map(item => item.toLowerCase());
  return arrLink[arrLink.length - 1];
}

function readPopupDom() {
  const popupLinks = document.querySelectorAll('.slider-head .popup-link');
  popupLinks.forEach(popupLink => {
    popupLink.addEventListener('click', () => {
      const nameDog = popupLink.children[1].textContent;
      const imgDog = popupLink.firstElementChild.children[0].src;
      const curentPopup = document.querySelector('.popup');
      popupOpen(curentPopup);
      changeContentPopup(nameDog, imgDog);
    });
  });
}

readPopupDom();
popupCloseIcon.forEach(closePopup => {
  closePopup.addEventListener('click', e => {
    popupClose(closePopup.closest('.popup'));
  });
});

function popupOpen(curentPopup) {
  lockScroll();
  curentPopup.classList.add('open');
  document.querySelector('.popup__content').classList.add('open');
  curentPopup.addEventListener('click', e => {
    if (!e.target.closest('.popup__content')) {
      popupClose(e.target.closest('.popup'));
    }
  });
}

function popupClose(popup) {
  unLockScroll();
  popup.classList.remove('open');
  document.querySelector('.popup__content').classList.remove('open');
  document.body.querySelector('._lock');
}

function lockScroll() {
  const wigthScroll = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  document.querySelector('body').style.paddingRight = wigthScroll;
  document.body.classList.add('_lock');
}

function unLockScroll() {
  document.querySelector('body').style.paddingRight = '0px';
  document.body.classList.remove('_lock');
}

function changeContentPopup(nameDog, imgDog) {
  const popupNameDog = document.querySelector('.body-popup__title');
  const popupImgDog = document.querySelector('.body-popup__img img');
  const popupTypeDog = document.querySelector('.body-popup__sybtitle');
  const popupDescriptionDog = document.querySelector('.body-popup__text');
  const popupList = document.querySelectorAll('.body-popup__list p');
  let index = 0;

  for (let i = 0; i < data.length; i++) {
    if (nameDog === data[i].name && getLinkImg(imgDog) === getLinkImg(data[i].img)) {
      index = i;
    }
  }

  popupNameDog.innerHTML = data[index].name;
  popupImgDog.src = data[index].img;
  popupTypeDog.innerHTML = `${data[index].type}` + ' - ' + `${data[index].breed}`;
  popupDescriptionDog.innerHTML = data[index].description;
  popupList[0].innerHTML = data[index].age;
  popupList[1].innerHTML = data[index].inoculations;
  popupList[2].innerHTML = data[index].diseases;
  popupList[3].innerHTML = data[index].parasites;
} //---------------------------------------Burger menu


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const backgroundColor = document.querySelector('.backgroung');
const logo = document.querySelector('.header__logo');

function toggleMenu() {
  menuBody.classList.toggle('_active');
  iconMenu.classList.toggle('_active');
  document.querySelector('body').classList.toggle('_lock');
  logo.classList.toggle('_active');
  backgroundColor.classList.toggle('open');
  document.addEventListener('click', e => {
    if (!e.target.closest('.menu__body')) {
      closeToggleMenu();
    }
  });
}

function closeToggleMenu() {
  if (backgroundColor.classList.contains('open')) {
    menuBody.classList.remove('_active');
    iconMenu.classList.remove('_active');
    backgroundColor.classList.remove('open');
    logo.classList.remove('_active');
    document.querySelector('body').classList.remove('_lock');
  }
}

iconMenu.addEventListener("click", e => {
  e.stopPropagation();
  toggleMenu();
}); //--------------------------------------------------nav-link

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;

      if (iconMenu.classList.contains('_active')) {
        logo.classList.remove('_active');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        backgroundColor.classList.remove('open');
        document.querySelector('body').classList.remove('_lock');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

const anchorLink = document.querySelectorAll('.anchor__link[data-goto]');

if (anchorLink.length > 0) {
  anchorLink.forEach(link => {
    link.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const anchorLink = e.target;

    if (anchorLink.dataset.goto && document.querySelector(anchorLink.dataset.goto)) {
      const gotoBlock = document.querySelector(anchorLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

window.onload = getJson;
})();

/******/ })()
;
