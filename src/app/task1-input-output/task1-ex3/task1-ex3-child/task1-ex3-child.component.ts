import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'task1-ex3-child',
  templateUrl: 'task1-ex3-child.component.html',
  styleUrls: ['./task1-ex3-child.component.scss'],
  standalone: true,
  imports: [FormsModule]
})

export class Task1Ex3ChildComponent  {
  @Input() parentInput = '';
  @Output() parentInputChange = new EventEmitter<string>();
  @Output() resultChange = new EventEmitter<string>();

  addBigWord() {
    if (this.parentInput.length == 0) {
      return;
    }
    // if (!this.parentInput.startsWith('Большой ')) {
    //   this.parentInput = 'Большой ' + this.parentInput.replace(/^Большой |^Маленький /, '');
       this.resultChange.emit('Большой ' + this.parentInput);
    // }
  }
  addSmallWord() {
    if (this.parentInput.length == 0) {
      return;
    }
    // if (!this.parentInput.startsWith('Маленький ')) {
    //   this.parentInput = 'Маленький ' + this.parentInput.replace(/^Большой |^Маленький /, '');
      this.resultChange.emit('Маленький ' + this.parentInput);
    // }
  }
}