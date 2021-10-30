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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\nlet Projects = [];\r\n\r\nclass UI {\r\n\r\n    // Loading initial content\r\n    static loadHomepage() {\r\n        UI.loadNewProjectBtns();\r\n        UI.loadNewTaskBtns();\r\n    }\r\n\r\n    // creates behavior for all the project related buttons\r\n    static loadNewProjectBtns() {\r\n        let newProjectForm = document.getElementById(\"new-project-form\");\r\n        let newProjectBtn = document.getElementById(\"new-project-btn\");\r\n        let newProjectCloseBtn = document.getElementById(\"new-project-close\");\r\n        let newProjectSubmitBtn = document.getElementById(\"new-project-submit\");\r\n\r\n        newProjectBtn.addEventListener(\"click\", () => newProjectForm.style.display = \"block\");\r\n        newProjectCloseBtn.addEventListener(\"click\", () => newProjectForm.style.display = \"none\");\r\n        newProjectSubmitBtn.addEventListener(\"click\", () => UI.submitNewProject());\r\n    }\r\n\r\n    // adds new Project object to the Projects array and then calls displayNewProject\r\n    static submitNewProject() {\r\n        let newProjectTitle = document.getElementById(\"new-project-title\").value;\r\n        let newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(newProjectTitle);\r\n        Projects.push(newProject);\r\n        UI.displayNewProject(newProject);\r\n    }\r\n\r\n    // add new project to the Projects list on the sidebar\r\n    static displayNewProject(newProject) {\r\n        let projectList = document.getElementById(\"project-list\");\r\n\r\n        const newProjectEntry = document.createElement('h3');\r\n\r\n        newProjectEntry.textContent = newProject.title;\r\n        projectList.appendChild(newProjectEntry);\r\n    }\r\n\r\n    // creates behavior for all task related buttons\r\n    static loadNewTaskBtns() {\r\n        let newTaskForm = document.getElementById(\"new-task-form\");\r\n        let newTaskBtn = document.getElementById(\"new-task-btn\");\r\n        let newTaskCloseBtn = document.getElementById(\"new-task-close\");\r\n        let newTaskSubmitBtn = document.getElementById(\"new-task-submit\");\r\n\r\n        newTaskBtn.addEventListener(\"click\", () => newTaskForm.style.display = \"block\");\r\n        newTaskCloseBtn.addEventListener(\"click\", () => newTaskForm.style.display = \"none\");\r\n        newTaskSubmitBtn.addEventListener(\"click\", () => UI.submitNewTask());\r\n    }\r\n\r\n    // adds new Task object to the current project and then calls displayNewTask\r\n    static submitNewTask() {\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomepage());\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n// Project class\r\n// Projects have a single title and one or more tasks\r\n// There is a default Tasks project that is initilized at the start\r\n// More projects can be created by user\r\n\r\n\r\n\r\nclass Project {\r\n    tasks = []\r\n\r\n    constructor(title) {\r\n      this.title = title;\r\n    }\r\n\r\n    addNewTask(title, description, dueDate, priority) {\r\n      let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate, priority);\r\n      this.tasks.push(newTask);\r\n    }\r\n\r\n    getTodos() {\r\n      return this.tasks;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n// Task objects have a title, description, dueDate and priority\r\n// they are added to projects\r\n\r\nclass Task {\r\n    constructor(name, description, dueDate, priority) {\r\n      this.name = name;\r\n      this.description = description;\r\n      this.dueDate = dueDate;\r\n      this.priority = priority;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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