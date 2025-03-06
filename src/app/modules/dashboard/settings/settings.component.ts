import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/servicesAuth/auth-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  darkMode: boolean = false;

  constructor(public authService: AuthServiceService, private router: Router) {}

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    // Implementar lógica para cambiar el tema
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
