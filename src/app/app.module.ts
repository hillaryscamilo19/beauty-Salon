import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/dashboard/home/home.component';
import { SettingsComponent } from './modules/dashboard/settings/settings.component';
import { ProfileComponent } from './modules/dashboard/profile/profile.component';
import { PaymentComponent } from './modules/dashboard/payment/payment.component';
import { ButtonComponent } from './shared/components/button/button/button.component';
import { ModalComponent } from './shared/components/modal/modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './modules/auth/login/login.component';
import { AppointmentsComponent } from './modules/dashboard/appointments/appointments.component';
import { MessagingComponent } from './modules/dashboard/messaging/messaging.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalonListComponent } from './modules/dashboard/salon-list/salon-list.component';
import { CategoariasComponent } from './modules/dashboard/categorias/categoarias/categoarias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentsComponent,
    NotfoundComponent,
    RegisterComponent,
    HomeComponent,
    SettingsComponent,
    ProfileComponent,
    PaymentComponent,
    ButtonComponent,
    ModalComponent,
    MessagingComponent,
    SalonListComponent,
    CategoariasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,  // Asegúrate de que esta línea esté presente
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
