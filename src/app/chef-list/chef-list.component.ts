import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';

@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent implements OnInit {

  chefs: any = [];

  constructor(private chefService: ChefService) { }

  ngOnInit() {
    this.chefService.getChefs().subscribe((data) => {
      this.chefs = data;
    });
  }

}
