import { render } from '@testing-library/angular';
import { Prefecture } from '../../../../domain/prefecture';
import { LyTotalPopulationChartComponent } from './ly-total-population-chart.component';

describe('LyTotalPopulationChartComponent', () => {
  describe('selectPref()', () => {
    it('component.prefSelected.emit() が呼ばれること', async () => {
      const { fixture } = await render(LyTotalPopulationChartComponent);
      const component = fixture.componentInstance;
      const prefectures: Prefecture[] = [{ prefCode: 1, prefName: '東京都' }];
      spyOn(component.prefSelected, 'emit');

      component.selectPref(prefectures);
      expect(component.prefSelected.emit).toHaveBeenCalledWith(prefectures);
    });
  });
});
