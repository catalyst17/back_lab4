import { Component } from '@angular/core';

@Component({
  selector: 'app-area-check',
  templateUrl: './area-check.component.html',
  styleUrls: ['./area-check.component.css']
})
export class AreaCheckComponent {
  model: any = {};
  yVal = 0;

  constructor() {
  }

  check() {
    alert('x:' + this.model.x + ', y:' + this.yVal + ', r:' + this.model.r);
  }

  handleChangeY(e) {
    this.yVal = e.value;
  }
}
