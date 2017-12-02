import { Component } from '@angular/core';
import {Register} from './models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private register: Register = new Register;

  submit() {
    console.log(JSON.stringify(this.register));
  }
}
