import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';



@NgModule({
  declarations: [AreaChartComponent],
  exports: [
    AreaChartComponent
  ],
  imports: [
    CommonModule,
    Ng2GoogleChartsModule
  ]
})
export class HourReportsWithChartModule { }
