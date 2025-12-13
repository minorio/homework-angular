import { Routes } from '@angular/router';
import { Task1Component } from './task1-input-output/task1/task1.component';
import { Task2Component } from './task2-viewсhild-contentchild/task2/task2.component';
import { Task3Component } from './task3-hooks/task3.component';

export const routes: Routes = [
  { path: '', component: Task1Component },
  { path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2Component },
  { path: 'task3', component: Task3Component },
];

