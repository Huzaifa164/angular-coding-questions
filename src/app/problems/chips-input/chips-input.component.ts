import { Component, OnInit } from '@angular/core';
import { Chip } from './chip';
import { ChipsService } from './chips.service';

@Component({
  selector: 'app-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.css']
})
export class ChipsInputComponent implements OnInit {
  chips: Chip[] = [];
  chipLabel: string = ''

  constructor(private chipsService: ChipsService) { }

  ngOnInit() {
    this.chips = this.chipsService.getAllChips();
  }

  updateChips() {
    this.chips = this.chipsService.getAllChips();
  }

  addSingleChip() {
    this.chipsService.addSingleChip(this.chipLabel);
    this.chipLabel = '';
  }

}
