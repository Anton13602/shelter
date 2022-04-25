/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/pets/sass/pets.scss":
/*!***************************************!*\
  !*** ./src/pages/pets/sass/pets.scss ***!
  \***************************************/
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
  !*** ./src/pages/pets/script.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_pets_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/pets.scss */ "./src/pages/pets/sass/pets.scss");

document.body.style.opacity = 0;
setTimeout(() => {
  document.body.style.opacity = 1;
}, 150);

function sizePageWindow() {
  let n;

  switch (true) {
    case window.screen.width >= 1279.98:
      n = 8;
      break;

    case window.screen.width < 767.98:
      n = 3;
      break;

    default:
      n = 6;
  }

  return n;
}

let amountCards = sizePageWindow();
const url = 'https://anton13602.github.io/JSON_shelter/pets.json';
const urlLocal = '../../assets/json/pagination_pets.json';

async function getPogination() {
  try {
    let resolve = await fetch(url);
    let dog = await resolve.json();
    dog.forEach(element => {
      data.push(element);
    });
  } catch {
    let resolve = await fetch(urlLocal);
    let dog = await resolve.json();
    dog.forEach(element => {
      data.push(element);
    });
  }

  function createCardsPets() {
    contentPagination.innerHTML = '';

    for (let i = 0; i < amountCards; i++) {
      let item = randomArrForPadination[i];
      changeContent(data[item]);
    }
  }

  createCardsPets();
}

getPogination();
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const backgroundColor = document.querySelector('.backgroung');
const headerDeleteZindex = document.querySelector('.header');
const logo = document.querySelector('.header__logo');

if (iconMenu) {
  iconMenu.addEventListener("click", e => {
    e.stopPropagation();
    toggleMenu();
  });

  function closeToggleMenu() {
    if (backgroundColor.classList.contains('open')) {
      menuBody.classList.remove('_active');
      iconMenu.classList.remove('_active');
      backgroundColor.classList.remove('open');
      logo.classList.remove('_active');
      headerDeleteZindex.classList.remove('_delete');
      document.querySelector('body').classList.remove('_lock');
    }
  }

  function toggleMenu() {
    headerDeleteZindex.classList.toggle('_delete');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    logo.classList.toggle('_active');
    backgroundColor.classList.toggle('open');
    document.querySelector('body').classList.toggle('_lock');
    document.addEventListener('click', e => {
      if (!e.target.closest('.menu__body')) {
        closeToggleMenu();
      }
    });
  }
}

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
        document.querySelector('body').classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        backgroundColor.classList.remove('open');
        logo.classList.remove('_active');
        headerDeleteZindex.classList.remove('_delete');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
} /////pagination


const petsNavigation = document.querySelectorAll('.navigation__button');
const counterButton = document.querySelector('.navigation__button_active');
const contentPagination = document.querySelector('.slider-pets__colums');
const data = [];

function maxPagePadination() {
  return Math.ceil(data.length / amountCards);
}

if (petsNavigation) {
  const firstRightNav = document.querySelector('.first-right');
  const lastRightNav = document.querySelector('.last-right');
  const firstLeftNav = document.querySelector('.first-left');
  const lastLeftNav = document.querySelector('.last-left');
  firstRightNav.addEventListener("click", addActive);
  lastRightNav.addEventListener("click", lastActive);

  function addDataActiveLeft() {
    firstLeftNav.classList.add('data-active');
    lastLeftNav.classList.add('data-active');
    firstLeftNav.classList.remove('data-disabled');
    lastLeftNav.classList.remove('data-disabled');
    generateContentPagination();
  }

  function addDataDisabledRigth() {
    firstRightNav.classList.add('data-disabled');
    lastRightNav.classList.add('data-disabled');
    firstRightNav.classList.remove('data-active');
    lastRightNav.classList.remove('data-active');
    generateContentPagination();
  }

  function removeDataActiveLeft() {
    firstLeftNav.classList.remove('data-active');
    lastLeftNav.classList.remove('data-active');
    firstLeftNav.classList.add('data-disabled');
    lastLeftNav.classList.add('data-disabled');
    generateContentPagination();
  }

  function removeDataDisabledRigth() {
    firstRightNav.classList.remove('data-disabled');
    lastRightNav.classList.remove('data-disabled');
    firstRightNav.classList.add('data-active');
    lastRightNav.classList.add('data-active');
    generateContentPagination();
  }

  function addActive() {
    if (+counterButton.innerHTML < maxPagePadination()) {
      counterButton.innerHTML++;
      firstLeftNav.addEventListener("click", removeActive);
      lastLeftNav.addEventListener("click", firstActive);
    }

    addDataActiveLeft();

    if (+counterButton.innerHTML === maxPagePadination()) {
      addDataDisabledRigth();
      firstRightNav.removeEventListener("click", addActive);
      lastRightNav.removeEventListener("click", lastActive);
    }
  }

  function removeActive() {
    if (+counterButton.innerHTML > 1) {
      counterButton.innerHTML--;
      firstRightNav.addEventListener("click", addActive);
      lastRightNav.addEventListener("click", lastActive);
    }

    removeDataDisabledRigth();

    if (+counterButton.innerHTML === 1) {
      removeDataActiveLeft();
      firstLeftNav.removeEventListener("click", removeActive);
      lastLeftNav.removeEventListener("click", firstActive);
    }
  }

  function lastActive() {
    counterButton.innerHTML = maxPagePadination();
    addDataDisabledRigth();
    addDataActiveLeft();
    firstRightNav.removeEventListener("click", addActive);
    lastRightNav.removeEventListener("click", lastActive);
    firstLeftNav.addEventListener("click", removeActive);
    lastLeftNav.addEventListener("click", firstActive);
  }

  function firstActive() {
    counterButton.innerHTML = 1;
    removeDataActiveLeft();
    removeDataDisabledRigth();
    firstRightNav.addEventListener("click", addActive);
    lastRightNav.addEventListener("click", lastActive);
    firstLeftNav.removeEventListener("click", removeActive);
    lastLeftNav.removeEventListener("click", firstActive);
  }
}

