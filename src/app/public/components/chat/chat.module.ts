import { NgModule } from '@angular/core';
import { ChatComponent} from './components/chat.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    ChatComponent
  ]
})
export class ChatModule {
}
