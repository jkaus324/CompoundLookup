import { Component } from '@angular/core';
import axios from 'axios';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  imports: [FormsModule, CommonModule],
  standalone:true,
})
export class AuthComponent {
  isLogin = true;
  email = '';
  password = '';
  username = '';

  constructor(private router: Router) {}

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  async onSubmit(form: any) {
    console.log('reached in OnSubmit');
    if (form.valid) {
      const { email, password, username } = this;
      try {
        if (this.isLogin) {
          const response = await axios.post('http://localhost:3307/api/auth/login', {
            username,
            password,
          });
          if(response.data.signedIn){
            sessionStorage.setItem('signedIn', 'true');
            this.router.navigate(['/compounds']);
          }
          console.log('Login successful', response.data);
        } else {
          const response = await axios.post('http://localhost:3307/api/auth/register', {
            email,
            password,
            username,
          });
          if(response.data.signedIn){
            sessionStorage.setItem('signedIn', 'true');
            this.router.navigate(['/compounds']);
          }
          
          console.log('Registration successful', response.data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
