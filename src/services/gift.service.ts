import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DOMAIN_URL } from '../shared/constants';
import {CookieService} from 'angular2-cookie/core';

const wishListsUrl = DOMAIN_URL + '/api/Gifts'

@Injectable()
export class GiftService {
      constructor(private httpClient: HttpClient, private cookieService: CookieService) {

    }
  getGiftsForWishList(wishListId) {
    let headers = new HttpHeaders();
    let newHeaders = headers.append('Authorization', 'bearer ' + this.cookieService.get('auth'))
    return this.httpClient.get<any>(wishListsUrl + '?wishListId=' + wishListId, {headers: newHeaders});
  }
  getAllGiftsForWishList(wishListId) {
    let headers = new HttpHeaders();
    let newHeaders = headers.append('Authorization', 'bearer ' + this.cookieService.get('auth'))
    return this.httpClient.get<any>(wishListsUrl + '?wishListId=' + wishListId + '&type=all', {headers: newHeaders});
  }
  postGift(data) {
    let headers = new HttpHeaders();
    let newHeaders = headers.append('Authorization', 'bearer ' + this.cookieService.get('auth'))
    return this.httpClient.post<any>(wishListsUrl, data, { headers: newHeaders});
  }
  deleteWishList(giftId) {
    return this.httpClient.delete<any>(wishListsUrl + '?giftId=' + giftId);
  }
}
