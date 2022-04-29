import { TestBed } from '@angular/core/testing';

import { TotalPopulationChartService } from './total-population-chart.service';

describe('TotalPopulationChartService', () => {
  let service: TotalPopulationChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalPopulationChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
