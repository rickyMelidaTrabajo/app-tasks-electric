/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Task } from 'src/app/models/task.interface';
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
  @HostListener('window:scroll')

  typeTask: string;
  dataPendingTask: Array<Task>;
  dataFinishedTask: Array<Task>;
  token: string;
  search: any;

  constructor(public nav: NavController,
    private taskService: TasksServicesService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.typeTask = 'completed';
    this.search = 'filter';
    this.token = localStorage.getItem('token');
  }

  closeSession() {
    this.nav.navigateBack('/login');
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

  btnUpEvent() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  searchBy(event) {
    console.log(event);
  }
}
