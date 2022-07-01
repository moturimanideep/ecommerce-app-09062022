import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getProducts() {
    return this.httpClient.get(`${environment.apiUrl}v1/products`); // Observable
  }
  getProductById(id: string) {
    return this.httpClient.get(`${environment.apiUrl}v1/products/${id}`, {observe: 'response'});
  }
  loginUser(data: any) {
    return this.httpClient.post(`${environment.apiUrl}v1/users/login`, data);
  }
  getAllUsers() {
    const token: any = localStorage.getItem('ec-token');
    return this.httpClient.get(`${environment.apiUrl}v1/users`, {
      headers: new HttpHeaders({'authorization': token})
    });
  }
  registerUser(data: any) {
    return this.httpClient.post(`${environment.apiUrl}v1/users/register`, data);
  }
}