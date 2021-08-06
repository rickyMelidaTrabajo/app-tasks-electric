/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server = `http://${localStorage.getItem('ip')}:${localStorage.getItem('port')}/`;

  global = `${this.server}api/auth/`;

  constructor(private _http: HttpClient) { }

  signin(dataUser) {
    return this._http.post(this.global + 'signin', dataUser);
  }

  adminValidate(token: any) {
    return this._http.get('http://localhost:1900/api/admin/verify-token?token=' + token);
  }

}
