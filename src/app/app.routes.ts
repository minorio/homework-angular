import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/peoples', pathMatch: 'full'},
  { path: 'peoples', component: PeopleListComponent},
  { path: '**', redirectTo: '/peoples', pathMatch: 'full'},

];

