import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent implements OnInit {

  faUser = faUser;

  chefs: any = [];

  url = this.chefService.getUrl();

  constructor(private chefService: ChefService) { }

  ngOnInit() {
    this.chefService.getChefs().subscribe((data) => {
      this.chefs = data;
    });
  }

}
