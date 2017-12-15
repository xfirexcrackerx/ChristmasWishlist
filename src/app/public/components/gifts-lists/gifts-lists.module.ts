import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {giftListRouting} from './gifts-lists.routes';
import {GiftsListsRootComponent} from './gifts-lists-root.component';
import {GiftsListsComponent} from './components/gifts-lists/gifts-lists.component';
import { AddGiftsListModule } from './moduls/add-gifts-list/add-gifts-list.module';
import { WishListService } from '../../../../services/wish-list.service';
import { GiftService } from '../../../../services/gift.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@NgModule({
  imports: [
    giftListRouting,
    AddGiftsListModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    GiftsListsRootComponent,
    GiftsListsComponent
  ],
  providers: [WishListService, GiftService, AuthService]
})
export class GiftsListModule {
}
