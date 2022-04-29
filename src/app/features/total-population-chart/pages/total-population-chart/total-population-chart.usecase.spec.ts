import { TestBed } from '@angular/core/testing';
import { TotalPopulationChartUsecase } from './total-population-chart.usecase';

describe('TotalPopulationChartUsecase', () => {
  let usecase: TotalPopulationChartUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(TotalPopulationChartUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
