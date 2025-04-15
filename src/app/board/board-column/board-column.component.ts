import {Component, input} from '@angular/core';
import {BoardItemComponent} from "../board-item/board-item.component";
import {BOARD_ITEMS_MOCK} from "../mock-data/board-items.const";

@Component({
  selector: 'app-board-column',
  imports: [
    BoardItemComponent
  ],
  templateUrl: './board-column.component.html',
  styleUrl: './board-column.component.css'
})
export class BoardColumnComponent {
  tasks = BOARD_ITEMS_MOCK;

  title =  input('');
  status =  input('') ;
  user =  input('') ;

}
