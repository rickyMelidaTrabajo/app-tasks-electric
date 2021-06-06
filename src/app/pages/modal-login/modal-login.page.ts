import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.page.html',
  styleUrls: ['./modal-login.page.scss'],
})
export class ModalLoginPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  closeSession() {
    this.nav.navigateBack('/login');
  }

}
