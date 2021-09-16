// Project class
// Projects have a single title and one or more todos
// There is a default Tasks project that is initilized at the start
// More projects can be created by user

import { Todo } from "./todo";

class Project {
    todos = []

    constructor(name) {
      this.name = name;
    }

    addNewTodo(name, description, dueDate, priority) {
      let newTodo = new Todo(name, description, dueDate, priority);
      this.todos.push(newTodo);
    }

    getTodos() {
      return this.todos;
    }
}

export {Project}