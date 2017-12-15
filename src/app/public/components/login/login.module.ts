import { NgModule } from '@angular/core';
import {loginRouting} from './login.routes';
import { LoginComponent} from './components/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    loginRouting
  ],
  declarations: [
    LoginComponent
  ],
  providers: [AuthService]
})
export class LoginModule {
}
