import { Routes } from '@angular/router';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { DragNDropComponent } from './drag-n-drop/drag-n-drop.component';

export const routes: Routes = [
  { path: '', component: DirectivesPracticeComponent },
  { path: 'practice-directive', component: DirectivesPracticeComponent },
  { path: 'custom-directive', component: CustomDirectiveComponent },
  { path: 'drag-and-drop', component: DragNDropComponent },
];

