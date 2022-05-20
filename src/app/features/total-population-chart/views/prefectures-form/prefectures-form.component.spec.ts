import { ReactiveFormsModule } from '@angular/forms';
import { render } from '@testing-library/angular';
import { PrefecturesFormComponent } from './prefectures-form.component';
import { Prefecture } from '../../../../domain/prefecture';

describe('PrefecturesFormComponent', () => {
  it('should create', async () => {
    const { fixture } = await render(PrefecturesFormComponent, { imports: [ReactiveFormsModule] });
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  describe('初期化', () => {
    it('prefectures が null のとき formGroup の checkboxes は [] になること', async () => {
      const prefectures = null;
      const { fixture } = await render(PrefecturesFormComponent, { imports: [ReactiveFormsModule], componentProperties: { prefectures } });
      const component = fixture.componentInstance;
      expect(component.checkboxes.value).toEqual([]);
    });

    it('prefectures が null でないとき formGroup の checkboxes は prefectures と同じ長さの false の配列になること', async () => {
      const prefectures: Prefecture[] = [
        { prefCode: 1, prefName: '東京都' },
        { prefCode: 2, prefName: '沖縄県' },
      ];
      const expected = [false, false];
      const { fixture } = await render(PrefecturesFormComponent, { imports: [ReactiveFormsModule], componentProperties: { prefectures } });
      const component = fixture.componentInstance;
      expect(component.checkboxes.value).toEqual(expected);
    });
  });

  describe('getPrefectureName()', () => {
    it('prefectures が null のとき、空文字が返ること', async () => {
      const prefectures = null;
      const { fixture } = await render(PrefecturesFormComponent, { imports: [ReactiveFormsModule], componentProperties: { prefectures } });
      const component = fixture.componentInstance;

      const result = component.getPrefectureName(0);
      expect(result).toBe('');
    });

    it('prefectures が null でないとき、対象の prefName が返ること', async () => {
      const prefectures: Prefecture[] = [{ prefCode: 1, prefName: '東京都' }];
      const { fixture } = await render(PrefecturesFormComponent, { imports: [ReactiveFormsModule], componentProperties: { prefectures } });
      const component = fixture.componentInstance;

      const result = component.getPrefectureName(0);
      expect(result).toBe('東京都');
    });
  });
});
