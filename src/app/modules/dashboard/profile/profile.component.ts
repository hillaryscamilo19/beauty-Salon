import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/servicesAuth/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private authService: AuthServiceService,private router: Router){}
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
