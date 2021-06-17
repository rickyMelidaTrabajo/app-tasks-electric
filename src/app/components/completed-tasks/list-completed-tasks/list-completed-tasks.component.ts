import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailFinishedTaskComponent } from '../detail-finished-task/detail-finished-task.component';

@Component({
  selector: 'app-list-completed-tasks',
  templateUrl: './list-completed-tasks.component.html',
  styleUrls: ['./list-completed-tasks.component.scss'],
})
export class ListCompletedTasksComponent implements OnInit {

  tasks: Array<any> = new Array();
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.tasks.push('task');
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: DetailFinishedTaskComponent,
      swipeToClose: true,
      componentProps: {
        // eslint-disable-next-line quote-props
        'data': 'my data'
      }
    });

    return await modal.present();
  }

}
