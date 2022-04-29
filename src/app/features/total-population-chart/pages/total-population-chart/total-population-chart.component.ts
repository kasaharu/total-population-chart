import { Component, OnInit } from '@angular/core';
import { TotalPopulationChartUsecase } from './total-population-chart.usecase';

@Component({
  selector: 'app-total-population-chart',
  templateUrl: './total-population-chart.component.html',
  styleUrls: ['./total-population-chart.component.scss'],
  providers: [TotalPopulationChartUsecase],
})
export class TotalPopulationChartComponent implements OnInit {
  constructor(private _usecase: TotalPopulationChartUsecase) {}

  prefectures$ = this._usecase.prefectures$;

  ngOnInit(): void {
    this._usecase.fetchPrefectures();
  }
}
