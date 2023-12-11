import { AuthenticationService } from './../../../core/services/authservice.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login$!: Subscription;
  loginForm!: FormGroup;
  isSubmitted = false;
  isError = false;
  errorMsg = '';
  wrongPasswordAttemps = 0;
  currentYear!: number;
  showPassword = false;
  maxWidthStyle = { 'max-width': '400px' };
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authenticationService: AuthenticationService
  ) {}

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.isSubmitted = true;

    if (this.loginForm.valid) {
      const enteredUserId = this.userId?.value;
      const enteredPassword = this.password?.value;

      // Replace the following logic with your actual authentication service call
      this.authenticationService
        .login(enteredUserId, enteredPassword)
        .subscribe(
          (success) => {
            if (success) {
              // Authentication successful
              this.route.navigate(['/main']); // Redirect to dashboard or desired route
            } else {
              // Authentication failed
              this.isError = true;
              this.errorMsg = 'Invalid credentials';
              this.wrongPasswordAttemps++;
            }
          },
          (error) => {
            // Handle error from the authentication service
            console.error('Authentication error:', error);
          }
        );
    }
  }

  get userId(): AbstractControl | null {
    return this.loginForm.get('userId');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.initLoginForm();

    this.authenticationService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.route.navigate(['/main']); // Redirect to home if authenticated
      }
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    const passwordControl = this.loginForm.get('password');

    if (passwordControl) {
      const currentType = passwordControl.get('type') || 'password';
      passwordControl
        .get('type')
        ?.setValue(this.showPassword ? 'text' : 'password');
    }
  }
}
