import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.interface';

@Component({
  selector: 'app-detail-finished-task',
  templateUrl: './detail-finished-task.component.html',
  styleUrls: ['./detail-finished-task.component.scss'],
})
export class DetailFinishedTaskComponent implements OnInit {
  @Input() data: Task;

  constructor(public modalController: ModalController) { }
  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss({});
  }
}
