// Project class
// Projects have a single title and one or more tasks
// There is a default Tasks project that is initilized at the start
// More projects can be created by user

import { Task } from "./task";

class Project {
    tasks = []

    constructor(title) {
      this.title = title;
    }

    addNewTask(title, description, dueDate, priority) {
      let newTask = new Task(title, description, dueDate, priority);
      this.tasks.push(newTask);
    }

    getTodos() {
      return this.tasks;
    }
}

export {Project}