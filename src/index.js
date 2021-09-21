import { Project } from './project'

let Projects = [];

let Tasks = new Project("Tasks");
Tasks.addNewTodo("First Todo", "my first entry", "neva eva", "low");
Projects.push(Tasks);
//localStorage.setItem("Tasks", JSON.stringify(Tasks));

let School = new Project("School");
School.addNewTodo("Game Design", "Project for the class", "December", "high");
Projects.push(School);
//localStorage.setItem("School", JSON.stringify(School));

// 1. Have a Projects array that holds all the Project objects
// 2. Use localstorage.key(i) to iterate through all saved Project objects

// both methods save it okay, but which makes it easiest to extract the information?

localStorage.setItem("Projects", JSON.stringify(Projects));
//console.log("saved Projects: " + localStorage.getItem("Projects"));

console.log(JSON.parse(localStorage.getItem("Projects")));