import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './services/servicesAuth/auth-service.service';
import { Router } from '@angular/router';
import { User } from './models/interfaces/use.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  userName: string | null = null;
  isLoggedIn = false;

  constructor(
    public authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser.subscribe((user: User | null) => {
      this.userName = user?.name || null;


      this.isLoggedIn = !!user;
      console.log('Nombre del usuario:', this.userName);
      console.log('¿Está logueado?', this.isLoggedIn);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
