import { render } from '@testing-library/angular';
import { PrefecturesFormComponent } from './prefectures-form.component';

describe('PrefecturesFormComponent', () => {
  it('should create', async () => {
    const { fixture } = await render(PrefecturesFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
