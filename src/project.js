// Project class
// Projects have a single title and one or more tasks
// There is a default Tasks project that is initilized at the start
// More projects can be created by user
export default ((name) => {
  let tasks = [];

  const getName = () => name;

  const getTasks = () => tasks;

  const setTasks = (restoredTasks) => tasks = restoredTasks;

  const addTask = (task) => {
    tasks.push(task);
    console.log(tasks);
  }

  const toJSON = () => {
    return {name, tasks};
  }

  return {getName, getTasks, setTasks, addTask, toJSON}
})