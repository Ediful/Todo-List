import { Project } from './project'
import { Todo } from './todo'

let Tasks = new Project("Tasks");
let firstTodo = new Todo("First Todo");
let secondTodo = new Todo("Second Todo");

Tasks.addTodo(firstTodo);
Tasks.addTodo(secondTodo);

console.log(Tasks.getTodos());