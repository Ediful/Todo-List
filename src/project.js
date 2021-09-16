// Project class
// Projects have a single title and one or more todos
// There is a default Tasks project that is initilized at the start
// More projects can be created by user

class Project {
    todos = []

    constructor(name) {
      this.name = name;
    }

    addTodo(todo){
      this.todos.push(todo);
    }

    getTodos() {
      return this.todos;
    }

}

export {Project}