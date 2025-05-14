import {Component, inject} from '@angular/core';
import {ButtonComponent} from "../shared/button/button.component";
import {
    AddTaskModalService
} from "../board/add-task-modal/add-task-modal.service";

@Component({
    selector: 'app-header',
    imports: [ButtonComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: true
})
export class HeaderComponent {
    private addTaskModalService = inject(AddTaskModalService);

    openAddTaskModal(): void {
        this.addTaskModalService.openAddTaskModal();
    }

}
