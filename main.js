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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Project class\r\n// Projects have a single title and one or more tasks\r\n// There is a default Tasks project that is initilized at the start\r\n// More projects can be created by user\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((title) => {\r\n  let tasks = [];\r\n\r\n  /*\r\n  const addNewTask = (title, description, dueDate, priority) => {\r\n    let newTask = new tasks(title, description, dueDate, priority);\r\n    this.tasks.push(newTask);\r\n  }\r\n  */\r\n\r\n  return {title}\r\n});\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist */ \"./src/todolist.js\");\n\r\n\r\n\r\n// saves/loads projects and their corresponding tasks\r\n// handles adding projects and tasks to help ensure\r\n// that everything is saved properly\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\r\n    // save todolist\r\n    const saveProjects = () => {\r\n        // save todolist\r\n        console.log(\"todolist saved\");\r\n        console.log(_todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList());\r\n        console.log(JSON.stringify(_todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList()));\r\n        localStorage.setItem(\"todolist\", JSON.stringify(_todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList()));\r\n    }\r\n\r\n    // load todolist\r\n    const loadProjects = () => {\r\n        if (localStorage.getItem(\"todolist\")) {\r\n            // set todolist\r\n            console.log(localStorage.getItem(\"todolist\"));\r\n            console.log(JSON.parse(localStorage.getItem(\"todolist\")));\r\n            _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTodoList(JSON.parse(localStorage.getItem(\"todolist\")));\r\n            console.log(\"todolist loaded\");\r\n            console.log(_todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList());\r\n            console.log(JSON.stringify(_todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList()));\r\n        }\r\n        else {\r\n            console.log(\"todolist created\");\r\n            let Inbox = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Inbox\");\r\n            addProject(Inbox)\r\n        }\r\n    }\r\n\r\n    // get todolist\r\n    const getTodoList = () => _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList();\r\n\r\n    // add project\r\n    const addProject = (newProject) => {\r\n        _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(newProject);\r\n        saveProjects();\r\n    }\r\n\r\n    // add task to a project\r\n\r\n    // TODO: edit projects and tasks, delete projects and tasks\r\n\r\n    return {loadProjects, getTodoList, addProject}\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// object that has an array containing all the projects\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\r\n    let projects = [];\r\n\r\n    // get projects\r\n    const getTodoList = () => projects;\r\n    \r\n    // set projects\r\n    const setTodoList = (loadedProjects) => {\r\n        projects = loadedProjects;\r\n    }\r\n    \r\n    // add a project to projects\r\n    const addProject = (newProject) => {\r\n        projects.push(newProject);\r\n    }\r\n\r\n    // TODO: delete a project, check projects for a match, edit project name\r\n\r\n    return {getTodoList, setTodoList, addProject}\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/todolist.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\r\n  const loadHomepage = () => {\r\n    loadProjects();\r\n    loadNewProjectForm();\r\n    loadNewTaskForm();\r\n  }\r\n\r\n  const loadProjects = () => {\r\n    // Load saved projects or create deafult Inbox project\r\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects();\r\n    loadProjectTabs();\r\n  }\r\n  \r\n  const loadProjectTabs = () => {\r\n    console.log(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList());\r\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().forEach(project => {\r\n      displayNewProject(project);\r\n    });\r\n\r\n    let activeProject = document.getElementById(\"active-project\");\r\n    let projectTabs = Array.from(document.getElementsByClassName(\"project-tab\"));\r\n\r\n    projectTabs.forEach(tab => \r\n      tab.addEventListener(\"click\", () => {\r\n        activeProject.textContent = tab.textContent;\r\n      })\r\n    );\r\n  }\r\n\r\n  const loadNewProjectForm = () => {\r\n    let newProjectForm = document.getElementById(\"new-project-form\");\r\n    let newProjectBtn = document.getElementById(\"new-project-btn\");\r\n    let newProjectCloseBtn = document.getElementById(\"new-project-close\");\r\n    let newProjectSubmitBtn = document.getElementById(\"new-project-submit\");\r\n\r\n    newProjectBtn.addEventListener(\"click\", () => (newProjectForm.style.display = \"block\"));\r\n    newProjectCloseBtn.addEventListener(\"click\", () => (newProjectForm.style.display = \"none\"));\r\n\r\n    newProjectSubmitBtn.addEventListener(\"click\", () => {\r\n      let newProjectTitle = document.getElementById(\"new-project-title\").value;\r\n      let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newProjectTitle);\r\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(newProject);\r\n      displayNewProject(newProject);\r\n      loadProjectTabs();\r\n    });\r\n  }\r\n\r\n  const displayNewProject = (newProject) => {\r\n    let projectList = document.getElementById(\"project-list\");\r\n\r\n    // create tab for new project\r\n    // dynamically create event listeners for each project\r\n    const newProjectEntry = document.createElement(\"button\");\r\n    newProjectEntry.className = \"project-tab\";\r\n\r\n    newProjectEntry.textContent = newProject.title;\r\n    projectList.appendChild(newProjectEntry);\r\n  }\r\n\r\n  const loadNewTaskForm = () => {\r\n    let newTaskForm = document.getElementById(\"new-task-form\");\r\n    let newTaskBtn = document.getElementById(\"new-task-btn\");\r\n    let newTaskCloseBtn = document.getElementById(\"new-task-close\");\r\n    let newTaskSubmitBtn = document.getElementById(\"new-task-submit\");\r\n\r\n    newTaskBtn.addEventListener(\"click\",() => (newTaskForm.style.display = \"block\"));\r\n    newTaskCloseBtn.addEventListener(\"click\",() => (newTaskForm.style.display = \"none\"));\r\n\r\n    newTaskSubmitBtn.addEventListener(\"click\", () => {\r\n      let newTaskTitle = document.getElementById(\"new-task-title\").value;\r\n      let newTaskDueDate = document.getElementById(\"new-task-due-date\").value;\r\n      let newTaskDescription = document.getElementById(\"new-task-description\").value;\r\n      // grab active project from HTML element\r\n      // create new task object\r\n      // add task to active project\r\n    });\r\n  }\r\n\r\n  return {loadHomepage}\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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