/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.page.html',
  styleUrls: ['./modal-login.page.scss'],
})
export class ModalLoginPage implements OnInit {
  dataAdmin: any;
  alert: boolean;
  messageError: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private nav: NavController
  ) {
    this.dataAdmin = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  closeSession() {
    this.nav.navigateBack('/login');
  }

  authAdmin() {
    this.authService.signin(this.dataAdmin).subscribe(
      (res: any) => {
        console.log(res.rol);
        if (res.rol === 'Admin') {
          localStorage.setItem('token-admin', res.token);
          window.location.href = 'http://localhost:8100/main-admin';
        }


      },
      (err: any) => {
        console.log(err);
      }
    );

  }

  isAdmin(token): any {
    let res: boolean;

    this.authService.adminValidate(token)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        res = res.data.rol === 'Admin' ? true : false;
      })
      .catch(err => {
        console.log(err);
      });
  }


  redirect(flag: boolean): any {
    if (!flag) {
      this.router.navigate(['/', 'main-admin']);
    }
  }
}
