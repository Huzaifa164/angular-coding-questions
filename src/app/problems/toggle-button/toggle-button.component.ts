import { Component, OnInit } from '@angular/core';
import { ToggleService } from './toggle.service';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
  toggleState: boolean = false

  constructor(private toggleService: ToggleService) { }

  ngOnInit() {
    this.toggleState = this.toggleService.toggleState;
  }

  changeState() {
    this.toggleState = this.toggleService.changeState();
  }

}
