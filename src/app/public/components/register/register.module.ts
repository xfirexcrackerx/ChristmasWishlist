import { NgModule } from '@angular/core';
import {registerRouting} from './register.routes';
import { RegisterComponent} from './components/register.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    registerRouting
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [AuthService]
})
export class RegisterModule {
}
