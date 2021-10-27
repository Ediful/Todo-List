import { Project } from "./project";

let Projects = [];

export default class UI {

    // Loading initial content
    static loadHomepage() {
        UI.loadNewProjectBtns();
    }

    // creates behavior for all the project related buttons
    static loadNewProjectBtns() {
        let newProjectForm = document.getElementById("new-project-form");
        let newProjectBtn = document.getElementById("new-project-btn");
        let newProjectCloseBtn = document.getElementById("new-project-close");
        let newProjectSubmitBtn = document.getElementById("new-project-submit");

        newProjectBtn.addEventListener("click", () => newProjectForm.style.display = "block");
        newProjectCloseBtn.addEventListener("click", () => newProjectForm.style.display = "none");
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

        const newProjectEntry = document.createElement('h3');

        newProjectEntry.textContent = newProject.title;
        projectList.appendChild(newProjectEntry);
    }
}