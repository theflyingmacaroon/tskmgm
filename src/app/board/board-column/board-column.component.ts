import {
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal
} from '@angular/core';
import {BoardItemComponent} from "../board-item/board-item.component";
import {BoardService} from "../board.service";
import {Task} from "../board-item/task.model";


@Component({
  selector: 'app-board-column',
  imports: [
    BoardItemComponent
  ],
  templateUrl: './board-column.component.html',
  styleUrl: './board-column.component.css'
})
export class BoardColumnComponent implements OnInit {
  private boardService = inject(BoardService);
  private destroyRef = inject(DestroyRef);

  tasks = signal<Task[] | undefined>(undefined)

  title =  input('');
  status =  input('') ;
  user =  input('') ;

  ngOnInit() {

    const subscription = this.boardService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks.set(tasks);
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

}
