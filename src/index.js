import { Project } from './project'
import { userInterface } from './user-interface'

let Projects = []; // array to hold all Project objects

// creating Project objects and adding them to the Projects array
let Tasks = new Project("Tasks");
Tasks.addNewTodo("First Todo", "my first entry", "neva eva", "low");
Projects.push(Tasks);

let School = new Project("School");
School.addNewTodo("Game Design", "Project for the class", "December", "high");
Projects.push(School);

// saving the Projects array to localstorage
localStorage.setItem("Projects", JSON.stringify(Projects));

let displayController = new userInterface();

displayController.addTodoItem();



/*
// This next part is mostly about figuring out how I can recreate
// Project and Todo objects to keep everything completely consistent

// variable to hold parsed localsorage Projects array
let storage = JSON.parse(localStorage.getItem("Projects"));

let savedProjects = []; // temporary Projects array for testing localStorage

// recreates Project objects and their correspondingn Todo objects, adds to array
storage.forEach(project => {
  let newProject = new Project(project.title);

  project.todos.forEach(todo => {
    newProject.addNewTodo(todo.name, todo.description, todo.dueDate, todo.priority);
  });

  savedProjects.push(newProject);
});

// check to see if Projects recreated from localstorage is the same as the original
// It checks out!
console.log(Projects);
console.log(savedProjects);
*/
//localStorage.clear(); // start from scratch each reload


