import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form-close-pending',
  templateUrl: './form-close-pending.component.html',
  styleUrls: ['./form-close-pending.component.scss'],
})
export class FormClosePendingComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss({});
  }

}
