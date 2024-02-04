import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  logIn() {
    const email: string = this.loginForm.value.email || ''; 
    const password: string = this.loginForm.value.password || '';
    // console.log('Form values are ', this.loginForm);
    this.authService.logIn(email , password);
  }
}
