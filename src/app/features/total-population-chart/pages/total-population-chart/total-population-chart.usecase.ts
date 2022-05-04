import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { lastValueFrom } from 'rxjs';
import { PerYear } from '../../../../domain/population-composition';
import { Prefecture } from '../../../../domain/prefecture';
import { PopulationCompositionApi } from '../../../../infrastructures/api/population-composition.api';
import { PrefectureApi } from '../../../../infrastructures/api/prefecture.api';

export interface TotalPopulationChartState {
  prefectures: Prefecture[] | null;
  populationComposition: PerYear[][] | null;
}

@Injectable()
export class TotalPopulationChartUsecase extends ComponentStore<TotalPopulationChartState> {
  constructor(private _prefectureApi: PrefectureApi, private _populationCompositionApi: PopulationCompositionApi) {
    super({ prefectures: null, populationComposition: null });
  }

  readonly prefectures$ = this.select((state) => state.prefectures);
  readonly savePrefectures = this.updater((state, prefectures: Prefecture[]) => ({ ...state, prefectures }));
  readonly populationComposition$ = this.select((state) => state.populationComposition);
  readonly savePopulationComposition = this.updater((state, populationComposition: PerYear[][]) => ({
    ...state,
    populationComposition,
  }));

  async fetchPrefectures(): Promise<void> {
    const prefectures = await lastValueFrom(this._prefectureApi.getPrefectures());
    this.savePrefectures(prefectures);
  }

  async fetchPopulationComposition(prefectures: Prefecture[]) {
    if (prefectures.length === 0) {
      return;
    }
    console.log('usecase - fetchPopulationComposition: ');
    console.log(prefectures);

    const results = await Promise.all(
      prefectures.map((p) => lastValueFrom(this._populationCompositionApi.getPopulationComposition(p.prefCode))),
    );
    console.log(results);
    this.savePopulationComposition(results);
  }
}
