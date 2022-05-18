import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PerYear } from '../../../../domain/population-composition';
import { Prefecture } from '../../../../domain/prefecture';
import { PopulationCompositionApi } from '../../../../infrastructures/api/population-composition.api';
import { PrefectureApi } from '../../../../infrastructures/api/prefecture.api';
import { TotalPopulationChartUsecase } from './total-population-chart.usecase';

class MockPrefectureApi implements Partial<PrefectureApi> {
  getPrefectures(): any {}
}

class MockPopulationCompositionApi implements Partial<PopulationCompositionApi> {
  getPopulationComposition(): any {}
}

describe('TotalPopulationChartUsecase', () => {
  let usecase: TotalPopulationChartUsecase;
  let prefectureApi: PrefectureApi;
  let populationCompositionApi: PopulationCompositionApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TotalPopulationChartUsecase,
        { provide: PrefectureApi, useClass: MockPrefectureApi },
        { provide: PopulationCompositionApi, useClass: MockPopulationCompositionApi },
      ],
    });
    usecase = TestBed.inject(TotalPopulationChartUsecase);
    prefectureApi = TestBed.inject(PrefectureApi);
    populationCompositionApi = TestBed.inject(PopulationCompositionApi);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  describe('savePrefectures', () => {
    it('usecase.prefectures$ に更新した prefectures になっていること', () => {
      const prefectures: Prefecture[] = [{ prefCode: 1, prefName: '東京都' }];
      usecase.savePrefectures(prefectures);

      usecase.prefectures$.subscribe((val) => {
        expect(val).toEqual(prefectures);
      });
    });
  });

  describe('fetchPrefectures()', () => {
    it('usecase.savePrefectures() が呼ばれること', async () => {
      const prefectures: Prefecture[] = [];
      spyOn(prefectureApi, 'getPrefectures').and.returnValue(of(prefectures));
      spyOn(usecase, 'savePrefectures');

      await usecase.fetchPrefectures();

      expect(usecase.savePrefectures).toHaveBeenCalledWith(prefectures);
    });
  });

  describe('fetchPopulationComposition()', () => {
    it('引数の prefectures が空配列の場合、何も実行されないこと', async () => {
      const prefectures: Prefecture[] = [];
      spyOn(usecase, 'savePopulationComposition');

      await usecase.fetchPopulationComposition(prefectures);

      expect(usecase.savePopulationComposition).not.toHaveBeenCalled();
    });

    it('引数の prefectures が空配列でない場合、usecase.savePopulationComposition が実行されること', async () => {
      const prefectures: Prefecture[] = [{ prefCode: 1, prefName: '東京都' }];
      const perYear: PerYear[] = [{ year: 2020, value: 1000 }];
      spyOn(populationCompositionApi, 'getPopulationComposition').and.returnValue(of(perYear));
      spyOn(usecase, 'savePopulationComposition');

      await usecase.fetchPopulationComposition(prefectures);

      expect(usecase.savePopulationComposition).toHaveBeenCalledWith([perYear]);
    });
  });
});
