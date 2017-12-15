import {CookieService} from 'angular2-cookie/core';
import { Component } from '@angular/core';
import {Login} from './models/login.model';
import { AuthService } from '../../../../../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  private login: Login = new Login;
  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router) {}

  submit() {
    let webApiTokenLoginBody = 'grant_type=password&username=' + this.login.username + '&password=' + this.login.password
    this.authService.login(webApiTokenLoginBody).subscribe((result) => {
      console.log(result)
      this.cookieService.remove('auth', result.access_token);
      this.cookieService.remove('username', result.userName);

      this.router.navigate(['/home']);
    })
  }

}
