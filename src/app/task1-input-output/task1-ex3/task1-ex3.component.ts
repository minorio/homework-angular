import { Component } from '@angular/core';
import {Task1Ex3Child } from './task1-ex3-child/task1-ex3-child.component';

@Component({
  selector: 'task1-ex3',
  templateUrl: 'task1-ex3.component.html',
  styleUrls: ['./task1-ex3.component.scss'],
  imports: [Task1Ex3Child],
  standalone: true,
})

export class Task1Ex3 {
  result = "";
  childValue = "";

  addWord(value:string) {
    this.result = 'Большой ' + value;
    console.log(this.result);
  }
  
}