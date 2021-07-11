/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.interface';
import { DetailFinishedTaskComponent } from '../detail-finished-task/detail-finished-task.component';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-list-completed-tasks',
  templateUrl: './list-completed-tasks.component.html',
  styleUrls: ['./list-completed-tasks.component.scss'],
})
export class ListCompletedTasksComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  @Input() data: Array<Task>;
  tasksPartial: Array<Task> = new Array();
  index = 0;

  existTasks: boolean;

  constructor(public modalController: ModalController, private loadingController: LoadingController) { }

  ngOnInit() {
    this.loading();
  }

  async openModal(task) {
    const modal = await this.modalController.create({
      component: DetailFinishedTaskComponent,
      swipeToClose: true,
      componentProps: {
        data: task
      }
    });

    return await modal.present();
  }

  async loading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando Tareas...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    if (this.data !== undefined) {
      this.loadPartialData();
      this.existTasks = true;
    } else {
      this.existTasks = false;
    }

  }

  loadData(event) {
    if (this.tasksPartial.length === this.data.length) {
      event.target.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    setTimeout(() => {
      this.loadPartialData();
      event.target.complete();
    }, 1000);

  }

  loadPartialData() {
    if (this.data.length <= 5) {
      for (let i = 0; i <= this.data.length; i++) {
        this.tasksPartial.push(this.data.shift());
      }
      if (this.data.length === 0) {
        this.infiniteScroll.disabled = true;
      }
    } else {
      this.tasksPartial = this.data.splice(0, 5);

    }
  }
}
