import projectFactory from "./project";
import todolist from "./todolist";

// saves/loads projects and their corresponding tasks
// handles adding projects and tasks to help ensure
// that everything is saved properly
export default (() => {
    // save todolist
    const saveProjects = () => {
        // save todolist
        localStorage.setItem("todolist", JSON.stringify(todolist.getProjects()));
    }

    // load todolist
    const loadProjects = () => {
        if (localStorage.getItem("todolist")) {
            let restoredTodolist = JSON.parse(localStorage.getItem("todolist"));

            restoredTodolist.forEach(obj => {
                let restoredProject = projectFactory(obj.name);
                restoredProject.setTasks(obj.tasks);
                addProject(restoredProject);
                // might need to add tasks as well
            });
        }
        else {
            let Inbox = projectFactory("Inbox");
            addProject(Inbox);
        }
    }

    // get todolist
    const getTodoList = () => todolist.getProjects();

    // add project
    const addProject = (newProject) => {
        todolist.addProject(newProject);
        saveProjects();
    }

    // add task to a project
    const addTask = (projectName, newTask) => {
        todolist.getProject(projectName).addTask(newTask);
        saveProjects();
    }

    // TODO: edit projects and tasks, delete projects and tasks

    return {loadProjects, getTodoList, addProject, addTask}
})();