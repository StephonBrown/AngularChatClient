import { Component, OnInit } from '@angular/core';
import {Message} from '../../chat/message';
import {ChatService} from './../service/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.sass']
})
export class MainscreenComponent implements OnInit {

  messages: Message[]
  sentMessage:string
  wsSubscription: Subscription
  status

  constructor(private chatService:ChatService) {
    this.messages = []
    this.chatService.createObservableSocket("ws://localhost:8080/chat")
    .subscribe(
      data =>{
        let message:Message = {id:0, sender: "", recipient:"",message:data, timeStamp:new Date()};
        this.messages.push(message);
      },
      err =>console.log(err),
      () => console.log("Observable complete")
    )
  }

  ngOnInit(): void {
  }
  messageSubmit(){
    this.chatService.sendMessage(this.sentMessage);
  }
}
