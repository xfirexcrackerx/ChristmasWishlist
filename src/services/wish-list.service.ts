import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DOMAIN_URL } from '../shared/constants';
import {CookieService} from 'angular2-cookie/core';

const wishListsUrl = DOMAIN_URL + '/api/WishLists'

@Injectable()
export class WishListService {
  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {

  }
  getWishLists() {
    let headers = new HttpHeaders();
    let newHeaders = headers.append('Authorization', 'bearer ' + this.cookieService.get('auth'))
    return this.httpClient.get<any>(wishListsUrl, { headers: newHeaders});
  }

  getAllWishLists() {
    let headers = new HttpHeaders();
    let newHeaders = headers.append('Authorization', 'bearer ' + this.cookieService.get('auth'))
    return this.httpClient.get<any>(wishListsUrl + '?type=all', { headers: newHeaders});
  }

  putWishList(wishListId, data) {
    return this.httpClient.put<any>(wishListsUrl + '?wishListId=' + wishListId, data);
  }
  postWishList(data) {
    let headers = new HttpHeaders();
    let newHeaders = headers.append('Authorization', 'bearer ' + this.cookieService.get('auth'))
    return this.httpClient.post<any>(wishListsUrl, data, { headers: newHeaders});
  }
  deleteWishList(wishListId) {
    let headers = new HttpHeaders();
    let newHeaders = headers.append('Authorization', 'bearer ' + this.cookieService.get('auth'))
    return this.httpClient.delete<any>(wishListsUrl + '?wishListId=' + wishListId, {headers: newHeaders});
  }
}
