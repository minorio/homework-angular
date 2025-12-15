import { Component } from '@angular/core';
import {Task1Ex3ChildComponent } from './task1-ex3-child/task1-ex3-child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'task1-ex3',
  templateUrl: 'task1-ex3.component.html',
  styleUrls: ['./task1-ex3.component.scss'],
  imports: [Task1Ex3ChildComponent, FormsModule],
  standalone: true,
})

export class Task1Ex3Component {
  text  = '';
}