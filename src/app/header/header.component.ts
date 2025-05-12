import {Component, inject} from '@angular/core';
import {ButtonComponent} from "../shared/button/button.component";
import {MatDialog} from "@angular/material/dialog";
import {
    AddTaskModalComponent
} from "../board/add-task-modal/add-task-modal.component";
import {BoardService} from "../board/board.service";

@Component({
    selector: 'app-header',
    imports: [ButtonComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    private boardService = inject(BoardService);

    openAddTaskModal(): void {
        this.boardService.openAddTaskModal();
    }

}
