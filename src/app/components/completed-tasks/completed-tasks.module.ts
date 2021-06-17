import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FormCompletedTasksComponent } from './form-completed-tasks/form-completed-tasks.component';
import { ListCompletedTasksComponent } from './list-completed-tasks/list-completed-tasks.component';
import { DetailFinishedTaskComponent } from './detail-finished-task/detail-finished-task.component';

@NgModule({
  declarations: [
    FormCompletedTasksComponent,
    ListCompletedTasksComponent,
    DetailFinishedTaskComponent
  ],
  exports: [
    FormCompletedTasksComponent,
    ListCompletedTasksComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class CompletedTasksModule { }
