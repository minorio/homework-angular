import { Component } from '@angular/core';
import { Task1Ex2Child } from './task1-ex2-child/task1-ex2-child.component';

@Component({
  selector: 'task1-ex2',
  templateUrl: 'task1-ex2.component.html',
  styleUrls: ['./task1-ex2.component.scss'],
  imports: [Task1Ex2Child],
  standalone: true,
})

export class Task1Ex2 {
  result = "";
    addWord(value:string){
      this.result = 'Большой ' + value;
       console.log(this.result)
    }
}