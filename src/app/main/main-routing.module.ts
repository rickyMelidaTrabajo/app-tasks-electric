import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../canActive/auth.guard';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'tasks',
        loadChildren: () => import('../pages/tasks/tasks.module').then(m => m.TasksPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'add-task',
        loadChildren: () => import('../pages/add-task/add-task.module').then(m => m.AddTaskPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'setup',
        loadChildren: () => import('../pages/setup/setup.module').then(m => m.SetupPageModule)
      },
      {
        path: 'login-admin',
        loadChildren: () => import('../pages/modal-login/modal-login.module').then(m => m.ModalLoginPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('../pages-admin/main-admin/main-admin.module').then(m => m.MainAdminPageModule),
        canActivate: [AuthGuard]
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
