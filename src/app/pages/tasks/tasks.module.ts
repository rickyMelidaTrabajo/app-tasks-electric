import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { CompletedTasksModule } from 'src/app/components/completed-tasks/completed-tasks.module';
import { PendingTasksModule } from 'src/app/components/pending-tasks/pending-tasks.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,
    CompletedTasksModule,
    PendingTasksModule
  ],
  declarations: [TasksPage]
})
export class TasksPageModule {}
