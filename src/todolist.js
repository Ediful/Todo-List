// object that has an array containing all the projects
export default (() => {
    let projects = [];

    const getProjects = () => projects;
    
    const getProject = (projectName) => {
        return projects.find((project) => project.getName() === projectName);
    }
    
    const addProject = (newProject) => projects.push(newProject);

    const deleteProject = (delProject) => projects = projects.filter((project) => project.getName() != delProject.getName());

    return {getProjects, addProject, deleteProject, getProject}
})();