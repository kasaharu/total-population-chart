import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalPopulationChartComponent } from './pages/total-population-chart/total-population-chart.component';

const routes: Routes = [{ path: '', component: TotalPopulationChartComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalPopulationChartRoutingModule {}
