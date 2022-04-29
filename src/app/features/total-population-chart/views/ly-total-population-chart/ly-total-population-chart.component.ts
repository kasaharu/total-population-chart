import { Component, Input, OnInit } from '@angular/core';
import { Prefecture } from '../../../../domain/prefecture';

@Component({
  selector: 'app-ly-total-population-chart',
  templateUrl: './ly-total-population-chart.component.html',
  styleUrls: ['./ly-total-population-chart.component.scss'],
})
export class LyTotalPopulationChartComponent {
  constructor() {}

  @Input() prefectures: Prefecture[] | null = null;
}
