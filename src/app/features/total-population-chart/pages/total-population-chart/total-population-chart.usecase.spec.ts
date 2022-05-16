import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
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

  describe('fetchPrefectures()', () => {
    it('usecase.savePrefectures() が呼ばれること', async () => {
      const prefectures: Prefecture[] = [];
      spyOn(prefectureApi, 'getPrefectures').and.returnValue(of(prefectures));
      spyOn(usecase, 'savePrefectures');

      await usecase.fetchPrefectures();

      expect(usecase.savePrefectures).toHaveBeenCalledWith(prefectures);
    });
  });
});
