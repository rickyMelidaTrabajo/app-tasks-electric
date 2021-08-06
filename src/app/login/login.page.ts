/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalServerConfigurationPage } from '../modal-server-configuration/modal-server-configuration.page';
import { TokenResponse } from '../models/responseToken.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dataUser: any;
  alert: boolean = false;
  messageError: string;
  server: string;

  constructor(private authService: AuthService, private router: Router, public modalController: ModalController) {
    this.dataUser = {
      username: '',
      email: '',
      password: ''
    };
  }

  ngOnInit() {
    this.server = localStorage.getItem('server');
  }

  getDataUser() {
    this.authService.signin(this.dataUser).toPromise()
      .then((res: any) => {
        localStorage.setItem('server', this.server);
        localStorage.setItem('username', res.user);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/main']);
      })
      .catch(err => {
        console.log(err.error);
      });
  }

  async presentModal() {
    const modal = this.modalController.create({
      component: ModalServerConfigurationPage,
      cssClass: 'my-styles'
    });

    return (await modal).present();
  }

}
