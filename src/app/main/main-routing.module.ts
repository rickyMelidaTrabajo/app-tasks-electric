import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'tasks',
        loadChildren: () => import('../pages/tasks/tasks.module').then(m => m.TasksPageModule)
      },
      {
        path: 'add-task',
        loadChildren: () => import('../pages/add-task/add-task.module').then(m => m.AddTaskPageModule)
      },
      {
        path: 'setup',
        loadChildren: () => import('../pages/setup/setup.module').then(m => m.SetupPageModule)
      },
      {
        path: 'login-admin',
        loadChildren: () => import('../pages/modal-login/modal-login.module').then(m => m.ModalLoginPageModule)
      },
      {
        path: '',
        redirectTo: '/main/tasks'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
