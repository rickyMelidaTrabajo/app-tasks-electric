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
      (res: TokenResponse) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/main']);
      },
      err => {
        console.log(err);
      }
    );
    console.log(this.dataUser);
  }

}
