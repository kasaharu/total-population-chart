import { Component, OnInit } from '@angular/core';
import { Prefecture } from '../../../../domain/prefecture';
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
    console.log();
    // this._usecase.fetchPrefectures();
  }

  notifySelectedPrefectures(prefectures: Prefecture[]): void {
    // this._usecase.fetchPopulationComposition(prefectures);
  }
}
