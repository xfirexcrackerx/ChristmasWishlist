import { Component } from '@angular/core';
import {Register} from './models/register.model';
import { AuthService } from '../../../../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private register: Register = new Register;

  constructor(private authService: AuthService,
              private router: Router ) {}

  submit() {
    this.register.ConfirmPassword = this.register.Password;
    this.authService.register(this.register).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
