import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task1-ex1-child',
  templateUrl: 'task1-ex1-child.component.html',
  styleUrls: ['./task1-ex1-child.component.scss'],
  standalone: true
})
export class Task1Ex1ChildComponent {
  @Input() parentInput = '';
  @Output() addWord = new EventEmitter<string>();

  addBigWord() {
    if (this.parentInput.length == 0) {
      return;
    }
    const result = 'Большой ' + this.parentInput;
    this.addWord.emit(result);
  }
  addSmallWord() {
    if (this.parentInput.length == 0) {
      return;
    }
    const result = 'Маленький ' + this.parentInput;
    this.addWord.emit(result);
  }
}