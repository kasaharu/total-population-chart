import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPopulationChartComponent } from './total-population-chart.component';

describe('TotalPopulationChartComponent', () => {
  let component: TotalPopulationChartComponent;
  let fixture: ComponentFixture<TotalPopulationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalPopulationChartComponent],
    }).compileComponents();
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
