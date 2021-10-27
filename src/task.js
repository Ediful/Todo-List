// Task objects have a title, description, dueDate and priority
// they are added to projects

class Task {
    constructor(name, description, dueDate, priority) {
      this.name = name;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
}

export {Task}