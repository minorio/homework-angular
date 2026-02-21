import { Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';

export const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full'},
  { path: 'table', component: CharactersComponent},
  { path: '**', redirectTo: '/table', pathMatch: 'full'},

];

