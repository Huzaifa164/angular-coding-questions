import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-the-number',
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css']
})
export class GuessTheNumberComponent implements OnInit {
  guessInput: number | null= null;
  guessedNumber: number = Math.round(Math.random() * 100);
  attempts: number = 0;
  output: string = '';
  isWinner: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onCheckGuess() {
    if(!this.guessInput || !(this.guessInput >= 1 && this.guessInput <= 100)) {
      this.output = 'Please enter a number between 1 and 100.';
    } else {
      if(!this.isWinner) {
        if(this.guessInput > this.guessedNumber) {
          this.attempts++;
          this.output = 'Too high! Try again.';
        } else if(this.guessInput < this.guessedNumber ) {
          this.attempts++;
          this.output = 'Too low! Try again.';
        } else {
          this.attempts++;
          this.output = `Congratulations! You guessed the number in ${this.attempts} attempts.`;
          this.isWinner = true;
        }
      }
      this.guessInput = null;
    }
  }

  onReset() {
    this.guessInput = null;
    this.attempts = 0;
    this.output = '';
    this.guessedNumber = Math.round(Math.random() * 100);
    this.isWinner = false;
  }

}
