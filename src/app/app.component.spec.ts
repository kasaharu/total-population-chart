import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render counter', async () => {
    await render(AppComponent);

    expect(screen.getByRole('heading', { name: 'total-population-chart' })).toBeTruthy();
  });
});
