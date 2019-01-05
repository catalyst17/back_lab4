import {Component, AfterViewInit, ElementRef, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-check',
  templateUrl: './area-check.component.html',
  styleUrls: ['./area-check.component.css']
})
export class AreaCheckComponent implements OnInit {
  xVal: number;
  rVal: number;
  yVal = -5;

  compX: number;
  compY: number;
  canvasSize = 500;
  rectInColor = '#00ff00';
  rectNotInColor = '#FF0000';
  context: CanvasRenderingContext2D;

  @ViewChild('myCanvas') myCanvas: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    const canvasEl: HTMLCanvasElement = this.myCanvas.nativeElement;
    this.context = canvasEl.getContext('2d');
    const ctx = this.context;
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    // drawing axis
    const halfOfCanvas = this.canvasSize / 2;
    ctx.moveTo(halfOfCanvas, 10);
    ctx.lineTo(halfOfCanvas, this.canvasSize - 10);
    ctx.moveTo(halfOfCanvas, 10);
    ctx.lineTo(halfOfCanvas - 5, 25);
    ctx.moveTo(halfOfCanvas, 10);
    ctx.lineTo(halfOfCanvas + 5, 25);
    ctx.moveTo(10, halfOfCanvas);
    ctx.lineTo(this.canvasSize - 10, halfOfCanvas);
    ctx.lineTo(this.canvasSize - 25, halfOfCanvas - 5);
    ctx.moveTo(this.canvasSize - 10, halfOfCanvas);
    ctx.lineTo(this.canvasSize - 25, halfOfCanvas + 5);
    // graduating them
    ctx.moveTo(halfOfCanvas + this.canvasSize / 6, halfOfCanvas + 5);
    ctx.lineTo(halfOfCanvas + this.canvasSize / 6, halfOfCanvas - 5);
    ctx.moveTo(halfOfCanvas + this.canvasSize / 6 * 2, halfOfCanvas + 5);
    ctx.lineTo(halfOfCanvas + this.canvasSize / 6 * 2, halfOfCanvas - 5);
    ctx.moveTo(halfOfCanvas - this.canvasSize / 6, halfOfCanvas + 5);
    ctx.lineTo(halfOfCanvas - this.canvasSize / 6, halfOfCanvas - 5);
    ctx.moveTo(halfOfCanvas - this.canvasSize / 6 * 2, halfOfCanvas + 5);
    ctx.lineTo(halfOfCanvas - this.canvasSize / 6 * 2, halfOfCanvas - 5);
    ctx.moveTo(halfOfCanvas + 5, halfOfCanvas + this.canvasSize / 6);
    ctx.lineTo(halfOfCanvas - 5, halfOfCanvas + this.canvasSize / 6);
    ctx.moveTo(halfOfCanvas + 5, halfOfCanvas + this.canvasSize / 6 * 2);
    ctx.lineTo(halfOfCanvas - 5, halfOfCanvas + this.canvasSize / 6 * 2);
    ctx.moveTo(halfOfCanvas + 5, halfOfCanvas - this.canvasSize / 6);
    ctx.lineTo(halfOfCanvas - 5, halfOfCanvas - this.canvasSize / 6);
    ctx.moveTo(halfOfCanvas + 5, halfOfCanvas - this.canvasSize / 6 * 2);
    ctx.lineTo(halfOfCanvas - 5, halfOfCanvas - this.canvasSize / 6 * 2);
    ctx.stroke();
    // and finally naming them
    ctx.font = '20px Arial';
    ctx.fillText('X', halfOfCanvas + 10, 25);
    ctx.fillText('Y', this.canvasSize - 25, halfOfCanvas + 25);
    ctx.font = '15px Arial';
    ctx.fillText('-R', halfOfCanvas - this.canvasSize / 6 * 2 - 10, halfOfCanvas + 20);
    ctx.fillText('-R/2', halfOfCanvas - this.canvasSize / 6 - 15, halfOfCanvas + 20);
    ctx.fillText('R/2', halfOfCanvas + this.canvasSize / 6 - 10, halfOfCanvas + 20);
    ctx.fillText('R', halfOfCanvas + this.canvasSize / 6 * 2 - 5, halfOfCanvas + 20);
    ctx.fillText('R', halfOfCanvas + 10, halfOfCanvas - this.canvasSize / 6 * 2 + 5);
    ctx.fillText('R/2', halfOfCanvas + 10, halfOfCanvas - this.canvasSize / 6 + 5);
    ctx.fillText('-R/2', halfOfCanvas + 10, halfOfCanvas + this.canvasSize / 6 + 5);
    ctx.fillText('-R', halfOfCanvas + 10, halfOfCanvas + this.canvasSize / 6 * 2 + 5);
  }

  handleChangeY(e) {
    this.yVal = e.value;
  }

  addPoint() {
    const canvasEl: HTMLCanvasElement = this.myCanvas.nativeElement;
    this.context = canvasEl.getContext('2d');
    const ctx = this.context;

    const halfOfCanvas = this.canvasSize / 2;
    ctx.font = '15px Arial';
    ctx.fillText('-' + String(this.rVal), this.canvasSize / 6, halfOfCanvas + 20);

    this.compX = +this.canvasSize / 2 + +this.xVal;
    this.compY = +this.canvasSize / 2 - +this.yVal;
    ctx.beginPath();
    ctx.arc(this.compX, this.compY, 3, 0, 2 * Math.PI);
    if (true) {
      ctx.fillStyle = this.rectInColor;
    } else {
      ctx.fillStyle = this.rectNotInColor;
    }
    ctx.fill();
    ctx.strokeStyle = this.rectInColor;
    ctx.stroke();
  }
}
