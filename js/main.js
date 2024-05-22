/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function() {\r\n    // Создаем объект для хранения счетчиков лайков для разных сообщений\r\n    const likeCounts = {};\r\n\r\n    // Находим все блоки с классом 'block-like_mp'\r\n    const likeBlocks = document.querySelectorAll('.block-like_mp');\r\n\r\n    // Обходим каждый блок и устанавливаем для него счетчик лайков по умолчанию\r\n    likeBlocks.forEach(function(block, index) {\r\n        const likeCount = block.querySelector('.number-of-like_mp');\r\n        const messageId = `message_${index}`; // Создаем уникальный идентификатор для каждого сообщения\r\n\r\n        likeCounts[messageId] = parseInt(likeCount.innerText);\r\n\r\n        const likeHeart = block.querySelector('.block-like_img');\r\n\r\n        likeHeart.addEventListener('click', function() {\r\n            if (likeHeart.classList.contains('liked')) {\r\n                likeCounts[messageId]--;\r\n                likeHeart.classList.remove('liked');\r\n                likeHeart.style.opacity = 0.5;\r\n            } else {\r\n                likeCounts[messageId]++;\r\n                likeHeart.classList.add('liked');\r\n                likeHeart.style.opacity = 1;\r\n            }\r\n\r\n            likeCount.innerText = likeCounts[messageId];\r\n        });\r\n    });\r\n});\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;