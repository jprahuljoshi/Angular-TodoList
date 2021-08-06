import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localStorageItem: string | null;
  todos: Todo[];

  constructor() {

    this.localStorageItem = localStorage.getItem("todos");

    if (this.localStorageItem == null)
      this.todos = [];
    else {
      this.todos = JSON.parse(this.localStorageItem);
    }
  }

  ngOnInit(): void {
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos))

  }

  todoCheckbox(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
