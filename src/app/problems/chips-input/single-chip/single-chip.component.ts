import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chip } from '../chip';
import { ChipsService } from '../chips.service';

@Component({
  selector: 'app-single-chip',
  templateUrl: './single-chip.component.html',
  styleUrls: ['./single-chip.component.css']
})
export class SingleChipComponent implements OnInit {
  @Input() chip!: Chip;
  @Output() onDeleteChip = new EventEmitter();

  constructor(private chipsService: ChipsService) { }

  ngOnInit() {
  }

  deleteChip() {
    this.chipsService.removeSingleChip(this.chip.id);
    this.onDeleteChip.emit();
  }

}
