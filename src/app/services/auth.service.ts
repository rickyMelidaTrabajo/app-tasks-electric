/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  global = 'http://localhost:1900/api/user/';

  constructor(private _http: HttpClient) { }

  signin(dataUser) {
    return this._http.post(this.global + 'signin', dataUser);
  }

  adminValidate(token: any) {
    return this._http.get(this.global + 'admin/verify-token?token=' + token);
  }

}
