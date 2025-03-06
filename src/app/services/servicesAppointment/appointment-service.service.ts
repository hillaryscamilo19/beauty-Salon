import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../environments/environment';
import { Appointment } from 'src/app/models/interfaces/appoinment.models';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {
  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${enviroment.api}/appointments`);
  }

  getAppointment(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${enviroment.api}/appointments/${id}`);
  }

  createAppointment(appointment: Partial<Appointment>): Observable<Appointment> {
    return this.http.post<Appointment>(`${enviroment.api}/appointments`, appointment);
  }

  updateAppointment(id: number, appointment: Partial<Appointment>): Observable<Appointment> {
    return this.http.put<Appointment>(`${enviroment.api}/appointments/${id}`, appointment);
  }

  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${enviroment.api}/appointments/${id}`);
  }
}
