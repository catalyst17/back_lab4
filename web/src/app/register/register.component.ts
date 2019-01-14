import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  doMatch = true;

  constructor() { }

  ngOnInit() {
  }

  register() {
    if (this.model.firstPassword === this.model.secondPassword) {
      this.doMatch = true;
      alert('successfully registered!\n' + this.model.username + ' ' + this.model.firstPassword + ' ' + this.model.secondPassword);
    } else {
      this.doMatch = false;
    }
  }
}
