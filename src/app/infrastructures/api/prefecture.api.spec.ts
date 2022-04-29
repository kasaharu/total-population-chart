import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Prefecture } from '../../domain/prefecture';
import { environment } from '../../../environments/environment';
import { PrefectureApi } from './prefecture.api';

describe('PrefectureApi', () => {
  let api: PrefectureApi;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    api = TestBed.inject(PrefectureApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  it('getPrefectures()', () => {
    const prefectures: Prefecture[] = [
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '沖縄県' },
    ];
    const response = {
      result: prefectures,
    };

    api.getPrefectures().subscribe((resp) => {
      expect(resp).toEqual(prefectures);
    });

    const req = httpTestingController.expectOne(`${environment.apiEndpoint}/api/v1/prefectures`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  });
});
