import { ReactiveFormsModule } from '@angular/forms';
import { render } from '@testing-library/angular';
import { PrefecturesFormComponent } from './prefectures-form.component';

describe('PrefecturesFormComponent', () => {
  it('should create', async () => {
    const { fixture } = await render(PrefecturesFormComponent, { imports: [ReactiveFormsModule] });
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
