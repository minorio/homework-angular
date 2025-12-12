import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task1-ex1-child',
  templateUrl: 'task1-ex1-child.component.html',
  styleUrls: ['./task1-ex1-child.component.scss'],
  standalone: true
})

export class Task1Ex1ChildComponent  {
  @Output() addWord = new EventEmitter<string>();
  send(value:string) {
    this.addWord.emit(value);
  }
}