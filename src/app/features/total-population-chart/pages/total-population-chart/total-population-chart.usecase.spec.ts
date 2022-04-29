import { TestBed } from '@angular/core/testing';
import { PrefectureApi } from '../../../../infrastructures/api/prefecture.api';
import { TotalPopulationChartUsecase } from './total-population-chart.usecase';

class MockPrefectureApi implements Partial<PrefectureApi> {
  getPrefectures(): any {}
}

describe('TotalPopulationChartUsecase', () => {
  let usecase: TotalPopulationChartUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotalPopulationChartUsecase, { provide: PrefectureApi, useClass: MockPrefectureApi }],
    });
    usecase = TestBed.inject(TotalPopulationChartUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
