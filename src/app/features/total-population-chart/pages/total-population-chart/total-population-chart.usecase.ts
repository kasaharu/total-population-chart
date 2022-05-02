import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { lastValueFrom } from 'rxjs';
import { PopulationComposition } from '../../../../domain/population-composition';
import { Prefecture } from '../../../../domain/prefecture';
import { PrefectureApi } from '../../../../infrastructures/api/prefecture.api';

export interface TotalPopulationChartState {
  prefectures: Prefecture[] | null;
  populationComposition: PopulationComposition | null;
}

@Injectable()
export class TotalPopulationChartUsecase extends ComponentStore<TotalPopulationChartState> {
  constructor(private _prefectureApi: PrefectureApi) {
    super({ prefectures: null, populationComposition: null });
  }

  readonly prefectures$ = this.select((state) => state.prefectures);
  readonly savePrefectures = this.updater((state, prefectures: Prefecture[]) => ({ ...state, prefectures }));
  readonly populationComposition$ = this.select((state) => state.populationComposition);
  readonly savePopulationComposition = this.updater((state, populationComposition: PopulationComposition) => ({
    ...state,
    populationComposition,
  }));

  async fetchPrefectures(): Promise<void> {
    const prefectures = await lastValueFrom(this._prefectureApi.getPrefectures());
    this.savePrefectures(prefectures);
  }
}
