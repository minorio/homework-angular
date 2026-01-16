import { Routes } from '@angular/router';
import { Task1CardsComponent } from './task1-cards/task1-cards.component';
import { Task2ObservableComponent } from './task2-observable/task2-observable.component';

export const routes: Routes = [
  { path: 'task1', component: Task1CardsComponent },
  { path: 'task2', component: Task2ObservableComponent },
];

