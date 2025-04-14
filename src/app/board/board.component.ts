import { Component } from '@angular/core';
import {BoardColumnComponent} from "./board-column/board-column.component";
import {STATUSES_MOCK} from "./statuses.const";

@Component({
  selector: 'app-board',
    imports: [
        BoardColumnComponent
    ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  statuses = STATUSES_MOCK;

}
