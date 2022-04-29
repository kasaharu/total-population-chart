import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Prefecture } from '../../../../domain/prefecture';

export interface TotalPopulationChartState {
  prefectures: Prefecture[] | null;
}

@Injectable()
export class TotalPopulationChartUsecase extends ComponentStore<TotalPopulationChartState> {
  constructor() {
    super({ prefectures: null });
  }
}
