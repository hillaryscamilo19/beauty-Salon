import { Component } from '@angular/core';
import { Category, ServiceServiceService } from 'src/app/services/services/ServiceService.service';
import { Stylist, StylistService } from 'src/app/services/stylisservices/Stylist.service';
import { User } from 'src/app/models/interfaces/use.models';
import { CategoryService } from 'src/app/services/Category/Category.service';
import { AuthServiceService } from 'src/app/services/servicesAuth/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: Category[] = [];
  stylists: Stylist[] = [];
  userName: string = '';

  constructor(
    private categoryService: CategoryService,
    private stylistService: StylistService,
    public authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.loadCategories();
    //this.loadStylists();
    this.getUserName();
  }

  private loadCategories() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories
    );
  }

  //private loadStylists() {
    //this.stylistService.getTopStylists().subscribe(
      //stylists => this.stylists = stylists
    //);
  //}

  private getUserName() {
    const user = this.authService.currentUserValue;
    if (user) {
      this.userName = user.name;
    }
  }
}
