import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize form groups and controls
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Accessors for form controls
  get loginFormControls() {
    return this.loginForm.controls;
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

  submitLoginForm() {
    // Implement login form submission logic here
    console.log('Login form submitted:', this.loginForm.value);
  }

  submitRegisterForm() {
    // Implement register form submission logic here
    console.log('Register form submitted:', this.registerForm.value);
  }

}
