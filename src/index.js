import { TodoItem } from './code/logic/TodoItem';
import { TodoList } from './code/logic/TodoList';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}


// Example usage:
const todoList = new TodoList();
todoList.addProject('Work');
todoList.addProject('Personal');

const workTodo = new TodoItem('Finish report', 'Complete the quarterly report.', '2024-02-15', 'High');
todoList.addTodoToProject(workTodo, 'Work');

const personalTodo = new TodoItem('Buy groceries', 'Milk, Bread, Eggs', '2024-02-10', 'Medium');
todoList.addTodoToProject(personalTodo, 'Personal');

console.log(todoList.getProjectTodos('Work'));
console.log(todoList.getProjectTodos('Personal'));