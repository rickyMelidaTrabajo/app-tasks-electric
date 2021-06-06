import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HourReportPage } from './hour-report.page';

const routes: Routes = [
  {
    path: '',
    component: HourReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HourReportPageRoutingModule {}
