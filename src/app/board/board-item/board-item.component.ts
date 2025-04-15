import {Component, input} from '@angular/core';

@Component({
  selector: 'app-board-item',
  imports: [],
  templateUrl: './board-item.component.html',
  styleUrl: './board-item.component.css'
})
export class BoardItemComponent {
  title =  input<string>()
  description =  input<string>()
  user =  input.required<string>()
}
