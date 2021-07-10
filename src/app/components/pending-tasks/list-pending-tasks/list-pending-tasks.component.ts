/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.interface';
import { FormClosePendingComponent } from '../form-close-pending/form-close-pending.component';
import { DetailPendingTaskComponent } from '../detail-pending-task/detail-pending-task.component';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-list-pending-tasks',
  templateUrl: './list-pending-tasks.component.html',
  styleUrls: ['./list-pending-tasks.component.scss'],
})
export class ListPendingTasksComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  @Input() data: Array<Task>;
  tasks: Array<any> = new Array();

  tasksPartial: Array<Task> = new Array();
  index = 0;
  constructor(private modalController: ModalController, private loadingController: LoadingController) { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.tasks.push('task');
    }
    this.loading();
  }

  async openModalClosePending(task) {
    const modal = await this.modalController.create({
      component: FormClosePendingComponent,
      swipeToClose: true,
      componentProps: {
        // eslint-disable-next-line quote-props
        'data': task
      }
    });

    return await modal.present();
  }

  async openModalDetails(task) {
    const modal = await this.modalController.create({
      component: DetailPendingTaskComponent,
      swipeToClose: true,
      componentProps: {
        // eslint-disable-next-line quote-props
        'data': task
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
    console.log(this.data);
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
