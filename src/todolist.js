import project from "./project";

// object that has an array containing all the projects
export default (() => {
    let projects = [];

    // get projects
    const getProjects = () => projects;
    
    // get project object
    const getProject = (projectName) => {
        return projects.find((project) => project.getName() === projectName);
    }
    
    // add a project to projects
    const addProject = (newProject) => {
        projects.push(newProject);
    }

    // TODO: delete a project, check projects for a match, edit project name

    return {getProjects, addProject, getProject}
})();