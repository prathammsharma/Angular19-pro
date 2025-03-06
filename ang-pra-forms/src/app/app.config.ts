import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'template-form', component: TemplateDrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: '', redirectTo: '/template-form', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
