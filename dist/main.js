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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomepage());\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Project class\r\n// Projects have a single title and one or more tasks\r\n// There is a default Tasks project that is initilized at the start\r\n// More projects can be created by user\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((projectTitle) => {\r\n  let tasks = [];\r\n\r\n  const getTitle = () => projectTitle;\r\n\r\n  addNewTask = (title, description, dueDate, priority) => {\r\n    let newTask = new tasks(title, description, dueDate, priority);\r\n    undefined.tasks.push(newTask);\r\n  }\r\n\r\n  return {getTitle, tasks, addNewTask}\r\n});\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n\r\n\r\n\r\n\r\n// saves/loads projects and their corresponding tasks\r\n// handles adding projects and tasks to help ensure\r\n// that everything is saved properly\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\r\n    let projects = [];\r\n\r\n    // save todolist\r\n\r\n    // load todolist\r\n\r\n    // add project\r\n\r\n    // delete project\r\n\r\n    // add task to a project\r\n\r\n    // delete task\r\n\r\n    // TODO: edit projects and tasks\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Task objects have a title, description, dueDate and priority\r\n// they are added to projects\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((title, description, dueDate, priority) => {\r\n  const getTitle = () => title;\r\n  const getDescription = () => description;\r\n  const getDueDate = () => dueDate;\r\n  const getPriority = () => priority;\r\n});\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\r\n\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/todoList.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\r\n  const loadHomepage = () => {\r\n    loadProjects();\r\n    loadNewProjectForm();\r\n    loadNewTaskForm();\r\n  }\r\n\r\n  const loadProjects = () => {\r\n    // TODO: Check storage\r\n    // load default Inbox Project\r\n    loadProjectTabs();\r\n  }\r\n  \r\n  const loadProjectTabs = () => {\r\n    let activeProject = document.getElementById(\"active-project\");\r\n    let projectTabs = Array.from(document.getElementsByClassName(\"project-tab\"));\r\n\r\n    projectTabs.forEach(tab => \r\n      tab.addEventListener(\"click\", () => {\r\n        activeProject.textContent = tab.textContent;\r\n      })\r\n    );\r\n  }\r\n\r\n  const loadNewProjectForm = () => {\r\n    let newProjectForm = document.getElementById(\"new-project-form\");\r\n    let newProjectBtn = document.getElementById(\"new-project-btn\");\r\n    let newProjectCloseBtn = document.getElementById(\"new-project-close\");\r\n    let newProjectSubmitBtn = document.getElementById(\"new-project-submit\");\r\n\r\n    newProjectBtn.addEventListener(\"click\", () => (newProjectForm.style.display = \"block\"));\r\n    newProjectCloseBtn.addEventListener(\"click\", () => (newProjectForm.style.display = \"none\"));\r\n\r\n    newProjectSubmitBtn.addEventListener(\"click\", () => {\r\n      let newProjectTitle = document.getElementById(\"new-project-title\").value;\r\n      let newProject = new Project(newProjectTitle);\r\n      \r\n      displayNewProject(newProject);\r\n      loadProjectTabs();\r\n    });\r\n  }\r\n\r\n  const displayNewProject = (newProject) => {\r\n    let projectList = document.getElementById(\"project-list\");\r\n\r\n    // create tab for new project\r\n    // dynamically create event listeners for each project\r\n    const newProjectEntry = document.createElement(\"button\");\r\n    newProjectEntry.className = \"project-tab\";\r\n\r\n    newProjectEntry.textContent = newProject.title;\r\n    projectList.appendChild(newProjectEntry);\r\n  }\r\n\r\n  const loadNewTaskForm = () => {\r\n    let newTaskForm = document.getElementById(\"new-task-form\");\r\n    let newTaskBtn = document.getElementById(\"new-task-btn\");\r\n    let newTaskCloseBtn = document.getElementById(\"new-task-close\");\r\n    let newTaskSubmitBtn = document.getElementById(\"new-task-submit\");\r\n\r\n    newTaskBtn.addEventListener(\"click\",() => (newTaskForm.style.display = \"block\"));\r\n    newTaskCloseBtn.addEventListener(\"click\",() => (newTaskForm.style.display = \"none\"));\r\n\r\n    newTaskSubmitBtn.addEventListener(\"click\", () => {\r\n      let newTaskTitle = document.getElementById(\"new-task-title\").value;\r\n      let newTaskDueDate = document.getElementById(\"new-task-due-date\").value;\r\n      let newTaskDescription = document.getElementById(\"new-task-description\").value;\r\n      // grab active project from HTML element\r\n      // create new task object\r\n      // add task to active project\r\n    });\r\n  }\r\n\r\n  return {loadHomepage}\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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