import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/peoples', pathMatch: 'full'},
  { path: 'peoples', component: PeopleListComponent},
  { path: '**', component: NotFoundComponent},

];

