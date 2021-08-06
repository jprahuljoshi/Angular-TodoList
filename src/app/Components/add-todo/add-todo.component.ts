import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  desc!: string;

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm) {
    const todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.title,
      desc: this.desc,
      active: true
    }

    this.addTodo.emit(todo);

    myForm.resetForm();
  }

}
