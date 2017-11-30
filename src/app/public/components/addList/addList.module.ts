import { NgModule } from '@angular/core';
import { AddListComponent} from './components/addList.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    AddListComponent
  ]
})
export class AddListModule {
}
