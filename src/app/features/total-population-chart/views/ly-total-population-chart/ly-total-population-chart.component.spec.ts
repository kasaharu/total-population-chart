import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyTotalPopulationChartComponent } from './ly-total-population-chart.component';

describe('LyTotalPopulationChartComponent', () => {
  let component: LyTotalPopulationChartComponent;
  let fixture: ComponentFixture<LyTotalPopulationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LyTotalPopulationChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyTotalPopulationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
