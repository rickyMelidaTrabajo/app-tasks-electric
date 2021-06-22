import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.interface';

@Component({
  selector: 'app-detail-pending-task',
  templateUrl: './detail-pending-task.component.html',
  styleUrls: ['./detail-pending-task.component.scss'],
})
export class DetailPendingTaskComponent implements OnInit {
  @Input() data: Task;

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss({});
  }
}
