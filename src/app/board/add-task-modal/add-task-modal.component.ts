import {Component, inject} from '@angular/core';
import {
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from "@angular/forms";
import {BoardService} from "../board.service";
import {Task} from "../board-item/task.model";
import {AddTaskModalService} from "./add-task-modal.service";

@Component({
    selector: 'app-add-task-modal',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatFormField,
        MatLabel,
        MatFormField,
        MatFormField,
        MatDialogActions,
        MatButton,
        MatInput,
        ReactiveFormsModule,
    ],
    standalone: true,
    templateUrl: './add-task-modal.component.html',
    styleUrl: './add-task-modal.component.css'
})
export class AddTaskModalComponent {
    form = new FormGroup({
        title: new FormControl(
            '', [Validators.required]
        ),
        description: new FormControl(
            '', [Validators.required]
        ),

    });
    private boardService = inject(BoardService);
    private addTaskModalService = inject(AddTaskModalService);

    onSubmit() {
        const task: Task = {
            user: 'user1', // TODO : Get current user
            statusId: 'toDo',
            id: Math.random(),
            title: this.form.get('title')?.value ?? '',
            description: this.form.get('description')?.value ?? '',
        };

        this.boardService.addTask(task);
        this.addTaskModalService.closeAddTaskModal();
    }

    onClose() {
        // TODO maybe save data?
        this.addTaskModalService.closeAddTaskModal();
    }

}
