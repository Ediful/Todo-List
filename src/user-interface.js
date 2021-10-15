class userInterface {
    // addTodoItem renders the todo card for a single todo
    // there are a lot of divisions so it looks messy but isn't actually complicated

    projectForm = document.getElementById("project-form");
    taskForm = document.getElementById("task-form");


    addTodoItem(todo) {
        /*
        const todoItems = document.getElementById("todo-items");

        const todoCard = document.createElement('div');
        todoCard.className = "todo-card";
        todoItems.appendChild(todoCard);

        const todoCheckboxTitlePriority = document.createElement('div');
        todoCheckboxTitlePriority.className = "todo-checkbox-title-priority";
        todoCard.appendChild(todoCheckboxTitlePriority);

        const todoCheckboxTitle = document.createElement('div');
        todoCheckboxTitle.className = "todo-checkbox-title-priority";
        todoCheckboxTitlePriority.appendChild(todoCheckboxTitle);

        const todoCheckbox = document.createElement('input');
        todoCheckbox.type = "button";
        todoCheckbox.className = "todo-checkbox";
        todoCheckbox.value = String.fromCodePoint(0x2610);
        todoCheckboxTitle.appendChild(todoCheckbox);

        const todoTitle = document.createElement('div');
        todoTitle.className = "todo-title";
        todoTitle.textContent = "First Todo";
        todoCheckboxTitle.appendChild(todoTitle);

        const todoPriority = document.createElement('div');
        todoPriority.className = "todo-priority";
        todoPriority.innerHTML = "&#x1F7E2";
        todoCheckboxTitlePriority.appendChild(todoPriority);

        const todoDate = document.createElement('div');
        todoDate.className = "todo-priority";
        todoDate.textContent = "00/00/00";
        todoCard.appendChild(todoDate);

        const todoDesc = document.createElement('div');
        todoDesc.className = "todo-desc";
        todoDesc.textContent = "Description of Task";
        todoCard.appendChild(todoDesc);
        */
    }

    // adds a new tab for the given project
    addProject(project) {

    }

    // removes a project from the sidebar
    delProject(project) {

    }

    // create a todo card for every todo item in a given project
    displayTodos(project) {

    }

    // change project tab and displays every todo for that project
    changeProject(project) {

    }

    openProjectForm() {
        document.getElementById('new-project').addEventListener('click', () => projectForm.style.display = "block");
        document.getElementById('project-close').addEventListener('click', () => projectForm.style.display = "none");
    }

    openTaskForm() {

    }

    submitProjectForm(project) {
        
    }

    submitTaskForm(task) {

    }

    // removes every todo card on current tab
    clearTodoItems() {

    }
}

export {userInterface}