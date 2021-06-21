import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CompletedTask } from 'src/app/models/completedTask.interface';

@Component({
  selector: 'app-detail-finished-task',
  templateUrl: './detail-finished-task.component.html',
  styleUrls: ['./detail-finished-task.component.scss'],
})
export class DetailFinishedTaskComponent implements OnInit {
  @Input() data: CompletedTask;

  constructor(public modalController: ModalController) { }
  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss({});
  }
}
