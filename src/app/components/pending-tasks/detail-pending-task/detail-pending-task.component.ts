import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-pending-task',
  templateUrl: './detail-pending-task.component.html',
  styleUrls: ['./detail-pending-task.component.scss'],
})
export class DetailPendingTaskComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss({});
  }
}
