import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  devUrl = 'http://localhost:1337/chefs';
  prodUrl = 'https://restaurant-cms-strapi.herokuapp.com/chefs';

  constructor(private http: HttpClient) { }

  getUrl(){
    return isDevMode() ? this.devUrl : this.prodUrl;
  }

  getChefs() {
    return this.http.get(this.getUrl());
  }
}
