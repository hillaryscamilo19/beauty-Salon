import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/interfaces/use.models';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StylistService {
  constructor(private http: HttpClient) {}

  getTopStylists(): Observable<Stylist[]> {
    return this.http.get<Stylist[]>(`${enviroment.api}/stylists/top`);
  }



}

export interface Stylist {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
}
