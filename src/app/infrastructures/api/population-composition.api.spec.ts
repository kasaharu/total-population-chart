import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { PopulationComposition } from '../../domain/population-composition';
import { PopulationCompositionApi } from './population-composition.api';

describe('PopulationCompositionApi', () => {
  let api: PopulationCompositionApi;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    api = TestBed.inject(PopulationCompositionApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  it('getPopulationComposition()', () => {
    const prefCode = 1;
    const perYear = [{ year: 2022, value: 1 }];
    const populationComposition: PopulationComposition = {
      boundaryYear: 2022,
      data: [{ label: 'test', data: perYear }],
    };
    const response = {
      result: populationComposition,
    };

    api.getPopulationComposition(prefCode).subscribe((resp) => {
      expect(resp).toEqual(perYear);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiEndpoint}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    );
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  });
});
