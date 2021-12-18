// Project class
// Projects have a single title and one or more tasks
// There is a default Tasks project that is initilized at the start
// More projects can be created by user

export default ((projectTitle) => {
  let tasks = [];

  const getTitle = () => projectTitle;

  addNewTask = (title, description, dueDate, priority) => {
    let newTask = new tasks(title, description, dueDate, priority);
    this.tasks.push(newTask);
  }

  return {getTitle, tasks, addNewTask}
})