import { Project } from './Project.js';

class TodoList {
  constructor() {
    this.projects = [new Project('Default')]; // Initialize with a default project
  }

  addProject(projectName) {
    const project = new Project(projectName);
    this.projects.push(project);
  }

  addTodoToProject(todo, projectName) {
    const project = this.projects.find(p => p.name === projectName);
    if (project) {
      project.addTodo(todo);
    } else {
      console.log(`Project ${projectName} not found. Adding todo to the Default project.`);
      this.projects[0].addTodo(todo); // Fallback to the default project
    }
  }

  getProjectTodos(projectName) {
    const project = this.projects.find(p => p.name === projectName);
    return project ? project.todos : [];
  }
}

export { TodoList };