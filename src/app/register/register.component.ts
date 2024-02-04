import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private route:Router, private authService:AuthService)
  {

  }

  register(register:NgForm)
  {
    // console.log(register.value);
    this.authService.register(register.value.email, register.value.password);
    this.route.navigate(['/login']);
  }

  reset(register:NgForm)
  {
    register.reset();
  }
}
