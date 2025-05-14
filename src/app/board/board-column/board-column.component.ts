import {Component, DestroyRef, inject, input, OnInit} from '@angular/core';
import {BoardItemComponent} from "../board-item/board-item.component";
import {BoardService} from "../board.service";


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

    tasks = this.boardService.loadedTasks;
    title = input('');
    status = input('');
    user = input('');

    ngOnInit() {
        const subscription = this.boardService.getTasks().subscribe();
        this.destroyRef.onDestroy(() => subscription.unsubscribe());
    }

}
