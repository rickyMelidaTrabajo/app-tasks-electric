import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ListPendingTasksComponent } from './list-pending-tasks/list-pending-tasks.component';
import { FormPendingTasksComponent } from './form-pending-tasks/form-pending-tasks.component';

import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    FormPendingTasksComponent,
    ListPendingTasksComponent
  ],
  exports: [
    FormPendingTasksComponent,
    ListPendingTasksComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class PendingTasksModule { }
