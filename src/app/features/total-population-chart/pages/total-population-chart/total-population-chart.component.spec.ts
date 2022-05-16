import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prefecture } from '../../../../domain/prefecture';
import { PopulationCompositionApi } from '../../../../infrastructures/api/population-composition.api';
import { PrefectureApi } from '../../../../infrastructures/api/prefecture.api';
import { TotalPopulationChartComponent } from './total-population-chart.component';
import { TotalPopulationChartUsecase } from './total-population-chart.usecase';

class MockPrefectureApi implements Partial<PrefectureApi> {
  getPrefectures(): any {}
}

class MockPopulationCompositionApi implements Partial<PopulationCompositionApi> {
  getPopulationComposition(): any {}
}

describe('TotalPopulationChartComponent', () => {
  let component: TotalPopulationChartComponent;
  let fixture: ComponentFixture<TotalPopulationChartComponent>;
  let usecase: TotalPopulationChartUsecase;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalPopulationChartComponent],
      providers: [
        { provide: PrefectureApi, useClass: MockPrefectureApi },
        { provide: PopulationCompositionApi, useClass: MockPopulationCompositionApi },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .overrideComponent(TotalPopulationChartComponent, {
        add: { providers: [TotalPopulationChartUsecase] },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPopulationChartComponent);
    usecase = fixture.debugElement.injector.get(TotalPopulationChartUsecase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('usecase.fetchPrefectures が呼ばれること', () => {
      spyOn(usecase, 'fetchPrefectures');

      component.ngOnInit();
      expect(usecase.fetchPrefectures).toHaveBeenCalled();
    });
  });

  describe('notifySelectedPrefectures()', () => {
    it('usecase.fetchPopulationComposition が呼ばれること', () => {
      const prefectures: Prefecture[] = [];
      spyOn(usecase, 'fetchPopulationComposition');

      component.notifySelectedPrefectures(prefectures);
      expect(usecase.fetchPopulationComposition).toHaveBeenCalledWith(prefectures);
    });
  });
});
