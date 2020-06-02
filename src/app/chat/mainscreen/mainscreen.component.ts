import { Component, OnInit } from '@angular/core';
import {Message} from '../../chat/message';
import {ChatService} from './../service/chat.service';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.sass']
})
export class MainscreenComponent implements OnInit {

  messages: Message[]

  constructor(chatService:ChatService) {
    this.messages = chatService.getMessages();
  }

  ngOnInit(): void {
  }

}
