import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material';
import { AddChefDialogComponent } from '../add-chef-dialog/add-chef-dialog.component';
import { UserService } from '../user.service';
import { SnackbarService } from '../snackbar.service';
import { ChefService } from '../chef.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  name: string;
  address: string;
  description: string;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private chefService: ChefService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddChefDialogComponent, dialogConfig);
    dialogConfig.data = {
      name: '',
      address: '',
      description: ''
    };

    dialogRef.afterClosed().pipe(filter(name => name)).subscribe(
      data => {
        console.log('Dialog output:', data);
        this.chefService.createChef(data).subscribe((response) => {
          this.chefService.getChefs();
          this.snackbarService.open('Added!', false);
        });
      }
    );
  }

}
