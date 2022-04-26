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

/***/ "./src/pages/pets/script.js":
/*!**********************************!*\
  !*** ./src/pages/pets/script.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_pets_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/pets.scss */ \"./src/pages/pets/sass/pets.scss\");\n\ndocument.body.style.opacity = 0;\nsetTimeout(() => {\n  document.body.style.opacity = 1;\n}, 150);\n\nfunction sizePageWindow() {\n  let n;\n\n  switch (true) {\n    case window.screen.width >= 1279.98:\n      n = 8;\n      break;\n\n    case window.screen.width < 767.98:\n      n = 3;\n      break;\n\n    default:\n      n = 6;\n  }\n\n  return n;\n}\n\nlet amountCards = sizePageWindow();\nconst url = 'https://anton13602.github.io/JSON_shelter/pets.json';\nconst urlLocal = '../../assets/json/pagination_pets.json';\n\nasync function getPogination() {\n  try {\n    let resolve = await fetch(url);\n    let dog = await resolve.json();\n    dog.forEach(element => {\n      data.push(element);\n    });\n  } catch {\n    let resolve = await fetch(urlLocal);\n    let dog = await resolve.json();\n    dog.forEach(element => {\n      data.push(element);\n    });\n  }\n\n  function createCardsPets() {\n    contentPagination.innerHTML = '';\n\n    for (let i = 0; i < amountCards; i++) {\n      let item = randomArrForPadination[i];\n      changeContent(data[item]);\n    }\n  }\n\n  createCardsPets();\n}\n\ngetPogination();\nconst iconMenu = document.querySelector('.menu__icon');\nconst menuBody = document.querySelector('.menu__body');\nconst backgroundColor = document.querySelector('.backgroung');\nconst headerDeleteZindex = document.querySelector('.header');\nconst logo = document.querySelector('.header__logo');\n\nif (iconMenu) {\n  iconMenu.addEventListener(\"click\", e => {\n    e.stopPropagation();\n    toggleMenu();\n  });\n\n  function closeToggleMenu() {\n    if (backgroundColor.classList.contains('open')) {\n      menuBody.classList.remove('_active');\n      iconMenu.classList.remove('_active');\n      backgroundColor.classList.remove('open');\n      logo.classList.remove('_active');\n      headerDeleteZindex.classList.remove('_delete');\n      document.querySelector('body').classList.remove('_lock');\n    }\n  }\n\n  function toggleMenu() {\n    headerDeleteZindex.classList.toggle('_delete');\n    iconMenu.classList.toggle('_active');\n    menuBody.classList.toggle('_active');\n    logo.classList.toggle('_active');\n    backgroundColor.classList.toggle('open');\n    document.querySelector('body').classList.toggle('_lock');\n    document.addEventListener('click', e => {\n      if (!e.target.closest('.menu__body')) {\n        closeToggleMenu();\n      }\n    });\n  }\n}\n\nconst menuLinks = document.querySelectorAll('.menu__link[data-goto]');\n\nif (menuLinks.length > 0) {\n  menuLinks.forEach(menuLink => {\n    menuLink.addEventListener(\"click\", onMenuLinkClick);\n  });\n\n  function onMenuLinkClick(e) {\n    const menuLink = e.target;\n\n    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {\n      const gotoBlock = document.querySelector(menuLink.dataset.goto);\n      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;\n\n      if (iconMenu.classList.contains('_active')) {\n        document.querySelector('body').classList.remove('_lock');\n        iconMenu.classList.remove('_active');\n        menuBody.classList.remove('_active');\n        backgroundColor.classList.remove('open');\n        logo.classList.remove('_active');\n        headerDeleteZindex.classList.remove('_delete');\n      }\n\n      window.scrollTo({\n        top: gotoBlockValue,\n        behavior: \"smooth\"\n      });\n      e.preventDefault();\n    }\n  }\n} /////pagination\n\n\nconst petsNavigation = document.querySelectorAll('.navigation__button');\nconst counterButton = document.querySelector('.navigation__button_active');\nconst contentPagination = document.querySelector('.slider-pets__colums');\nconst data = [];\n\nfunction maxPagePadination() {\n  return Math.ceil(data.length / amountCards);\n}\n\nif (petsNavigation) {\n  const firstRightNav = document.querySelector('.first-right');\n  const lastRightNav = document.querySelector('.last-right');\n  const firstLeftNav = document.querySelector('.first-left');\n  const lastLeftNav = document.querySelector('.last-left');\n  firstRightNav.addEventListener(\"click\", addActive);\n  lastRightNav.addEventListener(\"click\", lastActive);\n\n  function addDataActiveLeft() {\n    firstLeftNav.classList.add('data-active');\n    lastLeftNav.classList.add('data-active');\n    firstLeftNav.classList.remove('data-disabled');\n    lastLeftNav.classList.remove('data-disabled');\n    generateContentPagination();\n  }\n\n  function addDataDisabledRigth() {\n    firstRightNav.classList.add('data-disabled');\n    lastRightNav.classList.add('data-disabled');\n    firstRightNav.classList.remove('data-active');\n    lastRightNav.classList.remove('data-active');\n    generateContentPagination();\n  }\n\n  function removeDataActiveLeft() {\n    firstLeftNav.classList.remove('data-active');\n    lastLeftNav.classList.remove('data-active');\n    firstLeftNav.classList.add('data-disabled');\n    lastLeftNav.classList.add('data-disabled');\n    generateContentPagination();\n  }\n\n  function removeDataDisabledRigth() {\n    firstRightNav.classList.remove('data-disabled');\n    lastRightNav.classList.remove('data-disabled');\n    firstRightNav.classList.add('data-active');\n    lastRightNav.classList.add('data-active');\n    generateContentPagination();\n  }\n\n  function addActive() {\n    if (+counterButton.innerHTML < maxPagePadination()) {\n      counterButton.innerHTML++;\n      firstLeftNav.addEventListener(\"click\", removeActive);\n      lastLeftNav.addEventListener(\"click\", firstActive);\n    }\n\n    addDataActiveLeft();\n\n    if (+counterButton.innerHTML === maxPagePadination()) {\n      addDataDisabledRigth();\n      firstRightNav.removeEventListener(\"click\", addActive);\n      lastRightNav.removeEventListener(\"click\", lastActive);\n    }\n  }\n\n  function removeActive() {\n    if (+counterButton.innerHTML > 1) {\n      counterButton.innerHTML--;\n      firstRightNav.addEventListener(\"click\", addActive);\n      lastRightNav.addEventListener(\"click\", lastActive);\n    }\n\n    removeDataDisabledRigth();\n\n    if (+counterButton.innerHTML === 1) {\n      removeDataActiveLeft();\n      firstLeftNav.removeEventListener(\"click\", removeActive);\n      lastLeftNav.removeEventListener(\"click\", firstActive);\n    }\n  }\n\n  function lastActive() {\n    counterButton.innerHTML = maxPagePadination();\n    addDataDisabledRigth();\n    addDataActiveLeft();\n    firstRightNav.removeEventListener(\"click\", addActive);\n    lastRightNav.removeEventListener(\"click\", lastActive);\n    firstLeftNav.addEventListener(\"click\", removeActive);\n    lastLeftNav.addEventListener(\"click\", firstActive);\n  }\n\n  function firstActive() {\n    counterButton.innerHTML = 1;\n    removeDataActiveLeft();\n    removeDataDisabledRigth();\n    firstRightNav.addEventListener(\"click\", addActive);\n    lastRightNav.addEventListener(\"click\", lastActive);\n    firstLeftNav.removeEventListener(\"click\", removeActive);\n    lastLeftNav.removeEventListener(\"click\", firstActive);\n  }\n}\n\nfunction generateContentPagination() {\n  contentPagination.innerHTML = '';\n  let counter = counterButton.innerHTML;\n  let start = (counter - 1) * amountCards;\n  let end = start + amountCards;\n  let notes = randomArrForPadination.slice(start, end);\n\n  for (let i = 0; i < notes.length; i++) {\n    changeContent(data[notes[i]]);\n  }\n}\n\nfunction changeContent(content) {\n  let card = document.createElement('div');\n  card.className = \"slider-pets__colum\";\n  let imgCard = document.createElement('div');\n  imgCard.className = \"colum__img\";\n  let img = document.createElement('img');\n  img.src = content.img;\n  let title = document.createElement('h4');\n  title.className = \"colum__title\";\n  title.innerHTML = content.name;\n  let button = document.createElement('button');\n  button.className = \"colum__btn\";\n  button.innerHTML = \"Learn more\";\n  contentPagination.append(card);\n  card.append(imgCard);\n  imgCard.append(img);\n  card.append(title);\n  card.append(button);\n  readPopupDom(card);\n}\n\nfunction getRandomSlider(num) {\n  let arr = [];\n\n  while (arr.length < num) {\n    let random = Math.floor(Math.random() * 8);\n    let found = false;\n\n    for (let i = 0; i < arr.length; i++) {\n      if (arr[i] === random) {\n        found = true;\n        break;\n      }\n    }\n\n    if (!found) {\n      arr.push(random);\n    }\n  }\n\n  return arr;\n}\n\nconst randomArrForPadination = resultArrPagination();\n\nfunction resultArrPagination() {\n  let arr = [];\n\n  for (let i = 0; i < 6; i++) {\n    arr.push(...getRandomSlider(8));\n  }\n\n  let boolArr = [];\n\n  for (let i = 0; i < arr.length; i = i + amountCards) {\n    let firstArr = arr.slice(i, i + amountCards);\n    let setArr = [...new Set(firstArr)];\n    boolArr.push(firstArr.length === setArr.length);\n  }\n\n  let lastArr = boolArr.filter(item => item === false);\n  return lastArr.length === 0 ? arr : resultArrPagination();\n}\n\nfunction readPopupDom(card) {\n  card.addEventListener('click', e => {\n    const nameDog = card.children[1].textContent;\n    const imgDog = card.firstElementChild.children[0].src;\n    const curentPopup = document.querySelector('.popup');\n    popupOpen(curentPopup);\n    changeContentPopup(nameDog, imgDog);\n  });\n}\n\nfunction getLinkImg(link) {\n  const arrLink = link.split('/').map(item => item.toLowerCase());\n  return arrLink[arrLink.length - 1];\n}\n\ndocument.querySelectorAll('.close-popup').forEach(closePopup => {\n  closePopup.addEventListener('click', e => {\n    popupClose(closePopup.closest('.popup'));\n  });\n});\n\nfunction popupOpen(curentPopup) {\n  lockScroll();\n  curentPopup.classList.add('open');\n  document.querySelector('.popup__content').classList.add('open');\n  curentPopup.addEventListener('click', e => {\n    if (!e.target.closest('.popup__content')) {\n      popupClose(e.target.closest('.popup'));\n    }\n  });\n}\n\nfunction popupClose(popup) {\n  popup.classList.remove('open');\n  document.querySelector('.popup__content').classList.remove('open');\n  unLockScroll();\n}\n\nfunction lockScroll() {\n  const wigthScroll = window.innerWidth - document.querySelector('.wrapper').offsetWidth;\n  document.querySelector('body').style.paddingRight = `${wigthScroll}px`;\n\n  if (window.screen.width >= 1279.98) {\n    document.querySelector('.header__container').style.paddingRight = `${wigthScroll + 40}px`;\n  } else {\n    document.querySelector('.header__container').style.paddingRight = `${wigthScroll + 30}px`;\n  }\n\n  document.body.classList.add('_lock');\n}\n\nfunction unLockScroll() {\n  document.body.classList.remove('_lock');\n  document.querySelector('body').style.paddingRight = '0px';\n\n  if (window.screen.width >= 1279.98) {\n    document.querySelector('.header__container').style.paddingRight = '40px';\n  } else {\n    document.querySelector('.header__container').style.paddingRight = '30px';\n  }\n}\n\nfunction changeContentPopup(nameDog, imgDog) {\n  const popupNameDog = document.querySelector('.body-popup__title');\n  const popupImgDog = document.querySelector('.body-popup__img img');\n  const popupTypeDog = document.querySelector('.body-popup__sybtitle');\n  const popupDescriptionDog = document.querySelector('.body-popup__text');\n  const popupList = document.querySelectorAll('.body-popup__list p');\n  let index = 0;\n\n  for (let i = 0; i < data.length; i++) {\n    if (nameDog === data[i].name && getLinkImg(imgDog) === getLinkImg(data[i].img)) {\n      index = i;\n    }\n  }\n\n  popupNameDog.innerHTML = data[index].name;\n  popupImgDog.src = data[index].img;\n  popupTypeDog.innerHTML = `${data[index].type}` + ' - ' + `${data[index].breed}`;\n  popupDescriptionDog.innerHTML = data[index].description;\n  popupList[0].innerHTML = data[index].age;\n  popupList[1].innerHTML = data[index].inoculations;\n  popupList[2].innerHTML = data[index].diseases;\n  popupList[3].innerHTML = data[index].parasites;\n} //window.onload = getPogination;\n\n//# sourceURL=webpack://webpack4.0/./src/pages/pets/script.js?");

/***/ }),

/***/ "./src/pages/pets/sass/pets.scss":
/*!***************************************!*\
  !*** ./src/pages/pets/sass/pets.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack4.0/./src/pages/pets/sass/pets.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/pets/script.js");
/******/ 	
/******/ })()
;