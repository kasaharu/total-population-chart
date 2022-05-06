import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render counter', async () => {
    await render(AppComponent);

    expect(screen.getByText('total-population-chart')).toBeTruthy();
  });
});
