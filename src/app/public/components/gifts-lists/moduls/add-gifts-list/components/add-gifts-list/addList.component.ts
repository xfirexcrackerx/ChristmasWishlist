import { Component } from '@angular/core';
import { WishListService } from '../../../../../../../../services/wish-list.service';
import { GiftService } from '../../../../../../../../services/gift.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlist',
  templateUrl: './addList.component.html',
  styleUrls: ['./addList.component.css']
})
export class AddListComponent {
  private wishList = {}
  private wishLists = []

  constructor(private giftService: GiftService,private wishListService: WishListService, private router: Router)    {
    this.loadAllWishLists()
  }

  submit() {
    this.wishListService.postWishList(this.wishList)
      .subscribe(() => { this.loadAllWishLists() });
  }

  submitGift(wishList) {
    let gift = {};
    gift.Name = wishList.newGift.Name;
    gift.ImageUrl = wishList.newGift.ImageUrl;
    gift.Price = wishList.newGift.Price;
    gift.WishListId = wishList.Id;

    this.giftService.postGift(gift).subscribe(() =>
      this.loadAllWishLists()
    )
  }

  delete(id) {
      this.wishListService.deleteWishList(id).subscribe(() => {
        this.loadAllWishLists()
    })
  }

  loadAllWishLists() {
    this.wishListService.getWishLists()
      .subscribe((result) => {
        this.wishLists = result;
        for(let i = 0; i < this.wishLists.length; i++) {
          this.giftService.getGiftsForWishList(this.wishLists[i].Id)
            .subscribe((res) => {
              this.wishLists[i].Gifts = [];
              this.wishLists[i].newGift = {};
              this.wishLists[i].Gifts = res;
            })
        }

      });
  }
}
