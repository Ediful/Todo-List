// Project class
// Projects have a single title and one or more todos
// There is a default Tasks project that is initilized at the start
// More projects can be created by user

import { Todo } from "./todo";

class Project {
    todos = []

    constructor(title) {
      this.title = title;
    }

    addNewTodo(title, description, dueDate, priority) {
      let newTodo = new Todo(title, description, dueDate, priority);
      this.todos.push(newTodo);
    }

    getTodos() {
      return this.todos;
    }
}

export {Project}