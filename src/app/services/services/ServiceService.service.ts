import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${enviroment.api}/categories`);
  }

  getServicesByCategory(categoryId: number): Observable<any[]> {
    return this.http.get<any[]>(`${enviroment.api}/categories/${categoryId}/services`);
  }

}

export interface Category {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
}
