import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/interfaces/payment.model';
import { enviroment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  constructor(private http: HttpClient) {}

  createPayment(payment: Partial<Payment>): Observable<Payment> {
    return this.http.post<Payment>(`${enviroment.api}/payments`, payment);
  }

  getPaymentsByUser(userId: number): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${enviroment.api}/payments/user/${userId}`);
  }
}
