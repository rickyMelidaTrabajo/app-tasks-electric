/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server = localStorage.getItem('server') == 'firebase' ? 'http://localhost:5000/' : 'http://localhost:1900/';

  global = `${this.server}api/auth/`;

  constructor(private _http: HttpClient) { }

  signin(dataUser) {
    return this._http.post(this.global + 'signin', dataUser);
  }

  adminValidate(token: any) {
    return this._http.get('http://localhost:1900/api/admin/verify-token?token=' + token);
  }

}
