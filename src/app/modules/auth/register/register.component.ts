import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/servicesAuth/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';
   constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthServiceService
    ) {
      this.RegisterForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }

    ngOnInit() {
      if (this.authService.currentUserValue) {
        this.router.navigate(['/dashboard']);
      }
    }

    get f() { return this.RegisterForm.controls; }

    onSubmit() {
      this.submitted = true;
      if (this.RegisterForm.invalid) {
        return;
      }

      this.loading = true;
      const userData = {
        name: this.f['name'].value,
        email: this.f['email'].value,
        password: this.f['password'].value
      };
      this.authService.register(userData)
        .subscribe({
          next: () => {
            this.router.navigate(['/login']);
          },
          error: (error: { message: string; }) => {
            this.error = error.message || 'Registration failed';
            this.loading = false;
          }
        });
    }


    goToRegister() {
      this.router.navigate(['/register']);
    }

  }

