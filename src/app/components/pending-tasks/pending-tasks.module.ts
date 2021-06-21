import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ListPendingTasksComponent } from './list-pending-tasks/list-pending-tasks.component';
import { FormPendingTasksComponent } from './form-pending-tasks/form-pending-tasks.component';

import { FormsModule } from '@angular/forms';
import { DetailPendingTaskComponent } from './detail-pending-task/detail-pending-task.component';
import { CompletedTasksModule } from '../completed-tasks/completed-tasks.module';
import { FormClosePendingComponent } from './form-close-pending/form-close-pending.component';


@NgModule({
  declarations: [
    FormPendingTasksComponent,
    ListPendingTasksComponent,
    DetailPendingTaskComponent,
    FormClosePendingComponent
  ],
  exports: [
    FormPendingTasksComponent,
    ListPendingTasksComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CompletedTasksModule
  ]
})
export class PendingTasksModule { }
