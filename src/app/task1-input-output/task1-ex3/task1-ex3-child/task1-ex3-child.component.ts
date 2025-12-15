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

  addBigWord() {
    if (!this.parentInput.startsWith('Большой ')) {
      this.parentInput = 'Большой ' + this.parentInput.replace(/^Большой |^Маленький /, '');
      this.parentInputChange.emit(this.parentInput);
    }
  }
  addSmallWord() {
    if (!this.parentInput.startsWith('Маленький ')) {
      this.parentInput = 'Маленький ' + this.parentInput.replace(/^Большой |^Маленький /, '');
      this.parentInputChange.emit(this.parentInput);
    }
  }
}