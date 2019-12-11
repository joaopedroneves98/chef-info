import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn;
  }

}
