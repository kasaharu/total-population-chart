import { TestBed } from '@angular/core/testing';
import { PopulationCompositionApi } from './population-composition.api';

describe('PopulationCompositionApi', () => {
  let api: PopulationCompositionApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    api = TestBed.inject(PopulationCompositionApi);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });
});
