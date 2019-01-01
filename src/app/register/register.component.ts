import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  register() {
    if (this.model.firstPassword === this.model.secondPassword) {
      alert('successfully registered!\n' + this.model.username + ' ' + this.model.firstPassword + ' ' + this.model.secondPassword);
    } else {
      alert('passwords don`t match');
    }
  }
}
