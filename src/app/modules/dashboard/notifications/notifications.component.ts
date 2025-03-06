import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/Notification/Notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    // Asume que tienes el ID del usuario actual
    const userId = 1; // Reemplaza esto con el ID real del usuario
    this.notificationService.getNotifications(userId).subscribe(
      notifications => this.notifications = notifications
    );
  }

  markAsRead(notificationId: number) {
    this.notificationService.markAsRead(notificationId).subscribe(() => {
      // Actualiza el estado de la notificación en la interfaz
      const notification = this.notifications.find(n => n.id === notificationId);
      if (notification) {
        notification.read = true;
      }
    });
  }

}
