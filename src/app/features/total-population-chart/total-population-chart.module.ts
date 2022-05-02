import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TotalPopulationChartComponent } from './pages/total-population-chart/total-population-chart.component';
import { TotalPopulationChartRoutingModule } from './total-population-chart-routing.module';
import { LyTotalPopulationChartComponent } from './views/ly-total-population-chart/ly-total-population-chart.component';
import { PrefecturesFormComponent } from './views/prefectures-form/prefectures-form.component';
import { LineChartComponent } from './views/line-chart/line-chart.component';

@NgModule({
  declarations: [TotalPopulationChartComponent, LyTotalPopulationChartComponent, PrefecturesFormComponent, LineChartComponent],
  imports: [CommonModule, TotalPopulationChartRoutingModule, ReactiveFormsModule],
})
export class TotalPopulationChartModule {}
