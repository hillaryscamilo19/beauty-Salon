import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  getNotifications(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${enviroment.api}/notifications/${userId}`);
  }

  markAsRead(notificationId: number): Observable<void> {
    return this.http.put<void>(`${enviroment.api}/notifications/${notificationId}/read`, {});
  }

}
