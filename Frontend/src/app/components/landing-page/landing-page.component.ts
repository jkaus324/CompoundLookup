import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './landing-page.component.html',
  schemas: [NO_ERRORS_SCHEMA],
  standalone: true,
  imports: [CommonModule],
})
export class LandingPageComponent {
  authForm: FormGroup;
  isLogin = true;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.email]],
      password: ['', Validators.required],
      username: [''] // Only required for registration
    });
    this.updateValidators();
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.updateValidators();  // Update validators on form toggle
  }

  updateValidators() {
    // Clear existing validators
    this.authForm.get('username')?.clearValidators();
    this.authForm.get('email')?.clearValidators();
    this.authForm.get('password')?.clearValidators();

    // Apply conditional validators
    if (this.isLogin) {
      // For login, only password and username are required
      this.authForm.get('username')?.setValidators([Validators.required]);
      this.authForm.get('password')?.setValidators([Validators.required]);
    } else {
      // For registration, all fields are required and email needs to be valid
      this.authForm.get('username')?.setValidators([Validators.required]);
      this.authForm.get('email')?.setValidators([Validators.required, Validators.email]);
      this.authForm.get('password')?.setValidators([Validators.required]);
    }

    // Update the validation state of the form controls
    this.authForm.get('username')?.updateValueAndValidity();
    this.authForm.get('email')?.updateValueAndValidity();
    this.authForm.get('password')?.updateValueAndValidity();
  }

  async onSubmit() {
    console.log('Request going');
    if (this.authForm.valid) {
      const { email, password, username } = this.authForm.value;
      try {
        if (this.isLogin) {
          console.log('Submitting request to backend..');
          const response = await axios.post('http://localhost:3307/api/auth/login', {
            username,
            password,
          });
          console.log('Login successful', response.data);
        } else {
          const response = await axios.post('http://localhost:3307/api/auth/register', {
            email,
            password,
            username,
          });
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
