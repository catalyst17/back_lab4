import { Component } from '@angular/core';

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
    this.loginError = true;
    // alert(this.model.username + ' ' + this.model.password);
  }
}
