import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  toggleState: boolean = false;

  constructor() {
    
  }

  changeState() {
    this.toggleState = !this.toggleState;
    return this.toggleState;
  }

}
