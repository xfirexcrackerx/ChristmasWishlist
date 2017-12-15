import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../../../../../services/wish-list.service';
import { GiftService } from '../../../../../../services/gift.service';
import {CookieService} from 'angular2-cookie/core';
import { AuthService } from '../../../../../../services/auth.service';

@Component({
  selector: 'app-gifts-lists',
  templateUrl: './gifts-lists.component.html',
  styleUrls: ['./gifts-lists.component.css']
})
export class GiftsListsComponent implements OnInit {

  private wishLists = []

  constructor(private wishListService: WishListService,
  private giftService: GiftService,
              private cookieService: CookieService,
              private authService: AuthService){
  }

  delete(id) {
    if (this.cookieService.get('isAdmin')) {
      this.wishListService.deleteWishList(id).subscribe(() => {
        this.loadAllWishLists()
      })
    }
  }

  loadAllWishLists() {
    this.wishListService.getAllWishLists()
      .subscribe((result) => {
        this.wishLists = result;
        for(let i = 0; i < this.wishLists.length; i++) {
          this.giftService.getAllGiftsForWishList(this.wishLists[i].Id)
            .subscribe((res) => {
              this.wishLists[i].Gifts = [];
              this.wishLists[i].Gifts = res;
            })
        }

      });
  }
  ngOnInit() {

    this.authService.checkIdentity().subscribe((result) => {
      if(result.isAdmin) {
        this.cookieService.put('isAdmin', result.isAdmin)
      }

      this.loadAllWishLists();
  }
}
