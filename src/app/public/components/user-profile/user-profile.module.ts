import { NgModule } from '@angular/core';
import { UserProfileComponent} from './components/user-profile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    UserProfileComponent
  ]
})
export class UserProfileModule {
}
