import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  devUrl = 'http://localhost:1337/chefs/';
  prodUrl = 'https://restaurant-cms-strapi.herokuapp.com/chefs/';

  private chefList = new BehaviorSubject<any[]>([]);

  get getChefList() {
    return this.chefList.asObservable();
  }

  constructor(private http: HttpClient, private userService: UserService) { }

  getUrl() {
    return isDevMode() ? this.devUrl : this.prodUrl;
  }

  getChefs() {
    return this.http.get(this.getUrl(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userService.token,
      })
    }).subscribe((data: any[]) => { this.chefList.next(data); });
  }

  createChef(chef) {
    return this.http.post(this.getUrl(), chef, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userService.token,
      })
    });
  }

  deleteChef(id) {
    return this.http.delete(this.getUrl() + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userService.token,
      })
    });
  }
}
