import { Project } from "./project";

let Projects = [];
let activeProject = null;

export default class UI {
  // Loading initial content
  static loadHomepage() {
    UI.loadNewProjectBtns();
    UI.loadNewTaskBtns();
  }

  // creates behavior for all the project related buttons
  static loadNewProjectBtns() {
    let newProjectForm = document.getElementById("new-project-form");
    let newProjectBtn = document.getElementById("new-project-btn");
    let newProjectCloseBtn = document.getElementById("new-project-close");
    let newProjectSubmitBtn = document.getElementById("new-project-submit");

    newProjectBtn.addEventListener("click", () => (newProjectForm.style.display = "block"));
    newProjectCloseBtn.addEventListener("click", () => (newProjectForm.style.display = "none"));
    newProjectSubmitBtn.addEventListener("click", () => UI.submitNewProject());
  }

  // adds new Project object to the Projects array and then calls displayNewProject
  static submitNewProject() {
    let newProjectTitle = document.getElementById("new-project-title").value;
    let newProject = new Project(newProjectTitle);
    Projects.push(newProject);
    UI.displayNewProject(newProject);
  }

  // add new project to the Projects list on the sidebar
  static displayNewProject(newProject) {
    let projectList = document.getElementById("project-list");

    const newProjectEntry = document.createElement("h3");

    newProjectEntry.textContent = newProject.title;
    projectList.appendChild(newProjectEntry);
  }

  // creates behavior for all task related buttons
  static loadNewTaskBtns() {
    let newTaskForm = document.getElementById("new-task-form");
    let newTaskBtn = document.getElementById("new-task-btn");
    let newTaskCloseBtn = document.getElementById("new-task-close");
    let newTaskSubmitBtn = document.getElementById("new-task-submit");

    newTaskBtn.addEventListener("click",() => (newTaskForm.style.display = "block"));
    newTaskCloseBtn.addEventListener("click",() => (newTaskForm.style.display = "none"));
    newTaskSubmitBtn.addEventListener("click", () => UI.submitNewTask());
  }

  // adds new Task object to the current project and then calls displayNewTask
  static submitNewTask() {
    let newTaskTitle = document.getElementById("new-task-title").value;
    let newTaskDueDate = document.getElementById("new-task-due-date").value;
    let newTaskDescription = document.getElementById("new-task-description").value;

    // need to track active project, should be kept here. Not needed anywhere else
    // create new task object
    
    // add task to active project
  }
}
