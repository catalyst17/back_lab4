import {Component, AfterViewInit, ElementRef, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-check',
  templateUrl: './area-check.component.html',
  styleUrls: ['./area-check.component.css']
})

export class AreaCheckComponent implements OnInit, AfterViewInit {
  xVal: number;
  rVal: number;
  rPrevVal: number;
  yVal = 0;

  radius: string;
  halfOfRadius: string;
  canvasSize: number;
  invalidX = false;
  invalidR = false;
  atLeastOneFormSubmit = false;
  triedToClickWithoutFormRadius = false;
  rectInColor = '#00ff00';
  rectNotInColor = '#FF0000';

  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') myCanvas: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.myCanvas.nativeElement;
    this.context = canvasEl.getContext('2d');
    this.drawAndGraduateAxis(null);
  }

  handleChangeY(e) {
    this.yVal = e.value;
  }

  drawAndGraduateAxis(rad: number) {
    if (rad === null) {
      this.radius = 'R';
      this.halfOfRadius = 'R/2';
    } else {
      this.radius = rad.toString();
      this.halfOfRadius = (rad / 2).toString();
    }
    const radius = this.radius;
    const halfOfRadius = this.halfOfRadius;

    const ctx = this.context;
    ctx.clearRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
    this.canvasSize = ctx.canvas.width;
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    ctx.beginPath();

    // drawing axis
    ctx.fillStyle = '#000';
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
    ctx.fillText('Y', halfOfCanvas + 10, 25);
    ctx.fillText('X', this.canvasSize - 25, halfOfCanvas + 25);
    ctx.font = '15px Arial';
    ctx.fillText('-' + radius, halfOfCanvas - this.canvasSize / 6 * 2 - 5, halfOfCanvas + 20);
    ctx.fillText('-' + halfOfRadius, halfOfCanvas - this.canvasSize / 6 - 5, halfOfCanvas + 20);
    ctx.fillText('' + halfOfRadius, halfOfCanvas + this.canvasSize / 6 - 5, halfOfCanvas + 20);
    ctx.fillText('' + radius, halfOfCanvas + this.canvasSize / 6 * 2 - 5, halfOfCanvas + 20);
    ctx.fillText('' + radius, halfOfCanvas + 10, halfOfCanvas - this.canvasSize / 6 * 2 + 5);
    ctx.fillText('' + halfOfRadius, halfOfCanvas + 10, halfOfCanvas - this.canvasSize / 6 + 5);
    ctx.fillText('-' + halfOfRadius, halfOfCanvas + 10, halfOfCanvas + this.canvasSize / 6 + 5);
    ctx.fillText('-' + radius, halfOfCanvas + 10, halfOfCanvas + this.canvasSize / 6 * 2 + 5);
  }

  addPointByCanvas(event: MouseEvent): void {
    if (this.atLeastOneFormSubmit === false) {
      this.triedToClickWithoutFormRadius = true;
    } else {
      const canvasEl: HTMLCanvasElement = this.myCanvas.nativeElement;
      const rect = canvasEl.getBoundingClientRect();

      // current position with the offset
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // this method implements the actual drawing
      this.drawCircle(x, y);
    }
  }

  addPointByForm() {
    if (this.xVal < 3 && this.xVal > -3 && this.rVal < 3 && this.rVal > -3) {
      this.invalidX = false;
      this.invalidR = false;
      if (this.rPrevVal !== this.rVal) {
        this.drawAndGraduateAxis(this.rVal);
      }
      this.atLeastOneFormSubmit = true;
      this.triedToClickWithoutFormRadius = false;
      this.rPrevVal = this.rVal;
      const divPrice: number = this.canvasSize / 6;

      this.drawCircle((+this.canvasSize / 2 + 2 * divPrice * this.xVal / this.rVal),
        (+this.canvasSize / 2 - 2 * divPrice * this.yVal / this.rVal));
    } else {
      if (this.xVal >= 3 || this.xVal <= -3) {
        this.invalidX = true;
      }
      if (this.rVal >= 3 || this.rVal <= -3) {
        this.invalidR = true;
      }
    }
  }

  drawCircle(x: number, y: number) {
    if (false) {
      this.context.fillStyle = this.rectInColor;
    } else {
      this.context.fillStyle = this.rectNotInColor;
    }
    this.context.beginPath();
    this.context.arc(x, y, 4, 0, Math.PI * 2);
    this.context.closePath();
    this.context.fill();
  }
}
