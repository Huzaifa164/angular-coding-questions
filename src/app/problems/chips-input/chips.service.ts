import { Injectable } from '@angular/core';
import { Chip } from './chip';

@Injectable({
  providedIn: 'root'
})
export class ChipsService {
  chips: Chip[] = [];
  chipId = 1;

  constructor() { }

  getAllChips(): Chip[] {
    return this.chips;
  }

  addSingleChip(chipLabel: string) {
    if(!chipLabel) {
      return;
    }
    const newChip: Chip = {id: this.chipId, label: chipLabel};
    this.chips.push(newChip);
    this.chipId++;
  }

  removeSingleChip(chipId: number) {
    this.chips = this.chips.filter(chip => chip.id !== chipId);
  }

}
