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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Project class\r\n// Projects have a single title and one or more tasks\r\n// There is a default Tasks project that is initilized at the start\r\n// More projects can be created by user\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name) => {\r\n  let tasks = [];\r\n\r\n  const getName = () => name;\r\n\r\n  const getTasks = () => tasks;\r\n\r\n  const setTasks = (restoredTasks) => tasks = restoredTasks;\r\n\r\n  const addTask = (task) => tasks.push(task);\r\n\r\n  const deleteTask = (deltask) => tasks = tasks.filter((task) => task.name != deltask.name);\r\n\r\n  const toJSON = () => {\r\n    return {name, tasks};\r\n  }\r\n\r\n  return {getName, getTasks, setTasks, addTask, deleteTask, toJSON}\r\n});\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist */ \"./src/todolist.js\");\n\r\n\r\n\r\n// saves/loads projects and their corresponding tasks\r\n// handles adding projects and tasks to help ensure\r\n// that everything is saved properly\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\r\n    const saveProjects = () => localStorage.setItem(\"todolist\", JSON.stringify(_todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjects()));\r\n\r\n    const loadProjects = () => {\r\n        if (localStorage.getItem(\"todolist\")) {\r\n            let restoredTodolist = JSON.parse(localStorage.getItem(\"todolist\"));\r\n\r\n            restoredTodolist.forEach(obj => {\r\n                let restoredProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj.name);\r\n                restoredProject.setTasks(obj.tasks);\r\n                addProject(restoredProject);\r\n            });\r\n        }\r\n        else {\r\n            let Inbox = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Inbox\");\r\n            addProject(Inbox);\r\n        }\r\n    }\r\n\r\n    const getTodoList = () => _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjects();\r\n\r\n    const getProject = (projectName) => _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProject(projectName);\r\n\r\n    const addProject = (newProject) => {\r\n        _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(newProject);\r\n        saveProjects();\r\n    }\r\n\r\n    const deleteProject = (project) => {\r\n        _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteProject(project);\r\n        saveProjects();\r\n    }\r\n\r\n    const addTask = (projectName, newTask) => {\r\n        _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProject(projectName).addTask(newTask);\r\n        saveProjects();\r\n    }\r\n\r\n    const deleteTask = (projectName, delTask) => {\r\n        _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProject(projectName, delTask).deleteTask(delTask);\r\n        saveProjects();\r\n    }\r\n\r\n    return {loadProjects, getTodoList, addProject, addTask, getProject, deleteProject, deleteTask}\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Task objects have a title, description, dueDate and priority\r\n// they are added to projects\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, dueDate, description, priority) => {\r\n\r\n  return {name, dueDate, description, priority}\r\n});\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// object that has an array containing all the projects\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\r\n    let projects = [];\r\n\r\n    const getProjects = () => projects;\r\n    \r\n    const getProject = (projectName) => {\r\n        return projects.find((project) => project.getName() === projectName);\r\n    }\r\n    \r\n    const addProject = (newProject) => projects.push(newProject);\r\n\r\n    const deleteProject = (delProject) => projects = projects.filter((project) => project.getName() != delProject.getName());\r\n\r\n    return {getProjects, addProject, deleteProject, getProject}\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/todolist.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\r\n  const loadHomepage = () => {\r\n    loadProjects();\r\n    loadNewProjectForm();\r\n    loadNewTaskForm();\r\n  }\r\n\r\n  const loadProjects = () => {\r\n    // Load saved projects or create deafult Inbox project\r\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects();\r\n\r\n    let activeProjectName = document.getElementById(\"active-project\");\r\n    document.getElementById(\"inbox\").addEventListener(\"click\", () => {\r\n      clearTasks();\r\n      activeProjectName.textContent = \"Inbox\";\r\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProject(\"Inbox\").getTasks().forEach(task => displayTask(task));\r\n    });\r\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProject(\"Inbox\").getTasks().forEach(task => displayTask(task));\r\n\r\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().forEach(project => {\r\n      displayProject(project);\r\n    });\r\n  }\r\n\r\n  const loadNewProjectForm = () => {\r\n    let activeProjectName = document.getElementById(\"active-project\");\r\n\r\n    let newProjectForm = document.getElementById(\"new-project-form\");\r\n    let newProjectBtn = document.getElementById(\"new-project-btn\");\r\n    let newProjectCloseBtn = document.getElementById(\"new-project-close\");\r\n    let newProjectSubmitBtn = document.getElementById(\"new-project-submit\");\r\n\r\n    newProjectBtn.addEventListener(\"click\", () => (newProjectForm.style.display = \"block\"));\r\n    newProjectCloseBtn.addEventListener(\"click\", () => (newProjectForm.style.display = \"none\"));\r\n\r\n    newProjectSubmitBtn.addEventListener(\"click\", () => {\r\n      let newProjectName = document.getElementById(\"new-project-title\");\r\n\r\n      if (newProjectName.value === \"\") {\r\n        alert(\"Please do not leave project title empty\");\r\n        return;\r\n      }\r\n\r\n      if (_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProject(newProjectName.value) != null) {\r\n        alert(\"Please do not use duplicate project names\");\r\n        return;\r\n      }\r\n\r\n      let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newProjectName.value);\r\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(newProject);\r\n      displayProject(newProject);\r\n      newProjectForm.style.display = \"none\";\r\n      newProjectName.value = \"\";\r\n      clearTasks();\r\n      activeProjectName.textContent = newProject.getName();\r\n    });\r\n  }\r\n\r\n  const displayProject = (newProject) => {\r\n    let activeProjectName = document.getElementById(\"active-project\");\r\n\r\n    if (newProject.getName() === \"Inbox\") {\r\n      return;\r\n    }\r\n\r\n    let projectList = document.getElementById(\"project-list\");\r\n\r\n    let projectCard = document.createElement(\"div\");\r\n    projectCard.className = \"project-card\";\r\n    projectList.appendChild(projectCard);\r\n\r\n    const newProjectEntry = document.createElement(\"button\");\r\n    newProjectEntry.className = \"project-tab\";\r\n    newProjectEntry.textContent = newProject.getName();\r\n    projectCard.appendChild(newProjectEntry);\r\n\r\n    newProjectEntry.addEventListener(\"click\", () => {\r\n      activeProjectName.textContent = newProjectEntry.textContent;\r\n      clearTasks();\r\n      newProject.getTasks().forEach(task => displayTask(task));\r\n    });\r\n\r\n    let projectDeleteBtn = document.createElement(\"input\");\r\n    projectDeleteBtn.type = \"button\";\r\n    projectDeleteBtn.className = \"project-delete-btn\";\r\n    projectDeleteBtn.value = \"\\u00d7\";\r\n    projectCard.appendChild(projectDeleteBtn);\r\n\r\n    projectDeleteBtn.addEventListener(\"click\", () => {\r\n      if (activeProjectName.textContent === newProject.getName()) {\r\n        clearTasks();\r\n        activeProjectName.textContent = \"Inbox\";\r\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProject(\"Inbox\").getTasks().forEach(task => displayTask(task));\r\n      }\r\n\r\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(newProject);\r\n      projectList.removeChild(projectCard);\r\n    });\r\n  }\r\n\r\n  const displayTask = (task) => {\r\n    let taskList = document.getElementById(\"todo-items\");\r\n    let taskCard = document.createElement(\"div\");\r\n    taskCard.className = \"todo-card\"\r\n    taskList.appendChild(taskCard);\r\n\r\n    let row1 = document.createElement(\"div\");\r\n    row1.className = \"todo-card-row-1\";\r\n    taskCard.appendChild(row1);\r\n\r\n    let deleteTaskBtn = document.createElement(\"input\");\r\n    deleteTaskBtn.type = \"button\";\r\n    deleteTaskBtn.className = \"task-delete-btn\";\r\n    deleteTaskBtn.value = \"\\u00d7\";\r\n    row1.appendChild(deleteTaskBtn);\r\n\r\n    let activeProjectName = document.getElementById(\"active-project\");\r\n    deleteTaskBtn.addEventListener(\"click\", () => {\r\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(activeProjectName.textContent, task);\r\n      taskList.removeChild(taskCard);\r\n    });\r\n\r\n    let todoTitle = document.createElement(\"div\");\r\n    todoTitle.className = \"todo-title\";\r\n    todoTitle.textContent = task.name;\r\n    row1.appendChild(todoTitle);\r\n\r\n    let todoDate = document.createElement(\"div\");\r\n    todoDate.className = \"todo-date\";\r\n    todoDate.textContent = task.dueDate;\r\n    row1.appendChild(todoDate);\r\n    \r\n    let todoPriority = document.createElement(\"div\");\r\n    todoPriority.className = \"todo-priority\";\r\n    if (task.priority === \"low\") todoPriority.innerHTML = \"&#x1F7E2\";\r\n    if (task.priority === \"medium\") todoPriority.innerHTML = \"&#x1F7E1\";\r\n    if (task.priority === \"high\") todoPriority.innerHTML = \"&#x1F7E0\";\r\n    row1.appendChild(todoPriority);\r\n\r\n    let todoDesc = document.createElement(\"div\");\r\n    todoDesc.className = \"todo-desc\";\r\n    todoDesc.textContent = task.description;\r\n    taskCard.appendChild(todoDesc);\r\n  }\r\n\r\n  const clearTasks = () => {\r\n    let taskList = document.getElementById(\"todo-items\");\r\n\r\n    taskList.innerHTML = '';\r\n  }\r\n\r\n  const loadNewTaskForm = () => {\r\n    let newTaskForm = document.getElementById(\"new-task-form\");\r\n    let newTaskBtn = document.getElementById(\"new-task-btn\");\r\n    let newTaskCloseBtn = document.getElementById(\"new-task-close\");\r\n    let newTaskSubmitBtn = document.getElementById(\"new-task-submit\");\r\n\r\n    newTaskBtn.addEventListener(\"click\",() => (newTaskForm.style.display = \"block\"));\r\n    newTaskCloseBtn.addEventListener(\"click\",() => (newTaskForm.style.display = \"none\"));\r\n\r\n    newTaskSubmitBtn.addEventListener(\"click\", () => {\r\n      let activeProjectName = document.getElementById(\"active-project\").textContent;\r\n\r\n      let newTaskTitle = document.getElementById(\"new-task-title\");\r\n      let newTaskDueDate = document.getElementById(\"new-task-due-date\");\r\n      let newTaskDescription = document.getElementById(\"new-task-description\");\r\n      let newTaskPriority = document.getElementById(\"new-task-priority\");\r\n\r\n      if (newTaskTitle.value === \"\") {\r\n        alert(\"Please do not leave task name empty\");\r\n        return;\r\n      }\r\n\r\n      let duplicate = false;\r\n\r\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProject(activeProjectName).getTasks().forEach(task => {\r\n        if (task.name === newTaskTitle.value) {\r\n          alert(\"Please do not use duplicate task titles\");\r\n          duplicate = true;\r\n        }\r\n      })\r\n\r\n      if (duplicate === true) {\r\n        return;\r\n      }\r\n\r\n      let newTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newTaskTitle.value, newTaskDueDate.value, newTaskDescription.value, newTaskPriority.value);\r\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(activeProjectName, newTask);\r\n      displayTask(newTask);\r\n      \r\n      newTaskForm.style.display = \"none\";\r\n      newTaskTitle.value = \"\";\r\n      newTaskDueDate.value = \"\";\r\n      newTaskDescription.value = \"\";\r\n      newTaskPriority.value = \"low\";\r\n    });\r\n  }\r\n\r\n  return {loadHomepage}\r\n})());\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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