import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  loginForm: FormGroup;
  registerForm: FormGroup;
  loggedIn: boolean = false;
  user: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

  submitLoginForm() {
    this.authService.login(this.loginForm.value['username'], this.loginForm.value['password']).subscribe( user => {
      this.userLogged();
    })
  }

  submitRegisterForm() {
    const body = {
      firstName: this.registerForm.value['firstName'],
      lastName: this.registerForm.value['lastName'],
      username: this.registerForm.value['username'],
      password: this.registerForm.value['password'],
      email: this.registerForm.value['email'],
    }
    this.authService.signup(body).subscribe( user => {
      this.userLogged();
    })
  }

  userLogged() {
    this.loggedIn = this.authService.isUserLoggedIn();
    this.user = this.authService.getUserData()?.firstName + ' ' + this.authService.getUserData()?.firstName;
    console.log(this.user);
  }

  logout() {
    this.authService.logout();
    this.loggedIn = false;
  }
}
