import { Component } from '@angular/core';
import {Task1Ex3ChildComponent } from './task1-ex3-child/task1-ex3-child.component';

@Component({
  selector: 'task1-ex3',
  templateUrl: 'task1-ex3.component.html',
  styleUrls: ['./task1-ex3.component.scss'],
  imports: [Task1Ex3ChildComponent],
  standalone: true,
})

export class Task1Ex3Component {
  result = "";
  childValue = "";

  addWord(value:string) {
    this.result = 'Большой ' + value;
    console.log(this.result);
  }
  
}