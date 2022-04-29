import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefecturesFormComponent } from './prefectures-form.component';

describe('PrefecturesFormComponent', () => {
  let component: PrefecturesFormComponent;
  let fixture: ComponentFixture<PrefecturesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrefecturesFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefecturesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
