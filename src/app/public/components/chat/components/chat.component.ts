import { Component, OnInit, NgZone } from '@angular/core';
import { HubService, Hub, HubSubscription, HubWrapper } from 'ngx-signalr-hubservice';
import 'rxjs/add/operator/toPromise';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
@Hub({ hubName: 'ChatHub' })
export class ChatComponent {
  private hubWrapper: HubWrapper;

  private connecting: boolean = false;
  private connected: boolean = false;
  private sending: boolean = false;
  private enteredName: boolean = false;

  private name: string = '';
  private message: string = '';

  private messages = <[{ name: string, message: string }]>[];

  constructor(private hubService: HubService,
              private ngZone: NgZone,
              private cookieService: CookieService) {
    this.hubWrapper = hubService.register(this);
  }

  async ngOnInit() {
    this.connecting = true;
    this.connected = await this.hubService.connect('http://localhost:53950/' + '/signalr', true).toPromise();
    this.connecting = false;
  }

  async sendMessage() {
    if(this.message.length >= 1) {
      this.sending = true;
      await this.hubWrapper.invoke("SendMessage", this.cookieService.get('username'), this.message).toPromise();
      this.message = '';
      this.sending = false;
    }
  }

  @HubSubscription()
  receiveMessage(name: string, message: string) {
    //run inside zone to update UI
    this.ngZone.run(() => {
      this.messages.push({ name: name, message: message });
    });
  }
}
