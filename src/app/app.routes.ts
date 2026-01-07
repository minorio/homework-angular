import { Routes } from '@angular/router';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

export const routes: Routes = [
  { path: '', component: DirectivesPracticeComponent },
  { path: 'practice-directive', component: DirectivesPracticeComponent },
  { path: 'custom-directive', component: CustomDirectiveComponent },
];

