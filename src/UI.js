import Storage from "./storage"
import projectFactory from "./project"
import taskFactory from "./task"
import todolist from "./todolist";

export default (() => {
  const loadHomepage = () => {
    loadProjects();
    loadNewProjectForm();
    loadNewTaskForm();
  }

  const loadProjects = () => {
    // Load saved projects or create deafult Inbox project
    Storage.loadProjects();

    let activeProjectName = document.getElementById("active-project");
    document.getElementById("inbox").addEventListener("click", () => {
      clearTasks();
      activeProjectName.textContent = "Inbox";
      Storage.getProject("Inbox").getTasks().forEach(task => displayTask(task));
    });
    Storage.getProject("Inbox").getTasks().forEach(task => displayTask(task));

    Storage.getTodoList().forEach(project => {
      displayProject(project);
    });
  }

  const loadNewProjectForm = () => {
    let activeProjectName = document.getElementById("active-project");

    let newProjectForm = document.getElementById("new-project-form");
    let newProjectBtn = document.getElementById("new-project-btn");
    let newProjectCloseBtn = document.getElementById("new-project-close");
    let newProjectSubmitBtn = document.getElementById("new-project-submit");

    newProjectBtn.addEventListener("click", () => (newProjectForm.style.display = "block"));
    newProjectCloseBtn.addEventListener("click", () => (newProjectForm.style.display = "none"));

    newProjectSubmitBtn.addEventListener("click", () => {
      let newProjectName = document.getElementById("new-project-title");

      if (newProjectName.value === "") {
        alert("Please do not leave project title empty");
        return;
      }

      if (Storage.getProject(newProjectName.value) != null) {
        alert("Please do not use duplicate project names");
        return;
      }

      let newProject = projectFactory(newProjectName.value);
      Storage.addProject(newProject);
      displayProject(newProject);
      newProjectForm.style.display = "none";
      newProjectName.value = "";
      clearTasks();
      activeProjectName.textContent = newProject.getName();
    });
  }

  const displayProject = (newProject) => {
    let activeProjectName = document.getElementById("active-project");

    if (newProject.getName() === "Inbox") {
      return;
    }

    let projectList = document.getElementById("project-list");

    let projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectList.appendChild(projectCard);

    const newProjectEntry = document.createElement("button");
    newProjectEntry.className = "project-tab";
    newProjectEntry.textContent = newProject.getName();
    projectCard.appendChild(newProjectEntry);

    newProjectEntry.addEventListener("click", () => {
      activeProjectName.textContent = newProjectEntry.textContent;
      clearTasks();
      newProject.getTasks().forEach(task => displayTask(task));
    });

    let projectDeleteBtn = document.createElement("input");
    projectDeleteBtn.type = "button";
    projectDeleteBtn.className = "project-delete-btn";
    projectDeleteBtn.value = "\u00d7";
    projectCard.appendChild(projectDeleteBtn);

    projectDeleteBtn.addEventListener("click", () => {
      if (activeProjectName.textContent === newProject.getName()) {
        clearTasks();
        activeProjectName.textContent = "Inbox";
        Storage.getProject("Inbox").getTasks().forEach(task => displayTask(task));
      }

      Storage.deleteProject(newProject);
      projectList.removeChild(projectCard);
    });
  }

  const displayTask = (task) => {
    let taskList = document.getElementById("todo-items");
    let taskCard = document.createElement("div");
    taskCard.className = "todo-card"
    taskList.appendChild(taskCard);

    let row1 = document.createElement("div");
    row1.className = "todo-card-row-1";
    taskCard.appendChild(row1);

    let deleteTaskBtn = document.createElement("input");
    deleteTaskBtn.type = "button";
    deleteTaskBtn.className = "task-delete-btn";
    deleteTaskBtn.value = "\u00d7";
    row1.appendChild(deleteTaskBtn);

    let activeProjectName = document.getElementById("active-project");
    deleteTaskBtn.addEventListener("click", () => {
      Storage.deleteTask(activeProjectName.textContent, task);
      taskList.removeChild(taskCard);
    });

    let todoTitle = document.createElement("div");
    todoTitle.className = "todo-title";
    todoTitle.textContent = task.name;
    row1.appendChild(todoTitle);

    let todoDate = document.createElement("div");
    todoDate.className = "todo-date";
    todoDate.textContent = task.dueDate;
    row1.appendChild(todoDate);
    
    let todoPriority = document.createElement("div");
    todoPriority.className = "todo-priority";
    if (task.priority === "low") todoPriority.innerHTML = "&#x1F7E2";
    if (task.priority === "medium") todoPriority.innerHTML = "&#x1F7E1";
    if (task.priority === "high") todoPriority.innerHTML = "&#x1F7E0";
    row1.appendChild(todoPriority);

    let todoDesc = document.createElement("div");
    todoDesc.className = "todo-desc";
    todoDesc.textContent = task.description;
    taskCard.appendChild(todoDesc);
  }

  const clearTasks = () => {
    let taskList = document.getElementById("todo-items");

    taskList.innerHTML = '';
  }

  const loadNewTaskForm = () => {
    let newTaskForm = document.getElementById("new-task-form");
    let newTaskBtn = document.getElementById("new-task-btn");
    let newTaskCloseBtn = document.getElementById("new-task-close");
    let newTaskSubmitBtn = document.getElementById("new-task-submit");

    newTaskBtn.addEventListener("click",() => (newTaskForm.style.display = "block"));
    newTaskCloseBtn.addEventListener("click",() => (newTaskForm.style.display = "none"));

    newTaskSubmitBtn.addEventListener("click", () => {
      let activeProjectName = document.getElementById("active-project").textContent;

      let newTaskTitle = document.getElementById("new-task-title");
      let newTaskDueDate = document.getElementById("new-task-due-date");
      let newTaskDescription = document.getElementById("new-task-description");
      let newTaskPriority = document.getElementById("new-task-priority");

      if (newTaskTitle.value === "") {
        alert("Please do not leave task name empty");
        return;
      }

      let duplicate = false;

      Storage.getProject(activeProjectName).getTasks().forEach(task => {
        if (task.name === newTaskTitle.value) {
          alert("Please do not use duplicate task titles");
          duplicate = true;
        }
      })

      if (duplicate === true) {
        return;
      }

      let newTask = taskFactory(newTaskTitle.value, newTaskDueDate.value, newTaskDescription.value, newTaskPriority.value);
      Storage.addTask(activeProjectName, newTask);
      displayTask(newTask);
      
      newTaskForm.style.display = "none";
      newTaskTitle.value = "";
      newTaskDueDate.value = "";
      newTaskDescription.value = "";
      newTaskPriority.value = "low";
    });
  }

  return {loadHomepage}
})();