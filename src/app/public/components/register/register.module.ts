import { NgModule } from '@angular/core';
import {registerRouting} from './register.routes';
import { RegisterComponent} from './components/register.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    registerRouting
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {
}
