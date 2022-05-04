import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopulationComposition } from '../../../../domain/population-composition';
import { Prefecture } from '../../../../domain/prefecture';

@Component({
  selector: 'app-ly-total-population-chart',
  templateUrl: './ly-total-population-chart.component.html',
  styleUrls: ['./ly-total-population-chart.component.scss'],
})
export class LyTotalPopulationChartComponent {
  constructor() {}

  @Input() prefectures: Prefecture[] | null = null;
  @Input() populationComposition: PopulationComposition | null = null;
  @Output() prefSelected = new EventEmitter<Prefecture[]>();

  selectPref(prefectures: Prefecture[]) {
    this.prefSelected.emit(prefectures);
  }
}
