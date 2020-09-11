import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  newTodo: string;
  todoList: Array<string> = ['Go to meet client', 'visit Mum', 'Have dinner with wife'];

  addTodo(): void {
    this.todoList.push(this.newTodo);
    this.newTodo = '';
  }

  deleteTodo(todo: string): void {
    this.todoList = this.todoList.filter(el => el !== todo);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
