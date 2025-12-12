import { Component } from '@angular/core';
import { Task1Ex1ChildComponent } from './task1-ex1-child/task1-ex1-child.component';

@Component({
  selector: 'task1-ex1',
  templateUrl: 'task1-ex1.component.html',
  styleUrls: ['./task1-ex1.component.scss'],
  imports: [Task1Ex1ChildComponent],
  standalone: true,
})

export class Task1Ex1Component {
  result = "";
    addWord(value:string){
      this.result = 'Большой ' + value;
       console.log(this.result)
    }
}