import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  model: any = {};

  constructor() {}

  login() {
    alert(this.model.username + ' ' + this.model.password);
  }
}
