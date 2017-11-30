import { Component } from '@angular/core';
import {Login} from './models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private login: Login = new Login;

  submit() {
    console.log(JSON.stringify(this.login));
  }
}
