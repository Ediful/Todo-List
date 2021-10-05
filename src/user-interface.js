// should this be a collection of functions or a class?
// for now, I'll try to make it a class
// 1. addTodoItem <- start here

class userInterface {
    // this function creates the HTML code for the todo item cards
    // there are a lot of divisions so it looks messy but isn't actually complicated
    addTodoItem(todo) {
        const todoItems = document.getElementById("todo-items");

        const todoCard = document.createElement('div');
        todoCard.className = "todo-card";

        const todoCheckboxTitlePriority = document.createElement('div');
        todoCheckboxTitlePriority.className = "todo-checkbox-title-priority";

        const todoCheckboxTitle = document.createElement('div');
        todoCheckboxTitle.className = "todo-checkbox-title-priority";

        const todoCheckbox = document.createElement('input');
        todoCheckbox.type = "button";
        todoCheckbox.className = "todo-checkbox";
        todoCheckbox.value = "&#x2610";

        const todoTitle = document.createElement('div');
        todoTitle.className = "todo-title";

        const todoPriority = document.createElement('div');
        todoPriority.className = "todo-priority";

        const todoDate = document.createElement('div');
        todoDate.className = "todo-priority";

        const todoDesc = document.createElement('div');
        todoDesc.className = "todo-desc";
        // don't forget to attach everything! (append)
        // and do it all in the right way! (order might matter)
    }

    addProject() {

    }

    changeProject() {

    }

    clearTodoItems() {

    }
}

export {userInterface}