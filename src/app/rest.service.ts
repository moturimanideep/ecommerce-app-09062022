import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}