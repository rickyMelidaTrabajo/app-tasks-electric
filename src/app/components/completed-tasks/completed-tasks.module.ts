import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { FormCompletedTasksComponent } from './form-completed-tasks/form-completed-tasks.component';
import { ListCompletedTasksComponent } from './list-completed-tasks/list-completed-tasks.component';

@NgModule({
  declarations: [
    FormCompletedTasksComponent,
    ListCompletedTasksComponent,

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
