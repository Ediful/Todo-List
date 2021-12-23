// object that has an array containing all the projects
export default (() => {
    let projects = [];

    // get projects
    const getTodoList = () => projects;
    
    // set projects
    const setTodoList = (loadedProjects) => {
        projects = loadedProjects;
    }
    
    // add a project to projects
    const addProject = (newProject) => {
        projects.push(newProject);
    }

    // TODO: delete a project, check projects for a match, edit project name

    return {getTodoList, setTodoList, addProject}
})();