import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksServicesService {
  global='http://localhost:1900/api/';

  constructor(private _http: HttpClient) { }

  test() {
    return this._http.get(this.global + 'api');
  }

  addPendingTask(tasks) {
    return this._http.post(this.global + 'task/add-finished-task', tasks);
  }

  addFinishedTask() {

  }

}
