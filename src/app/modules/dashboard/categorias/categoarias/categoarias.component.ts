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
      name: "",
      image: "assets/img/HairStyles.png",
    },
    {
      id: "hair-spa",
      name: "",
      image: "assets/img/HaisSpa.png",
    },
    {
      id: "shampoo",
      name: "",
      image: "assets/img/Shampoo.png",
    },
    {
      id: "hair-dryer",
      name: "",
      image: "assets/img/HairDryer.png",
    },
    {
      id: "facial",
      name: "",
      image: "assets/img/Facial.png",
    },
    {
      id: "makeup",
      name: "",
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
