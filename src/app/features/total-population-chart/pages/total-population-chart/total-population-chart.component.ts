import { Component, OnInit } from '@angular/core';
import { TotalPopulationChartUsecase } from './total-population-chart.usecase';

@Component({
  selector: 'app-total-population-chart',
  templateUrl: './total-population-chart.component.html',
  styleUrls: ['./total-population-chart.component.scss'],
  providers: [TotalPopulationChartUsecase],
})
export class TotalPopulationChartComponent implements OnInit {
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
