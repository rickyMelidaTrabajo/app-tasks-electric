import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CompletedTask } from 'src/app/models/completedTask.interface';

@Component({
  selector: 'app-detail-pending-task',
  templateUrl: './detail-pending-task.component.html',
  styleUrls: ['./detail-pending-task.component.scss'],
})
export class DetailPendingTaskComponent implements OnInit {
  @Input() data: CompletedTask;
  
  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss({});
  }
}
