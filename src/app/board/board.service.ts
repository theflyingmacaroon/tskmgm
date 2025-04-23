import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map, throwError} from "rxjs";
import {Task} from "./board-item/task.model";
import {Status} from "./board-column/statuses.model";

@Injectable({
    providedIn: 'root',
})
export class BoardService {
    private httpClient = inject(HttpClient);

    getTasks() {
        return this.httpClient.get<Task[]>(
            'http://localhost:3000/tasks', {
                observe: 'response'
            }).pipe(
            map((response) => {
                console.log(response);
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

}