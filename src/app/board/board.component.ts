import {
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal
} from '@angular/core';
import {BoardColumnComponent} from "./board-column/board-column.component";
import {BoardService} from "./board.service";
import {Status} from "./board-column/statuses.model";

@Component({
  selector: 'app-board',
    imports: [
        BoardColumnComponent
    ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  private boardService = inject(BoardService);
  private destroyRef = inject(DestroyRef);

  statuses = signal<Status[] | undefined>(undefined)


  ngOnInit() {
    const subscription = this.boardService.getStatuses().subscribe({
      next: (statuses) => {
        this.statuses.set(statuses);
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
