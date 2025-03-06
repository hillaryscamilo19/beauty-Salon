import { Component } from '@angular/core';
import { AuthServiceService } from './services/servicesAuth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(
      user => {
        this.isLoggedIn = !!user;
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
