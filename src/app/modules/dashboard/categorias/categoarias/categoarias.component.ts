import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoryService } from 'src/app/services/Category/Category.service';

@Component({
  selector: 'app-categoarias',
  templateUrl: './categoarias.component.html',
  styleUrls: ['./categoarias.component.css'],
})
export class CategoariasComponent {
  categoriaFlter?: any[] = [];
  categoryId!: string;
  settings!: '/settings'
  constructor(private servicesContrato: CategoryService) {}

  ngOnInit(): void {
    this.Getcategoria();
  }

  selectCategory(categoryId: string): void {
    console.log('Categoría seleccionada:', categoryId);
  }

  Getcategoria() {
    this.servicesContrato.getCategories().subscribe({
      next: (data) => {
        this.categoriaFlter = data;
      },
      error: (error) => {
        console.log('Error Carga Categoria:', error);
      },
    });
  }
}
