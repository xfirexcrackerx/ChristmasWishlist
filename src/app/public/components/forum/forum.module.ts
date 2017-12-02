import { NgModule } from '@angular/core';
import { ForumComponent} from './components/forum.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    ForumComponent
  ]
})
export class ForumModule {
}
