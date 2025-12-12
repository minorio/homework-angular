import { provideRouter, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const routes: Routes = [

];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
