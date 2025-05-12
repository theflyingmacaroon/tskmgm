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

    onSubmit() {
        console.log(this.form.value);
        this.boardService.closeAddTaskModal();
    }

    onClose() {
        // TODO maybe save data?
        this.boardService.closeAddTaskModal();
    }

}
