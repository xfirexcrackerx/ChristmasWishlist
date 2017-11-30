import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LayoutComponent} from './layout.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: []
})

export class LayoutModule { }
