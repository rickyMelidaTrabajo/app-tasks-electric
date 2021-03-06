/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
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
  dataPendingTask: string;
  dataFinishedTask: string;
  token: string;

  constructor(public nav: NavController,
    private taskService: TasksServicesService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.typeTask = 'completed';
    this.token = localStorage.getItem('token');
    this.getFinishedTasks();
    this.getTasks();
  }

  closeSession() {
    this.nav.navigateBack('/login');
  }

  changeTask(typeTask) {
    typeTask === 'completed' ? this.getFinishedTasks() : this.getPendingTasks();
  }

  getTasks() {
    this.taskService.getTasks(this.token).toPromise()
      .then((tasks: any) => {
        localStorage.setItem('countTask', tasks.tasks.length);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  getPendingTasks() {
    this.taskService.getPendingTasks(this.token).subscribe(
      (taskPending: any) => {
        this.dataPendingTask = taskPending.tasks;
      },
      err => {
        console.log(err);
      }
    );
  }

  getFinishedTasks() {
    this.taskService.getFinishedTasks(this.token).toPromise()
      .then((taskFinished: any) => {
        this.dataFinishedTask = taskFinished.tasks;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
