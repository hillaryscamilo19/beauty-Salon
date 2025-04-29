import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

// Components
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/dashboard/home/home.component';
import { AppointmentsComponent } from './modules/dashboard/appointments/appointments.component';
import { ProfileComponent } from './modules/dashboard/profile/profile.component';
import { SettingsComponent } from './modules/dashboard/settings/settings.component';
import { PaymentComponent } from './modules/dashboard/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: HomeComponent, // ¡Aquí es clave!
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotfoundComponent } // o redirectTo: '/login'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
