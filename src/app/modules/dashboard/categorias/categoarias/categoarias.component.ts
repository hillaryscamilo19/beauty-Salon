import { Component } from '@angular/core';

@Component({
  selector: 'app-categoarias',
  templateUrl: './categoarias.component.html',
  styleUrls: ['./categoarias.component.css']
})
export class CategoariasComponent {
  categories: Category[] = [
    {
      id: "hair-style",
      name: "Hair Style",
      image: "assets/img/HairStyles.png",
    },
    {
      id: "hair-spa",
      name: "Hair Spa",
      image: "assets/img/HaisSpa.png",
    },
    {
      id: "shampoo",
      name: "Shampoo",
      image: "assets/img/Shampoo.png",
    },
    {
      id: "hair-dryer",
      name: "Hair dryer",
      image: "assets/img/HairDryer.png",
    },
    {
      id: "facial",
      name: "Facial",
      image: "assets/img/Facial.png",
    },
    {
      id: "makeup",
      name: "Makeup",
      image: "assets/img/makeup.png",
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  selectCategory(categoryId: string): void {
    // Aquí puedes implementar la lógica para cuando se selecciona una categoría
    console.log("Categoría seleccionada:", categoryId)
  }


  

}
interface Category {
  id: string
  name: string
  image: string
}