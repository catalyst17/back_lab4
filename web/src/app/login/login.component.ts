import { Component } from '@angular/core';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  model: any = {};
  loginError = false;

  constructor() {}

  login() {
    ajax({
      url: 'http://localhost:8080/app/commands/auth/login',
      method: 'POST',
      body: {login: this.model.username, password: this.model.password}
    }).subscribe(
       data => alert('data! ' + data.status),
       error => alert('error!')
       );
  }
}
