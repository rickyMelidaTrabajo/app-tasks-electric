import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HourReportsPerTaskComponent } from './hour-reports-per-task/hour-reports-per-task.component';
import { HourReportsPerTechnicianComponent } from './hour-reports-per-technician/hour-reports-per-technician.component';



@NgModule({
  declarations: [HourReportsPerTaskComponent, HourReportsPerTechnicianComponent],
  exports: [
    HourReportsPerTaskComponent,
    HourReportsPerTechnicianComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class HourReportsModule { }
