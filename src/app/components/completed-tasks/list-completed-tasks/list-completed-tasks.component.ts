/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.interface';
import { DetailFinishedTaskComponent } from '../detail-finished-task/detail-finished-task.component';

@Component({
  selector: 'app-list-completed-tasks',
  templateUrl: './list-completed-tasks.component.html',
  styleUrls: ['./list-completed-tasks.component.scss'],
})
export class ListCompletedTasksComponent implements OnInit {
  @Input() data: Array<Task>;

  tasks: Array<any> = new Array();
  constructor(public modalController: ModalController, private loadingController: LoadingController) { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.tasks.push('task');
    }
    this.loading();
  }

  async openModal(task) {
    const modal = await this.modalController.create({
      component: DetailFinishedTaskComponent,
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
    this.data;
  }

}
