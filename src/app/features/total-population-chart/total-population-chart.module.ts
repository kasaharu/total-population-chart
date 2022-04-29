import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotalPopulationChartRoutingModule } from './total-population-chart-routing.module';
import { TotalPopulationChartComponent } from './pages/total-population-chart/total-population-chart.component';
import { LyTotalPopulationChartComponent } from './views/ly-total-population-chart/ly-total-population-chart.component';

@NgModule({
  declarations: [TotalPopulationChartComponent, LyTotalPopulationChartComponent],
  imports: [CommonModule, TotalPopulationChartRoutingModule],
})
export class TotalPopulationChartModule {}
