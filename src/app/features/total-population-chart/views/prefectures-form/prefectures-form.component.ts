import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Prefecture } from '../../../../domain/prefecture';

@Component({
  selector: 'app-prefectures-form',
  templateUrl: './prefectures-form.component.html',
  styleUrls: ['./prefectures-form.component.scss'],
})
export class PrefecturesFormComponent implements OnChanges {
  constructor() {}
  @Input() prefectures: Prefecture[] | null = null;

  formGroup = new FormGroup({ checkboxes: new FormArray([]) });

  ngOnChanges(): void {
    if (this.prefectures !== null) {
      const prefecturesFormControl = this.prefectures.map((_) => new FormControl(false));
      this.formGroup = new FormGroup({
        checkboxes: new FormArray(prefecturesFormControl),
      });
    }
  }

  get checkboxes() {
    return this.formGroup.get('checkboxes') as FormArray;
  }

  getPrefectureName(i: number) {
    return this.prefectures === null ? '' : this.prefectures[i].prefName;
  }

  onChange(): void {
    const checkboxes: boolean[] = this.formGroup.value.checkboxes;

    const checkedBox: Prefecture[] = [];
    checkboxes.forEach((item, index: number) => {
      if (this.prefectures === null) {
        return;
      }

      if (item === true) {
        checkedBox.push(this.prefectures[index]);
      }
    });
  }
}
