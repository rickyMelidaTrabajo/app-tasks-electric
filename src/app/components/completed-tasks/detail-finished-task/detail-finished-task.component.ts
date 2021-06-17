import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-finished-task',
  templateUrl: './detail-finished-task.component.html',
  styleUrls: ['./detail-finished-task.component.scss'],
})
export class DetailFinishedTaskComponent implements OnInit {
  @Input() data: string;

  constructor(public modalController: ModalController) { }
  ngOnInit() {
    console.log(this.data);
  }

  closeModal() {
    this.modalController.dismiss({});
  }
}
