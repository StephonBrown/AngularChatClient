import { Injectable, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit {
  private messages: Message[]
  constructor() {}

  ngOnInit(): void {}

  getMessages(): Message[]{
    let ws = webSocket('ws://localhost:8080/chat');
    ws.subscribe(
      (msg) => console.log('message received: ' + msg),
      (err) => console.log(err),
      () => console.log('complete')
    );
    ws.next( JSON.stringify(
      {
        id:0,
        sender: "",
        recipient: "",
        timeStamp: new Date(),
        message: msg
      }));
    }
}
