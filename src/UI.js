import Storage from "./storage"
import Project from "./project";

export default (() => {
  const loadHomepage = () => {
    loadProjects();
    loadNewProjectForm();
    loadNewTaskForm();
  }

  const loadProjects = () => {
    // Load saved projects or create deafult Inbox project
    Storage.loadProjects();
    loadProjectTabs();
  }
  
  const loadProjectTabs = () => {
    console.log(Storage.getTodoList());
    Storage.getTodoList().forEach(project => {
      displayNewProject(project);
    });

    let activeProject = document.getElementById("active-project");
    let projectTabs = Array.from(document.getElementsByClassName("project-tab"));

    projectTabs.forEach(tab => 
      tab.addEventListener("click", () => {
        activeProject.textContent = tab.textContent;
      })
    );
  }

  const loadNewProjectForm = () => {
    let newProjectForm = document.getElementById("new-project-form");
    let newProjectBtn = document.getElementById("new-project-btn");
    let newProjectCloseBtn = document.getElementById("new-project-close");
    let newProjectSubmitBtn = document.getElementById("new-project-submit");

    newProjectBtn.addEventListener("click", () => (newProjectForm.style.display = "block"));
    newProjectCloseBtn.addEventListener("click", () => (newProjectForm.style.display = "none"));

    newProjectSubmitBtn.addEventListener("click", () => {
      let newProjectTitle = document.getElementById("new-project-title").value;
      let newProject = Project(newProjectTitle);
      Storage.addProject(newProject);
      displayNewProject(newProject);
      loadProjectTabs();
    });
  }

  const displayNewProject = (newProject) => {
    let projectList = document.getElementById("project-list");

    // create tab for new project
    // dynamically create event listeners for each project
    const newProjectEntry = document.createElement("button");
    newProjectEntry.className = "project-tab";

    newProjectEntry.textContent = newProject.title;
    projectList.appendChild(newProjectEntry);
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
      // create new task object
      // add task to active project
    });
  }

  return {loadHomepage}
})();