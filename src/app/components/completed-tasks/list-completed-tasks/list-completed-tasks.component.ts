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

  tasks: Array<any> = new Array();

  constructor(public modalController: ModalController, private loadingController: LoadingController) { }

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.tasks.push('task');
    }
    this.loading();
    //this.loadPartialData(this.index);
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
    this.loadPartialData(this.index);
  }

  loadData(event) {
    if (this.tasksPartial.length === this.data.length) {
      event.target.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    setTimeout(() => {
      this.loadPartialData(this.index);
      event.target.complete();
    }, 1000);

    this.index = + 5;
  }

  loadPartialData(lastItem) {
    for (let i = lastItem; i < lastItem + 5; i++) {
      this.tasksPartial.push(this.data[i]);
    }
  }
}
