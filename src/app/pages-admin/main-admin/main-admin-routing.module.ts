import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainAdminPage } from './main-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MainAdminPage,
    children: [
      {
        path: 'admin-technician',
        loadChildren: () => import('../admin-technician/admin-technician.module').then(m => m.AdminTechnicianPageModule)
      },
      {
        path: 'admin-users',
        loadChildren: () => import('../admin-users/admin-users.module').then(m => m.AdminUsersPageModule)
      },
      {
        path: 'hour-report',
        loadChildren: () => import('../hour-report/hour-report.module').then(m => m.HourReportPageModule)
      },
      {
        path: '',
        redirectTo: '/main-admin/admin-technician'
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAdminPageRoutingModule { }
