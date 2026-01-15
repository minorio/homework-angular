import { Routes } from '@angular/router';
import { Task1CardsComponent } from './task1-cards/task1-cards.component';

export const routes: Routes = [
  { path: '', component: Task1CardsComponent },
  { path: 'task1', component: Task1CardsComponent },
  { path: 'task2', component: Task1CardsComponent },
];

