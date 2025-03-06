import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salon } from 'src/app/models/interfaces/use.models';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  constructor(private http: HttpClient) {}

  getSalons(): Observable<Salon[]> {
    return this.http.get<Salon[]>(`${enviroment.api}/salons`);
  }

  getSalonById(id: number): Observable<Salon> {
    return this.http.get<Salon>(`${enviroment.api}/salons/${id}`);
  }

  createSalon(salonData: Partial<Salon>): Observable<Salon> {
    return this.http.post<Salon>(`${enviroment.api}/salons`, salonData);
  }

  updateSalon(id: number, salonData: Partial<Salon>): Observable<Salon> {
    return this.http.put<Salon>(`${enviroment.api}/salons/${id}`, salonData);
  }

  deleteSalon(id: number): Observable<void> {
    return this.http.delete<void>(`${enviroment.api}/salons/${id}`);
  }

}
