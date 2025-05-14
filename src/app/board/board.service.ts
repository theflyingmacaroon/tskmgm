import {inject, Injectable, signal} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs";
import {Task} from "./board-item/task.model";
import {Status} from "./board-column/statuses.model";
import {AddTaskModalComponent} from "./add-task-modal/add-task-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
    providedIn: 'root',
})
export class BoardService {
    private httpClient = inject(HttpClient);
    private tasks = signal<Task[]>([]);

    loadedTasks = this.tasks.asReadonly();


    getTasks() {
        return this.httpClient.get<Task[]>(
            'http://localhost:3000/tasks', {
                observe: 'response'
            }).pipe(
            map((response) => response.body!),
            tap({
                next: ((userTasks) => this.tasks.set(userTasks))
            })
        );
    }

    getStatuses() {
        return this.httpClient.get<Status[]>(
            'http://localhost:3000/statuses', {
                observe: 'response'
            }).pipe(
            map((response) => {
                return response.body!;
            }),
            // catchError((error) => throwError(
            //         () => new Error(error),
            //     )
            // ),
        );

    }

    addTask(task: Task) {
        return this.httpClient.post<Task>('http://localhost:3000/tasks', task)
                   .pipe(
                       tap((newTask) => {
                           const tasks = this.loadedTasks();
                           this.tasks.set([...tasks, newTask]);
                       })
                   ).subscribe();
    }

}