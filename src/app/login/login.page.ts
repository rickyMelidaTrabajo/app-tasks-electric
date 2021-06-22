/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) {
    this.dataUser = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  getDataUser() {
    this.authService.signin(this.dataUser).subscribe(
      (res: any) => {
        localStorage.setItem('username', res.user);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/main']);
      },
      err => {
        this.alert = true;
        this.messageError = err.error.message;
      }
    );
  }

}
