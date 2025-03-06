import { Component, OnInit } from '@angular/core';
import { Salon } from 'src/app/models/interfaces/use.models';
import { SalonService } from 'src/app/services/salon/Salon.service';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {
  salons: Salon[] = [];

  constructor(private salonService: SalonService) {}

  ngOnInit() {
    this.loadSalons();
  }

  loadSalons() {
    this.salonService.getSalons().subscribe(
      salons => this.salons = salons
    );
  }

}
