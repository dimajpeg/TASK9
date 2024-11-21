/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ (() => {

eval("var socket = io();\n\n// Элементы\nvar paintingsDiv = document.getElementById('paintings');\nvar bidForm = document.getElementById('bidForm');\nvar bidsList = document.getElementById('bids');\nvar stopAuctionBtn = document.getElementById('stopAuction');\nvar winnerDiv = document.getElementById('winner');\n\n// Инициализация\nsocket.on('init', function (_ref) {\n  var paintings = _ref.paintings,\n    bids = _ref.bids;\n  // Отображаем картины\n  paintings.forEach(function (painting) {\n    var paintingEl = document.createElement('div');\n    paintingEl.innerHTML = \"\\n            <h3>\".concat(painting.title, \"</h3>\\n            <p>Author: \").concat(painting.author, \"</p>\\n            <p>Starting Price: $\").concat(painting.startPrice, \"</p>\\n        \");\n    paintingsDiv.appendChild(paintingEl);\n  });\n\n  // Отображаем ставки\n  updateBids(bids);\n});\n\n// Обновление списка ставок\nsocket.on('updateBids', function (bids) {\n  return updateBids(bids);\n});\n\n// Обработка остановки торгов\nsocket.on('auctionStopped', function (highestBid) {\n  winnerDiv.style.display = 'block';\n  winnerDiv.textContent = \"Winner: \".concat(highestBid.name, \" with $\").concat(highestBid.amount);\n});\n\n// Обработка формы\nbidForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var name = document.getElementById('name').value;\n  var amount = parseFloat(document.getElementById('bidAmount').value);\n  socket.emit('newBid', {\n    name: name,\n    amount: amount\n  });\n  bidForm.reset();\n});\n\n// Остановка торгов\nstopAuctionBtn.addEventListener('click', function () {\n  socket.emit('stopAuction');\n});\n\n// Функция обновления списка ставок\nfunction updateBids(bids) {\n  bidsList.innerHTML = '';\n  bids.forEach(function (bid) {\n    var bidEl = document.createElement('li');\n    bidEl.textContent = \"\".concat(bid.name, \" bid $\").concat(bid.amount);\n    bidsList.appendChild(bidEl);\n  });\n}\n\n//# sourceURL=webpack://auction-app/./public/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/app.js"]();
/******/ 	
/******/ })()
;