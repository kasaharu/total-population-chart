import { TestBed } from '@angular/core/testing';
import { TotalPopulationChartUsecase } from './total-population-chart.usecase';

describe('TotalPopulationChartUsecase', () => {
  let usecase: TotalPopulationChartUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotalPopulationChartUsecase],
    });
    usecase = TestBed.inject(TotalPopulationChartUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
