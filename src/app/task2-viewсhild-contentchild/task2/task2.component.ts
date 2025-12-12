import { Component } from '@angular/core';
import { Task2Ex1Component } from "../task2-ex1/task2-ex1.component";
import { Task2Ex2Component } from "../task2-ex2/task2-ex2.component";
import { Task2Ex3Component } from "../task2-ex3/task2-ex3.component";


@Component({
  selector: 'task2',
  templateUrl: 'task2.component.html',
  styleUrls: ['./task2.component.scss'],
  standalone: true,
  imports: [Task2Ex1Component, Task2Ex2Component, Task2Ex3Component],
})

export class Task2Component {

}