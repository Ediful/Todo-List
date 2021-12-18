// Task objects have a title, description, dueDate and priority
// they are added to projects
export default ((title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
})