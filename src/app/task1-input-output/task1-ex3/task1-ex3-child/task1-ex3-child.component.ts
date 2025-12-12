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
  @Input() value: string = "";
  @Output() valueChange = new EventEmitter<string>();

  send() {
    this.valueChange.emit(this.value);
  }
}