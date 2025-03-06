import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  template: `
    <h1>Angular 19 Services Example</h1>
    <app-user-list></app-user-list>
  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

