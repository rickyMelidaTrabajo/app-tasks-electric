import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailPendingTaskComponent } from '../detail-pending-task/detail-pending-task.component';

@Component({
  selector: 'app-list-pending-tasks',
  templateUrl: './list-pending-tasks.component.html',
  styleUrls: ['./list-pending-tasks.component.scss'],
})
export class ListPendingTasksComponent implements OnInit {
  tasks: Array<any> = new Array();

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.tasks.push('task');
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: DetailPendingTaskComponent,
      swipeToClose: true,
      componentProps: {
        // eslint-disable-next-line quote-props
        'data': 'my data'
      }
    });

    return await modal.present();
  }
}
