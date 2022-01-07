import projectFactory from "./project";
import todolist from "./todolist";

// saves/loads projects and their corresponding tasks
// handles adding projects and tasks to help ensure
// that everything is saved properly
export default (() => {
    const saveProjects = () => localStorage.setItem("todolist", JSON.stringify(todolist.getProjects()));

    const loadProjects = () => {
        if (localStorage.getItem("todolist")) {
            let restoredTodolist = JSON.parse(localStorage.getItem("todolist"));

            restoredTodolist.forEach(obj => {
                let restoredProject = projectFactory(obj.name);
                restoredProject.setTasks(obj.tasks);
                addProject(restoredProject);
            });
        }
        else {
            let Inbox = projectFactory("Inbox");
            addProject(Inbox);
        }
    }

    const getTodoList = () => todolist.getProjects();

    const getProject = (projectName) => todolist.getProject(projectName);

    const addProject = (newProject) => {
        todolist.addProject(newProject);
        saveProjects();
    }

    const deleteProject = (project) => {
        todolist.deleteProject(project);
        saveProjects();
    }

    const addTask = (projectName, newTask) => {
        todolist.getProject(projectName).addTask(newTask);
        saveProjects();
    }

    const deleteTask = (projectName, delTask) => {
        todolist.getProject(projectName, delTask).deleteTask(delTask);
        saveProjects();
    }

    return {loadProjects, getTodoList, addProject, addTask, getProject, deleteProject, deleteTask}
})();