import { TodoItem } from '../logic/TodoItem.js'

class TodoDOMController {
  constructor(todoList) {
      this.todoList = todoList;
      this.projectListElement = document.getElementById('project-list');
      this.todoListElement = document.getElementById('todo-list');
      this.bindProjectAddition();
      this.bindTodoAddition();
      this.refreshProjects();
  }

  refreshProjects() {
      this.projectListElement.innerHTML = '';
      this.todoList.projects.forEach(project => {
          const projectItem = document.createElement('li');
          projectItem.textContent = project.name;
          projectItem.classList.add('project-item');
          projectItem.addEventListener('click', () => this.selectProject(project));
          this.projectListElement.appendChild(projectItem);
      });
  }

  selectProject(project) {
      this.selectedProject = project;
      this.refreshTodos();
  }

  refreshTodos() {
      if (!this.selectedProject) return;
      this.todoListElement.innerHTML = '';
      this.selectedProject.todos.forEach(todo => {
          const todoItem = document.createElement('li');
          todoItem.textContent = `${todo.title} - ${todo.dueDate}`;
          todoItem.classList.add('todo-item');
          this.todoListElement.appendChild(todoItem);
      });
  }

  bindProjectAddition() {
      const addButton = document.getElementById('add-project-btn');
      const projectNameInput = document.getElementById('new-project-name');
      addButton.addEventListener('click', () => {
          const projectName = projectNameInput.value.trim();
          if (projectName) {
              this.todoList.addProject(projectName);
              projectNameInput.value = '';
              this.refreshProjects();
          }
      });
  }

  bindTodoAddition() {
      const addButton = document.getElementById('add-todo-btn');
      const todoTitleInput = document.getElementById('new-todo-title');
      // Extend this method to capture more details about the todo
      addButton.addEventListener('click', () => {
          const todoTitle = todoTitleInput.value.trim();
          if (todoTitle && this.selectedProject) {
              const newTodo = new TodoItem(todoTitle, '', 'No date', 'Normal');
              this.selectedProject.addTodo(newTodo);
              todoTitleInput.value = '';
              this.refreshTodos();
          }
      });
  }
}

export { TodoDOMController };