import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { lastValueFrom } from 'rxjs';
import { PrefectureApi } from '../../../../infrastructures/api/prefecture.api';
import { Prefecture } from '../../../../domain/prefecture';

export interface TotalPopulationChartState {
  prefectures: Prefecture[] | null;
}

@Injectable()
export class TotalPopulationChartUsecase extends ComponentStore<TotalPopulationChartState> {
  constructor(private _prefectureApi: PrefectureApi) {
    super({ prefectures: null });
  }

  readonly prefectures$ = this.select((state) => state.prefectures);
  readonly savePrefectures = this.updater((_, prefectures: Prefecture[]) => ({ prefectures }));

  async fetchPrefectures(): Promise<void> {
    const prefectures = await lastValueFrom(this._prefectureApi.getPrefectures());
    this.savePrefectures(prefectures);
  }
}
