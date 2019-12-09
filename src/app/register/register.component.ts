import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    public router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(registerForm) {
    this.userService.register(registerForm.username, registerForm.email, registerForm.password);
  }

}
