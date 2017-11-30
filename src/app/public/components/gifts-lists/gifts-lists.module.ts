import { NgModule } from '@angular/core';
import {giftListRouting} from './gifts-lists.routes';
import {GiftsListsRootComponent} from './gifts-lists-root.component';
import {GiftsListsComponent} from './components/gifts-lists/gifts-lists.component';
import { AddGiftsListModule } from './moduls/add-gifts-list/add-gifts-list.module';

@NgModule({
  imports: [
    giftListRouting,
    AddGiftsListModule
  ],
  declarations: [
    GiftsListsRootComponent,
    GiftsListsComponent
  ]
})
export class GiftsListModule {
}
