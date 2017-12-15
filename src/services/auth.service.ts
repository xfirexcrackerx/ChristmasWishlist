import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DOMAIN_URL } from '../shared/constants';
import {CookieService} from 'angular2-cookie/core';

const registerUrl = DOMAIN_URL + '/api/Account/Register'
const checkIdentity = DOMAIN_URL + '/api/Account/CheckIdentity'
const loginUrl = DOMAIN_URL + '/Token'

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {

  }
  register(data) {
    return this.httpClient.post(registerUrl, data);
  }
  login(data) {
    console.log(data)
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'x-url-form-encoded')
    return this.httpClient.post<any>(loginUrl, data, { headers: headers});
  }

  checkIdentity() {
    let headers = new HttpHeaders();
    let newHeaders = headers.append('Authorization', 'bearer ' + this.cookieService.get('auth'))
    return this.httpClient.post<any>(checkIdentity, {}, { headers: newHeaders});
  }
}
