import { Project } from './project'
import { Todo } from './todo'

let Tasks = new Project("Tasks");

Tasks.addNewTodo("First Todo");

localStorage.setItem("Tasks", JSON.stringify(Tasks));

console.log(localStorage.getItem("Tasks"));

console.log(Tasks.getTodos());