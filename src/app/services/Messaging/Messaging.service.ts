import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  constructor(private http: HttpClient) {}

  getConversations(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${enviroment.api}/conversations/${userId}`);
  }

  getMessages(conversationId: number): Observable<any[]> {
    return this.http.get<any[]>(`${enviroment.api}/conversations/${conversationId}/messages`);
  }

  sendMessage(conversationId: number, message: string): Observable<any> {
    return this.http.post(`${enviroment.api}/conversations/${conversationId}/messages`, { message });
  }
}
