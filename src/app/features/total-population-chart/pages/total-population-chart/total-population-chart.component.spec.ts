import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalPopulationChartComponent],
      providers: [
        { provide: PrefectureApi, useClass: MockPrefectureApi },
        { provide: PopulationCompositionApi, useClass: MockPopulationCompositionApi },
      ],
    })
      .overrideComponent(TotalPopulationChartComponent, {
        add: { providers: [TotalPopulationChartUsecase] },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPopulationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
