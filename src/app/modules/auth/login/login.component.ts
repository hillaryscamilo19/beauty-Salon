import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/servicesAuth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthServiceService
  ) {
    // Crear el formulario
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Si el usuario ya está logueado, redirigir al dashboard
    if (this.authService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  // Getter para acceder fácilmente a los campos del formulario
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // Detener si el formulario es inválido
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f['email'].value, this.f['password'].value)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (error: { message: string; }) => {
          this.error = error.message || 'Login failed';
          this.loading = false;
        }
      });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
