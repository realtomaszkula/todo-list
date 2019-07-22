import { Component, Output } from '@angular/core';

export interface Todo {
  id: number;
  task: string;
  isDone: boolean;
}
@Component({
  selector: 'app-root',
  template: `
    <app-input (newTodo)="add($event)"></app-input>
    <app-list
      (remove)="remove($event)"
      (toggle)="toggle($event)"
      [todos]="todos"
    ></app-list>
  `,

  styles: []
})
export class AppComponent {
  title = 'todo-list';
  id = 0;

  todos: Todo[] = [
    { id: 1, task: ' Learn', isDone: true },
    { id: 2, task: ' Kiss', isDone: false }
  ];

  add(value: string) {
    this.todos.push({ id: this.id++, task: value, isDone: false });
  }

  remove(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggle(todo: Todo) {
    todo.isDone = !todo.isDone;
  }
}
