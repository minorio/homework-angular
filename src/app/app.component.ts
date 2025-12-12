import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1Ex1 } from './task1-input-output/task1-ex1/task1-ex1.component';
import { Task1Ex2 } from './task1-input-output/task1-ex2/task1-ex2.component';
import { Task1Ex3 } from './task1-input-output/task1-ex3/task1-ex3.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Task1Ex1,Task1Ex2,Task1Ex3],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}