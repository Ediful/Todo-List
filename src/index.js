import { Project } from './project'
import { Todo } from './todo'

let Tasks = new Project("Tasks");

Tasks.addNewTodo("First Todo");

console.log(Tasks.getTodos());