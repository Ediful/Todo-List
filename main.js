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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-interface */ \"./src/user-interface.js\");\n\r\n\r\n\r\nlet Projects = []; // array to hold all Project objects\r\n\r\n// TODO: Add projects and Tasks through user interface\r\n\r\nlet projectForm = document.getElementById(\"project-form\");\r\nlet taskForm = document.getElementById(\"task-form\");\r\n\r\ndocument.getElementById('new-project').addEventListener('click', () => projectForm.style.display = \"block\");\r\ndocument.getElementById('project-close').addEventListener('click', () => projectForm.style.display = \"none\");\r\n//document.getElementById('submit').addEventListener('click', submitForm); // need way to add to array\r\n\r\ndocument.getElementById('new-task').addEventListener('click', () => taskForm.style.display = \"block\");\r\ndocument.getElementById('task-close').addEventListener('click', () => taskForm.style.display = \"none\");\r\n\r\n\r\n/*\r\n// creating Project objects and adding them to the Projects array\r\nlet Tasks = new Project(\"Tasks\");\r\nTasks.addNewTodo(\"First Todo\", \"my first entry\", \"neva eva\", \"low\");\r\nProjects.push(Tasks);\r\n\r\nlet School = new Project(\"School\");\r\nSchool.addNewTodo(\"Game Design\", \"Project for the class\", \"December\", \"high\");\r\nProjects.push(School);\r\n\r\n// saving the Projects array to localstorage\r\nlocalStorage.setItem(\"Projects\", JSON.stringify(Projects));\r\n\r\nlet displayController = new userInterface();\r\n\r\ndisplayController.addTodoItem();\r\n*/\r\n\r\n\r\n/*\r\n// This next part is mostly about figuring out how I can recreate\r\n// Project and Todo objects to keep everything completely consistent\r\n\r\n// variable to hold parsed localsorage Projects array\r\nlet storage = JSON.parse(localStorage.getItem(\"Projects\"));\r\n\r\nlet savedProjects = []; // temporary Projects array for testing localStorage\r\n\r\n// recreates Project objects and their correspondingn Todo objects, adds to array\r\nstorage.forEach(project => {\r\n  let newProject = new Project(project.title);\r\n\r\n  project.todos.forEach(todo => {\r\n    newProject.addNewTodo(todo.name, todo.description, todo.dueDate, todo.priority);\r\n  });\r\n\r\n  savedProjects.push(newProject);\r\n});\r\n\r\n// check to see if Projects recreated from localstorage is the same as the original\r\n// It checks out!\r\nconsole.log(Projects);\r\nconsole.log(savedProjects);\r\n*/\r\n//localStorage.clear(); // start from scratch each reload\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n// Project class\r\n// Projects have a single title and one or more todos\r\n// There is a default Tasks project that is initilized at the start\r\n// More projects can be created by user\r\n\r\n\r\n\r\nclass Project {\r\n    todos = []\r\n\r\n    constructor(title) {\r\n      this.title = title;\r\n    }\r\n\r\n    addNewTodo(title, description, dueDate, priority) {\r\n      let newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority);\r\n      this.todos.push(newTodo);\r\n    }\r\n\r\n    getTodos() {\r\n      return this.todos;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n// Task objects have a title, description, dueDate and priority\r\n// they are added to projects\r\n\r\nclass Todo {\r\n    constructor(name, description, dueDate, priority) {\r\n      this.name = name;\r\n      this.description = description;\r\n      this.dueDate = dueDate;\r\n      this.priority = priority;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/user-interface.js":
/*!*******************************!*\
  !*** ./src/user-interface.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userInterface\": () => (/* binding */ userInterface)\n/* harmony export */ });\nclass userInterface {\r\n    // addTodoItem renders the todo card for a single todo\r\n    // there are a lot of divisions so it looks messy but isn't actually complicated\r\n    addTodoItem(todo) {\r\n        /*\r\n        const todoItems = document.getElementById(\"todo-items\");\r\n\r\n        const todoCard = document.createElement('div');\r\n        todoCard.className = \"todo-card\";\r\n        todoItems.appendChild(todoCard);\r\n\r\n        const todoCheckboxTitlePriority = document.createElement('div');\r\n        todoCheckboxTitlePriority.className = \"todo-checkbox-title-priority\";\r\n        todoCard.appendChild(todoCheckboxTitlePriority);\r\n\r\n        const todoCheckboxTitle = document.createElement('div');\r\n        todoCheckboxTitle.className = \"todo-checkbox-title-priority\";\r\n        todoCheckboxTitlePriority.appendChild(todoCheckboxTitle);\r\n\r\n        const todoCheckbox = document.createElement('input');\r\n        todoCheckbox.type = \"button\";\r\n        todoCheckbox.className = \"todo-checkbox\";\r\n        todoCheckbox.value = String.fromCodePoint(0x2610);\r\n        todoCheckboxTitle.appendChild(todoCheckbox);\r\n\r\n        const todoTitle = document.createElement('div');\r\n        todoTitle.className = \"todo-title\";\r\n        todoTitle.textContent = \"First Todo\";\r\n        todoCheckboxTitle.appendChild(todoTitle);\r\n\r\n        const todoPriority = document.createElement('div');\r\n        todoPriority.className = \"todo-priority\";\r\n        todoPriority.innerHTML = \"&#x1F7E2\";\r\n        todoCheckboxTitlePriority.appendChild(todoPriority);\r\n\r\n        const todoDate = document.createElement('div');\r\n        todoDate.className = \"todo-priority\";\r\n        todoDate.textContent = \"00/00/00\";\r\n        todoCard.appendChild(todoDate);\r\n\r\n        const todoDesc = document.createElement('div');\r\n        todoDesc.className = \"todo-desc\";\r\n        todoDesc.textContent = \"Description of Task\";\r\n        todoCard.appendChild(todoDesc);\r\n        */\r\n    }\r\n\r\n    // adds a new tab for the given project\r\n    addProject(project) {\r\n\r\n    }\r\n\r\n    // removes a project from the sidebar\r\n    delProject(project) {\r\n\r\n    }\r\n\r\n    // create a todo card for every todo item in a given project\r\n    displayTodos(project) {\r\n\r\n    }\r\n\r\n    // change project tab and displays every todo for that project\r\n    changeProject(project) {\r\n\r\n    }\r\n\r\n    // removes every todo card on current tab\r\n    clearTodoItems() {\r\n\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/user-interface.js?");

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