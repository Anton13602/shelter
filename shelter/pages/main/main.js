/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/main/script.js":
/*!**********************************!*\
  !*** ./src/pages/main/script.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/pages/main/sass/style.scss\");\n\nconst data = [];\nconst url = 'https://anton13602.github.io/JSON_shelter/pest_main.json';\nconst urlLocal = \"../../assets/json/pets.json\";\n\nasync function getJson() {\n  try {\n    const response = await fetch(url);\n    const dog = await response.json();\n    dog.forEach(element => {\n      data.push(element);\n    });\n  } catch {\n    const response = await fetch(urlLocal);\n    const dog = await response.json();\n    dog.forEach(element => {\n      data.push(element);\n    });\n  }\n}\n\nconst nextBtn = document.querySelector('.button__arrow-next');\nconst prevBtn = document.querySelector('.button__arrow-prev');\nconst carousel = document.querySelector('.pets__slider');\nconst sliderLeftsImg = document.querySelectorAll('.slider-left .colum__img img');\nconst sliderLeftTitle = document.querySelectorAll('.slider-left .colum__title');\nconst sliderRigthTitle = document.querySelectorAll('.slider-rigth .colum__title');\nconst sliderRigthImg = document.querySelectorAll('.slider-rigth .colum__img img');\n\nconst moveLeft = () => {\n  carousel.classList.add(\"transition-left\");\n  prevBtn.removeEventListener(\"click\", moveLeft);\n  nextBtn.removeEventListener(\"click\", moveRight);\n};\n\nconst moveRight = () => {\n  carousel.classList.add(\"transition-right\");\n  prevBtn.removeEventListener(\"click\", moveLeft);\n  nextBtn.removeEventListener(\"click\", moveRight);\n};\n\nprevBtn.addEventListener(\"click\", moveLeft);\nnextBtn.addEventListener(\"click\", moveRight);\ncarousel.addEventListener(\"animationend\", event => {\n  if (event.animationName === \"move-left\") {\n    carousel.classList.remove(\"transition-left\");\n    const leftSlider = document.querySelector('.slider-left');\n    document.querySelector(\".slider-head\").innerHTML = leftSlider.innerHTML;\n  } else {\n    carousel.classList.remove(\"transition-right\");\n    const rightSlider = document.querySelector('.slider-rigth');\n    document.querySelector(\".slider-head\").innerHTML = rightSlider.innerHTML;\n  }\n\n  changeSlide();\n  readPopupDom();\n  prevBtn.addEventListener(\"click\", moveLeft);\n  nextBtn.addEventListener(\"click\", moveRight);\n});\n\nfunction startArrayCards() {\n  let arr = [];\n\n  for (let i = 0; i < sliderLeftTitle.length; i++) {\n    for (let j = 0; j < data.length; j++) {\n      if (sliderLeftTitle[i].innerHTML === data[j].name) {\n        arr.push(j);\n        break;\n      }\n    }\n  }\n\n  return arr;\n}\n\nfunction getRandomSlider(n) {\n  let res = [];\n  let firstArr;\n\n  switch (true) {\n    case window.screen.width >= 1279.98:\n      firstArr = startArrayCards();\n      break;\n\n    case window.screen.width < 767.98:\n      firstArr = startArrayCards().slice(0, 1);\n      break;\n\n    default:\n      firstArr = startArrayCards().slice(0, 2);\n  }\n\n  while (res.length < n) {\n    let random = Math.floor(Math.random() * data.length);\n    let found = false;\n\n    if (res.includes(random)) {\n      found = true;\n    }\n\n    if (!found) {\n      res.push(random);\n    }\n  }\n\n  let newArr = [...res, ...firstArr];\n  let setArr = [...new Set(newArr)].length;\n  let sumLength = res.length + firstArr.length;\n  return setArr === sumLength ? res : getRandomSlider(n);\n}\n\nfunction numberOfSlides() {\n  let n;\n\n  switch (true) {\n    case window.screen.width >= 1279.98:\n      n = 3;\n      break;\n\n    case window.screen.width < 767.98:\n      n = 1;\n      break;\n\n    default:\n      n = 2;\n  }\n\n  return getRandomSlider(n);\n}\n\nfunction changeSlide() {\n  let newArr = numberOfSlides();\n\n  for (let i = 0; i < newArr.length; i++) {\n    sliderLeftsImg[i].src = data[newArr[i]].img;\n    sliderLeftTitle[i].innerHTML = data[newArr[i]].name;\n    sliderRigthTitle[i].innerHTML = data[newArr[i]].name;\n    sliderRigthImg[i].src = data[newArr[i]].img;\n  }\n} //close\n\n\nconst popupCloseIcon = document.querySelectorAll('.close-popup');\n\nfunction getLinkImg(link) {\n  const arrLink = link.split('/').map(item => item.toLowerCase());\n  return arrLink[arrLink.length - 1];\n}\n\nfunction readPopupDom() {\n  const popupLinks = document.querySelectorAll('.slider-head .popup-link');\n  popupLinks.forEach(popupLink => {\n    popupLink.addEventListener('click', () => {\n      const nameDog = popupLink.children[1].textContent;\n      const imgDog = popupLink.firstElementChild.children[0].src;\n      const curentPopup = document.querySelector('.popup');\n      popupOpen(curentPopup);\n      changeContentPopup(nameDog, imgDog);\n    });\n  });\n}\n\nreadPopupDom();\npopupCloseIcon.forEach(closePopup => {\n  closePopup.addEventListener('click', e => {\n    popupClose(closePopup.closest('.popup'));\n  });\n});\n\nfunction popupOpen(curentPopup) {\n  lockScroll();\n  curentPopup.classList.add('open');\n  document.querySelector('.popup__content').classList.add('open');\n  curentPopup.addEventListener('click', e => {\n    if (!e.target.closest('.popup__content')) {\n      popupClose(e.target.closest('.popup'));\n    }\n  });\n}\n\nfunction popupClose(popup) {\n  unLockScroll();\n  popup.classList.remove('open');\n  document.querySelector('.popup__content').classList.remove('open');\n  document.body.querySelector('._lock');\n}\n\nfunction lockScroll() {\n  const wigthScroll = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';\n  document.querySelector('body').style.paddingRight = wigthScroll;\n  document.body.classList.add('_lock');\n}\n\nfunction unLockScroll() {\n  document.querySelector('body').style.paddingRight = '0px';\n  document.body.classList.remove('_lock');\n}\n\nfunction changeContentPopup(nameDog, imgDog) {\n  const popupNameDog = document.querySelector('.body-popup__title');\n  const popupImgDog = document.querySelector('.body-popup__img img');\n  const popupTypeDog = document.querySelector('.body-popup__sybtitle');\n  const popupDescriptionDog = document.querySelector('.body-popup__text');\n  const popupList = document.querySelectorAll('.body-popup__list p');\n  let index = 0;\n\n  for (let i = 0; i < data.length; i++) {\n    if (nameDog === data[i].name) {\n      index = i;\n    }\n  }\n\n  popupNameDog.innerHTML = data[index].name;\n  popupImgDog.src = data[index].img;\n  popupTypeDog.innerHTML = `${data[index].type}` + ' - ' + `${data[index].breed}`;\n  popupDescriptionDog.innerHTML = data[index].description;\n  popupList[0].innerHTML = data[index].age;\n  popupList[1].innerHTML = data[index].inoculations;\n  popupList[2].innerHTML = data[index].diseases;\n  popupList[3].innerHTML = data[index].parasites;\n} //---------------------------------------Burger menu\n\n\nconst iconMenu = document.querySelector('.menu__icon');\nconst menuBody = document.querySelector('.menu__body');\nconst backgroundColor = document.querySelector('.backgroung');\nconst logo = document.querySelector('.header__logo');\n\nfunction toggleMenu() {\n  menuBody.classList.toggle('_active');\n  iconMenu.classList.toggle('_active');\n  document.querySelector('body').classList.toggle('_lock');\n  logo.classList.toggle('_active');\n  backgroundColor.classList.toggle('open');\n  document.addEventListener('click', e => {\n    if (!e.target.closest('.menu__body')) {\n      closeToggleMenu();\n    }\n  });\n}\n\nfunction closeToggleMenu() {\n  if (backgroundColor.classList.contains('open')) {\n    menuBody.classList.remove('_active');\n    iconMenu.classList.remove('_active');\n    backgroundColor.classList.remove('open');\n    logo.classList.remove('_active');\n    document.querySelector('body').classList.remove('_lock');\n  }\n}\n\niconMenu.addEventListener(\"click\", e => {\n  e.stopPropagation();\n  toggleMenu();\n}); //--------------------------------------------------nav-link\n\nconst menuLinks = document.querySelectorAll('.menu__link[data-goto]');\n\nif (menuLinks.length > 0) {\n  menuLinks.forEach(menuLink => {\n    menuLink.addEventListener(\"click\", onMenuLinkClick);\n  });\n\n  function onMenuLinkClick(e) {\n    const menuLink = e.target;\n\n    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {\n      const gotoBlock = document.querySelector(menuLink.dataset.goto);\n      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;\n\n      if (iconMenu.classList.contains('_active')) {\n        logo.classList.remove('_active');\n        iconMenu.classList.remove('_active');\n        menuBody.classList.remove('_active');\n        backgroundColor.classList.remove('open');\n        document.querySelector('body').classList.remove('_lock');\n      }\n\n      window.scrollTo({\n        top: gotoBlockValue,\n        behavior: \"smooth\"\n      });\n      e.preventDefault();\n    }\n  }\n}\n\nconst anchorLink = document.querySelectorAll('.anchor__link[data-goto]');\n\nif (anchorLink.length > 0) {\n  anchorLink.forEach(link => {\n    link.addEventListener(\"click\", onMenuLinkClick);\n  });\n\n  function onMenuLinkClick(e) {\n    const anchorLink = e.target;\n\n    if (anchorLink.dataset.goto && document.querySelector(anchorLink.dataset.goto)) {\n      const gotoBlock = document.querySelector(anchorLink.dataset.goto);\n      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;\n      window.scrollTo({\n        top: gotoBlockValue,\n        behavior: \"smooth\"\n      });\n      e.preventDefault();\n    }\n  }\n}\n\nwindow.onload = getJson;\n\n//# sourceURL=webpack://webpack4.0/./src/pages/main/script.js?");

/***/ }),

/***/ "./src/pages/main/sass/style.scss":
/*!****************************************!*\
  !*** ./src/pages/main/sass/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack4.0/./src/pages/main/sass/style.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/main/script.js");
/******/ 	
/******/ })()
;