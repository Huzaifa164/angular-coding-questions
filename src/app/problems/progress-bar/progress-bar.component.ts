import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @ViewChild('testBgColor', {static: false}) testBgColorRef!: ElementRef
  progress: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onIncrease() {
    if(this.progress < 100) {
      this.progress += 10;
      this.changeProgressColorAndValue();
    }
  }

  onDecrease() {
    if(this.progress > 0) {
      this.progress -= 10;
      this.changeProgressColorAndValue();
    }
  }

  changeProgressColorAndValue() {
    if(this.progress < 40) {
      this.testBgColorRef.nativeElement.style.backgroundColor = 'red';
    } else if(this.progress < 80) {
      this.testBgColorRef.nativeElement.style.backgroundColor = 'orange';
    } else {
      this.testBgColorRef.nativeElement.style.backgroundColor = 'green';
    }
    this.testBgColorRef.nativeElement.style.width = this.progress + '%';
  }

}
