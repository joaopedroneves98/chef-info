import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  faUtensils = faUtensils;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn;
  }

  onLogout() {
    this.userService.logout();
  }

}
