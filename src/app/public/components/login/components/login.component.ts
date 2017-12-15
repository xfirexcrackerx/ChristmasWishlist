import { Component } from '@angular/core';
import {Login} from './models/login.model';
import { AuthService } from '../../../../../services/auth.service';
import {CookieService} from 'angular2-cookie/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private login: Login = new Login;

  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router) {}

  submit() {
    let webApiTokenLoginBody = 'grant_type=password&username=' + this.login.username + '&password=' + this.login.password
    this.authService.login(webApiTokenLoginBody).subscribe((result) => {
      console.log(result)
      this.cookieService.put('auth', result.access_token);
      this.cookieService.put('username', result.userName);

        this.router.navigate(['/gifts-lists/add-gifts-list']);
      })
    }
  }
