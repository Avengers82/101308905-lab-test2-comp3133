import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() yearFilter = new EventEmitter<number>();

  selectedYear: number;

  filterByYear() {
    this.yearFilter.emit(this.selectedYear);
  }
}
