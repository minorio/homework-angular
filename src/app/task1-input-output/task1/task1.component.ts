import { Component } from '@angular/core';
import { Task1Ex1Component } from "../task1-ex1/task1-ex1.component";
import { Task1Ex2Component } from "../task1-ex2/task1-ex2.component";
import { Task1Ex3Component } from "../task1-ex3/task1-ex3.component";


@Component({
  selector: 'task1',
  templateUrl: 'task1.component.html',
  styleUrls: ['./task1.component.scss'],
  standalone: true,
  imports: [Task1Ex1Component, Task1Ex2Component, Task1Ex3Component],
})

export class Task1Component {

}