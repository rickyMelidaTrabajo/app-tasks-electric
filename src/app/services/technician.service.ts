/* eslint-disable no-underscore-dangle */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  urlGlobal: string;

  constructor(private _http: HttpClient) { }

  getTechnicians(token) {
    this.urlGlobal = 'http://localhost:1900/api/technician/get-technicians';
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.urlGlobal, { headers: header });
  }
}
