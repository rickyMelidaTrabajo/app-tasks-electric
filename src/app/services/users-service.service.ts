import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  urlGlobal = 'http://localhost:1900/api/user/get-users';

  constructor(private _http: HttpClient) { }

  getUser(token) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.urlGlobal, { headers: header });
  }
}
