import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  name: string;
  age: number;
}

@Component({
  selector: 'app-add-chef-dialog',
  templateUrl: './add-chef-dialog.component.html',
  styleUrls: ['./add-chef-dialog.component.css']
})
export class AddChefDialogComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddChefDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData) {
    this.form = fb.group({
      name: '',
      age: '',
    });

  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
