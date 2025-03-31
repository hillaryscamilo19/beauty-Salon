import { Component, OnInit } from '@angular/core';
import { Salon } from 'src/app/models/interfaces/use.models';
import { SalonService } from 'src/app/services/salon/Salon.service';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {
  specialists: Specialist[] = [
    {
      id: 1,
      name: "Doe John",
      imageUrl: '../../../../assets/img/specialist1.jpg',
      rating: 2,
      phone: "+732 8888 111",
    },
    {
      id: 2,
      name: "Lucy",
      imageUrl: "../../../../assets/img/specialist2.jpg",
      rating: 2,
      phone: "+732 8888 111",
    },
    {
      id: 3,
      name: "Laila",
      imageUrl: "assets/specialists/specialist3.jpg",
      rating: 3,
      phone: "+732 8888 111",
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}


interface Specialist {
  id: number
  name: string
  imageUrl: string
  rating: number
  phone: string
}