function generateContentPagination() {
  contentPagination.innerHTML = '';
  let counter = counterButton.innerHTML;
  let start = (counter - 1) * amountCards;
  let end = start + amountCards;
  let notes = randomArrForPadination.slice(start, end);

  for (let i = 0; i < notes.length; i++) {
    changeContent(data[notes[i]]);
  }
}

function changeContent(content) {
  let card = document.createElement('div');
  card.className = "slider-pets__colum";
  let imgCard = document.createElement('div');
  imgCard.className = "colum__img";
  let img = document.createElement('img');
  img.src = content.img;
  let title = document.createElement('h4');
  title.className = "colum__title";
  title.innerHTML = content.name;
  let button = document.createElement('button');
  button.className = "colum__btn";
  button.innerHTML = "Learn more";
  contentPagination.append(card);
  card.append(imgCard);
  imgCard.append(img);
  card.append(title);
  card.append(button);
  readPopupDom(card);
}

function getRandomSlider(num) {
  let arr = [];

  while (arr.length < num) {
    let random = Math.floor(Math.random() * 8);
    let found = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === random) {
        found = true;
        break;
      }
    }

    if (!found) {
      arr.push(random);
    }
  }

  return arr;
}

const randomArrForPadination = resultArrPagination();

function resultArrPagination() {
  let arr = [];

  for (let i = 0; i < 6; i++) {
    arr.push(...getRandomSlider(8));
  }

  let boolArr = [];

  for (let i = 0; i < arr.length; i = i + amountCards) {
    let firstArr = arr.slice(i, i + amountCards);
    let setArr = [...new Set(firstArr)];
    boolArr.push(firstArr.length === setArr.length);
  }

  let lastArr = boolArr.filter(item => item === false);
  return lastArr.length === 0 ? arr : resultArrPagination();
}

function readPopupDom(card) {
  card.addEventListener('click', e => {
    const nameDog = card.children[1].textContent;
    const imgDog = card.firstElementChild.children[0].src;
    const curentPopup = document.querySelector('.popup');
    popupOpen(curentPopup);
    changeContentPopup(nameDog, imgDog);
  });
}

function getLinkImg(link) {
  const arrLink = link.split('/').map(item => item.toLowerCase());
  return arrLink[arrLink.length - 1];
}

document.querySelectorAll('.close-popup').forEach(closePopup => {
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
  popup.classList.remove('open');
  document.querySelector('.popup__content').classList.remove('open');
  unLockScroll();
}

function lockScroll() {
  const wigthScroll = window.innerWidth - document.querySelector('.wrapper').offsetWidth;
  document.querySelector('body').style.paddingRight = `${wigthScroll}px`;

  if (window.screen.width >= 1279.98) {
    document.querySelector('.header__container').style.paddingRight = `${wigthScroll + 40}px`;
  } else {
    document.querySelector('.header__container').style.paddingRight = `${wigthScroll + 30}px`;
  }

  document.body.classList.add('_lock');
}

function unLockScroll() {
  document.body.classList.remove('_lock');
  document.querySelector('body').style.paddingRight = '0px';

  if (window.screen.width >= 1279.98) {
    document.querySelector('.header__container').style.paddingRight = '40px';
  } else {
    document.querySelector('.header__container').style.paddingRight = '30px';
  }
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
} //window.onload = getPogination;
})();

/******/ })()
;
