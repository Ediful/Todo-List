import Storage from "./storage"
import projectFactory from "./project"
import taskFactory from "./task"

export default (() => {
  const loadHomepage = () => {
    loadProjects();
    loadNewProjectForm();
    loadNewTaskForm();
  }

  const loadProjects = () => {
    // Load saved projects or create deafult Inbox project
    Storage.loadProjects();
    Storage.getTodoList().forEach(project => {
      displayProject(project);
    });
  }

  const loadTasks = () => {
    
  }

  const loadNewProjectForm = () => {
    let newProjectForm = document.getElementById("new-project-form");
    let newProjectBtn = document.getElementById("new-project-btn");
    let newProjectCloseBtn = document.getElementById("new-project-close");
    let newProjectSubmitBtn = document.getElementById("new-project-submit");

    newProjectBtn.addEventListener("click", () => (newProjectForm.style.display = "block"));
    newProjectCloseBtn.addEventListener("click", () => (newProjectForm.style.display = "none"));

    // TODO: submit when pressing enter
    newProjectSubmitBtn.addEventListener("click", () => {
      let newProjectName = document.getElementById("new-project-title").value;
      let newProject = projectFactory(newProjectName);
      Storage.addProject(newProject);
      displayProject(newProject);
    });
  }

  const displayProject = (newProject) => {
    let activeProjectName = document.getElementById("active-project");

    if (newProject.getName() == "Inbox") {
      document.getElementById("inbox").addEventListener("click", () => activeProjectName.textContent = "Inbox");
      return;
    }

    let projectList = document.getElementById("project-list");

    // create tab for new project
    // dynamically create event listeners for each project
    const newProjectEntry = document.createElement("button");
    newProjectEntry.className = "project-tab";

    newProjectEntry.textContent = newProject.getName();
    projectList.appendChild(newProjectEntry);

    newProjectEntry.addEventListener("click", () => activeProjectName.textContent = newProjectEntry.textContent);
  }

  const handleTabs = () => {

  }

  const displayTask = (task) => {
    let taskList = document.getElementById("todo-items");
    let taskCard = document.createElement("div");
    taskCard.className = "todo-card"
    taskList.appendChild(taskCard);

    let todoCheckBoxTitlePriority = document.createElement("div");
    todoCheckBoxTitlePriority.className = "todo-checkbox-title-priority";
    taskCard.appendChild(todoCheckBoxTitlePriority);

    let todoCheckboxTitle = document.createElement("div");
    todoCheckboxTitle.className = "todo-checkbox-title";
    todoCheckBoxTitlePriority.appendChild(todoCheckboxTitle);

    let todoTitle = document.createElement("div");
    todoTitle.className = "todo-title";
    todoTitle.textContent = "task name";
    todoCheckboxTitle.appendChild(todoTitle);

    let todoDate = document.createElement("div");
    todoDate.className = "todo-date";
    todoDate.textContent = "00/00/00"
    todoCheckBoxTitlePriority.appendChild(todoDate);
    
    let todoPriority = document.createElement("div");
    todoPriority.className = "todo-priority";
    todoPriority.textContent = "&#x1F7E2";
    todoCheckBoxTitlePriority.appendChild(todoPriority);

    let todoDesc = document.createElement("div");
    todoDesc.className = "todo-desc";
    todoDesc.textContent = "description";
    taskCard.appendChild(todoDesc);
  }

  const loadNewTaskForm = () => {
    let newTaskForm = document.getElementById("new-task-form");
    let newTaskBtn = document.getElementById("new-task-btn");
    let newTaskCloseBtn = document.getElementById("new-task-close");
    let newTaskSubmitBtn = document.getElementById("new-task-submit");

    newTaskBtn.addEventListener("click",() => (newTaskForm.style.display = "block"));
    newTaskCloseBtn.addEventListener("click",() => (newTaskForm.style.display = "none"));

    newTaskSubmitBtn.addEventListener("click", () => {
      let newTaskTitle = document.getElementById("new-task-title").value;
      let newTaskDueDate = document.getElementById("new-task-due-date").value;
      let newTaskDescription = document.getElementById("new-task-description").value;
      // grab active project from HTML element
      let activeProjectName = document.getElementById("active-project").textContent;
      // create new task object
      let newTask = taskFactory(newTaskTitle, newTaskDueDate, newTaskDescription);
      // add task to active project
      Storage.addTask(activeProjectName, newTask);
      // display task
      displayTask(newTask);
    });
  }

  return {loadHomepage}
})();