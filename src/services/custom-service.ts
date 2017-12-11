import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DOMAIN_URL } from '../shared/constants';

@Injectable()
export class CustomService {
  constructor(private httpClient: HttpClient) {

  }
  getData() {
    return this.httpClient.get<any>('http://httpbin.org/ip');
  }
}
