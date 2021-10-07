// should this be a collection of functions or a class?
// for now, I'll try to make it a class
// 1. addTodoItem <- start here

class userInterface {
    // this function creates the HTML code for the todo item cards
    // there are a lot of divisions so it looks messy but isn't actually complicated
    addTodoItem() {
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