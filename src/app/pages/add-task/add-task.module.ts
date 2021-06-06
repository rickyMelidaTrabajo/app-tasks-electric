import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTaskPageRoutingModule } from './add-task-routing.module';

import { AddTaskPage } from './add-task.page';
import { CompletedTasksModule } from 'src/app/components/completed-tasks/completed-tasks.module';
import { PendingTasksModule } from 'src/app/components/pending-tasks/pending-tasks.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTaskPageRoutingModule,
    CompletedTasksModule,
    PendingTasksModule
  ],
  declarations: [AddTaskPage]
})
export class AddTaskPageModule { }
