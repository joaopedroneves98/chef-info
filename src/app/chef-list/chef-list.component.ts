import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent implements OnInit {

  faUser = faUser;

  url = this.chefService.getUrl();

  isLoggedIn$: Observable<boolean>;

  chefs$: Observable<any[]>;

  constructor(
    private chefService: ChefService,
    private userService: UserService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn;
    this.chefService.getChefs();
    this.chefs$ = this.chefService.getChefList;
  }

  deleteChef(chef) {
    this.chefService.deleteChef(chef._id).subscribe((response) => {
      this.chefService.getChefs();
      this.snackbarService.open('Deleted', false);
    });
  }
}
