import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ViewHeaderComponent } from './view-header/view-header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ViewHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-management-app';
}
