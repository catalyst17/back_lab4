import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-area-check',
  templateUrl: './area-check.component.html',
  styleUrls: ['./area-check.component.css']
})
export class AreaCheckComponent implements AfterViewInit {
  xVal: number;
  rVal: number;
  yVal = -5;

  rectColor = '#FF0000';
  context: CanvasRenderingContext2D;

  @ViewChild('myCanvas') myCanvas;

  constructor() {
  }

  check() {
    alert('x:' + this.xVal + ', y:' + this.yVal + ', r:' + this.rVal);
  }

  handleChangeY(e) {
    this.yVal = e.value;
  }


  ngAfterViewInit() {
    // const canvas = this.myCanvas.nativeElement;
    // this.context = canvas.getContext('2d');
    // this.addPoint();
  }

  addPoint() {
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    requestAnimationFrame(() => {
      this.addPoint();
    });

    const ctx = this.context;
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = this.rectColor;
    ctx.fillRect(200 + this.xVal, 200 - this.yVal, 4, 4);
  }
}
