import { TestBed } from '@angular/core/testing';

import { PrefectureApi } from './prefecture.api';

describe('PrefectureApi', () => {
  let api: PrefectureApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    api = TestBed.inject(PrefectureApi);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });
});
