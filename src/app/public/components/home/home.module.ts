import { NgModule } from '@angular/core';
import { HomeComponent} from './components/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomService } from '../../../../services/custom-service';
import {homeRouting} from './home.routes';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    homeRouting
  ],
  declarations: [
    HomeComponent
  ],
  providers: [CustomService]
})
export class HomeModule {
}
