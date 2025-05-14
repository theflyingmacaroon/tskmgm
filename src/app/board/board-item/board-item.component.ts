import {Component, input} from '@angular/core';
import {MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@Component({
    selector: 'app-board-item',
    imports: [
        MatIconModule,
        MatIconButton
    ],
    templateUrl: './board-item.component.html',
    styleUrl: './board-item.component.css'
})
export class BoardItemComponent {
    title = input<string>();
    description = input<string>();
    user = input.required<string>();
}
