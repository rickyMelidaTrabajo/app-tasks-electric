import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HourReportPageRoutingModule } from './hour-report-routing.module';

import { HourReportPage } from './hour-report.page';
import { HourReportsWithChartModule } from 'src/app/components/hour-reports-with-chart/hour-reports-with-chart.module';
import { HourReportsModule } from "src/app/components/hour-reports/hour-reports.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HourReportPageRoutingModule,
    HourReportsWithChartModule,
    HourReportsModule
  ],
  declarations: [HourReportPage]
})
export class HourReportPageModule { }
