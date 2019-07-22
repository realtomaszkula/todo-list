import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../app.component';
@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <span
          (click)="toggle.emit(todo)"
          [style.textDecoration]="doneTodoStyles(todo)"
        >
          {{ todo.task }}
        </span>
        <button (click)="remove.emit(todo.id)">x</button>
      </li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  constructor() {}

  @Output() remove = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<Todo>();
  @Input() todos: Todo[];
  ngOnInit() {}

  doneTodoStyles(todo: Todo) {
    return todo.isDone ? 'line-through' : '';
  }
}
