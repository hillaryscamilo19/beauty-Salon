import { Component } from '@angular/core';
import { MessagingService } from 'src/app/services/Messaging/Messaging.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  conversations: any[] = [];
  currentConversation: any = null;
  messages: any[] = [];
  newMessage: string = '';

  constructor(private messagingService: MessagingService) {}

  ngOnInit() {
    this.loadConversations();
  }

  loadConversations() {
    // Asume que tienes el ID del usuario actual
    const userId = 1; // Reemplaza esto con el ID real del usuario
    this.messagingService.getConversations(userId).subscribe(
      conversations => this.conversations = conversations
    );
  }

  selectConversation(conversation: any) {
    this.currentConversation = conversation;
    this.loadMessages(conversation.id);
  }

  loadMessages(conversationId: number) {
    this.messagingService.getMessages(conversationId).subscribe(
      messages => this.messages = messages
    );
  }

  sendMessage() {
    if (this.newMessage.trim() && this.currentConversation) {
      this.messagingService.sendMessage(this.currentConversation.id, this.newMessage).subscribe(
        message => {
          this.messages.push(message);
          this.newMessage = '';
        }
      );
    }
  }

}
