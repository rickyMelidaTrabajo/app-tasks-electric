/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.interface';
import { FormClosePendingComponent } from '../form-close-pending/form-close-pending.component';
import { DetailPendingTaskComponent } from '../detail-pending-task/detail-pending-task.component';

@Component({
  selector: 'app-list-pending-tasks',
  templateUrl: './list-pending-tasks.component.html',
  styleUrls: ['./list-pending-tasks.component.scss'],
})
export class ListPendingTasksComponent implements OnInit {
  tasks: Array<any> = new Array();
  @Input() data: Array<Task>;
  //@Input() data: Array<any>;

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
    this.data;
  }
}
