// Project class
// Projects have a single title and one or more tasks
// There is a default Tasks project that is initilized at the start
// More projects can be created by user
export default ((name) => {
  let tasks = [];

  const getName = () => name;

  const getTasks = () => tasks;

  const setTasks = (restoredTasks) => tasks = restoredTasks;

  const addTask = (task) => tasks.push(task);

  const deleteTask = (deltask) => tasks = tasks.filter((task) => task.name != deltask.name);

  const toJSON = () => {
    return {name, tasks};
  }

  return {getName, getTasks, setTasks, addTask, deleteTask, toJSON}
})