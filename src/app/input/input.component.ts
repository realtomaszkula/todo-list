import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <p>
      <input
        (keydown.enter)="addTodo()"
        [(ngModel)]="inputValue"
        placeholder="What needs to be done?"
      />
      <button [disabled]="!inputValue" (click)="addTodo()">Add</button>
    </p>
  `,
  styles: []
})
export class InputComponent implements OnInit {
  constructor() {}

  @Output() newTodo = new EventEmitter<string>();

  inputValue: string = '';

  addTodo() {
    if (this.inputValue) {
      this.newTodo.emit(this.inputValue);
      this.inputValue = '';
    }
  }

  ngOnInit() {}
}
