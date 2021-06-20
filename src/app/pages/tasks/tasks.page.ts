/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TasksServicesService } from 'src/app/services/tasks-services.service';

interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  typeTask: string;
  dataTask: string;
  token: string;

  constructor(public nav: NavController, private taskService: TasksServicesService) { }

  ngOnInit() {
    this.typeTask = 'completed';
    this.token = localStorage.getItem('token');
    this.getFinishedTasks();
  }

  closeSession() {
    this.nav.navigateBack('/login');
  }

  changeTask(typeTask) {
    typeTask === 'completed' ? this.getFinishedTasks() : this.getPendingTasks();
  }

  getPendingTasks() {
    this.taskService.getPendingTasks(this.token).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  getFinishedTasks() {
    this.taskService.getFinishedTasks(this.token).subscribe(
      (res: any) => {
        this.dataTask = JSON.stringify(res.tasks);
      },
      err => {
        console.log(err);
      }
    );
  }

}
