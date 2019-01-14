import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.startTime();
  }

  async startTime() {
    const today = new Date();
    setTimeout(document.getElementById('time').innerText = today.getHours() + ':' + today.getMinutes() + ':'
      + today.getSeconds(), 10);
  }
}
