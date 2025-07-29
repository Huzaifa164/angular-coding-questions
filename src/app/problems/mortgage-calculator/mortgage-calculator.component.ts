import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {
  result!: string | number;
  amount!: number;
  rate!: number;
  term!: number;

  constructor() { }

  ngOnInit(): void {
  }

  onCalculate() {
    let monthlyRate = this.rate / 100 / 12;
    let monthlyPayments = this.term * 12;
    this.result = (this.amount * monthlyRate * Math.pow((1 + monthlyRate), monthlyPayments)) / Math.pow((1 + monthlyRate), monthlyPayments) - 1;
    console.log(this.result);
    if(this.result <= 0) {
      this.result = "Invalid Input"
    }
  }

}
