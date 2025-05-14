import {AddTaskModalComponent} from "./add-task-modal.component";
import {inject, Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
    providedIn: 'root'
})
export class AddTaskModalService {
    readonly dialog = inject(MatDialog);

    openAddTaskModal(): void {
        const dialogRef = this.dialog.open(AddTaskModalComponent, {
            width: '500px',
            height: '40vw',
            panelClass: 'add-task-modal',
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                console.log('The dialog was closed');
            }
        });
    }

    closeAddTaskModal(): void {
        this.dialog.closeAll();
    }
}