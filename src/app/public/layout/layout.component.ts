import { Component } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent {

  constructor(private cookieService: CookieService) { }
}
