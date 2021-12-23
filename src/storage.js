import project from "./project";
import todolist from "./todolist";

// saves/loads projects and their corresponding tasks
// handles adding projects and tasks to help ensure
// that everything is saved properly
export default (() => {
    // save todolist
    const saveProjects = () => {
        // save todolist
        console.log("todolist saved");
        console.log(todolist.getTodoList());
        console.log(JSON.stringify(todolist.getTodoList()));
        localStorage.setItem("todolist", JSON.stringify(todolist.getTodoList()));
    }

    // load todolist
    const loadProjects = () => {
        if (localStorage.getItem("todolist")) {
            // set todolist
            console.log(localStorage.getItem("todolist"));
            console.log(JSON.parse(localStorage.getItem("todolist")));
            todolist.setTodoList(JSON.parse(localStorage.getItem("todolist")));
            console.log("todolist loaded");
            console.log(todolist.getTodoList());
            console.log(JSON.stringify(todolist.getTodoList()));
        }
        else {
            console.log("todolist created");
            let Inbox = project("Inbox");
            addProject(Inbox)
        }
    }

    // get todolist
    const getTodoList = () => todolist.getTodoList();

    // add project
    const addProject = (newProject) => {
        todolist.addProject(newProject);
        saveProjects();
    }

    // add task to a project

    // TODO: edit projects and tasks, delete projects and tasks

    return {loadProjects, getTodoList, addProject}
})();