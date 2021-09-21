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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\nlet Projects = [];\r\n\r\nlet Tasks = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Tasks\");\r\nTasks.addNewTodo(\"First Todo\", \"my first entry\", \"neva eva\", \"low\");\r\nProjects.push(Tasks);\r\n//localStorage.setItem(\"Tasks\", JSON.stringify(Tasks));\r\n\r\nlet School = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"School\");\r\nSchool.addNewTodo(\"Game Design\", \"Project for the class\", \"December\", \"high\");\r\nProjects.push(School);\r\n//localStorage.setItem(\"School\", JSON.stringify(School));\r\n\r\n// 1. Have a Projects array that holds all the Project objects\r\n// 2. Use localstorage.key(i) to iterate through all saved Project objects\r\n\r\n// both methods save it okay, but which makes it easiest to extract the information?\r\n\r\nlocalStorage.setItem(\"Projects\", JSON.stringify(Projects));\r\n//console.log(\"saved Projects: \" + localStorage.getItem(\"Projects\"));\r\n\r\nconsole.log(JSON.parse(localStorage.getItem(\"Projects\")));\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n// Project class\r\n// Projects have a single title and one or more todos\r\n// There is a default Tasks project that is initilized at the start\r\n// More projects can be created by user\r\n\r\n\r\n\r\nclass Project {\r\n    todos = []\r\n\r\n    constructor(name) {\r\n      this.name = name;\r\n    }\r\n\r\n    addNewTodo(name, description, dueDate, priority) {\r\n      let newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo(name, description, dueDate, priority);\r\n      this.todos.push(newTodo);\r\n    }\r\n\r\n    getTodos() {\r\n      return this.todos;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n// Task objects have a title, description, dueDate and priority\r\n// they are added to projects\r\n\r\nclass Todo {\r\n    constructor(name, description, dueDate, priority) {\r\n      this.name = name;\r\n      this.description = description;\r\n      this.dueDate = dueDate;\r\n      this.priority = priority;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;