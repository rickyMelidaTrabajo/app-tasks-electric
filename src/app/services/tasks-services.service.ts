/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksServicesService {
  global = 'http://localhost:1900/api/';

  constructor(private _http: HttpClient) { }

  test() {
    return this._http.get(this.global + 'api');
  }

  addPendingTask(tasks, token) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.post(this.global + 'task/add-pending-task', tasks, { headers: header });
  }

  addFinishedTask(tasks, token) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.post(this.global + 'task/add-finished-task', tasks, { headers: header });

  }

  getPendingTasks(token) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.global + 'task/get-pending-tasks', { headers: header });
  }

  getFinishedTasks(token) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.global + 'task/get-finished-tasks', { headers: header });
  }

  getTasks(token) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.global + 'task/get-tasks', { headers: header });
  }
}
