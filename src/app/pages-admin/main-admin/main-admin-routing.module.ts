import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthAdminGuard } from 'src/app/canActive/auth-admin.guard';

import { MainAdminPage } from './main-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MainAdminPage,
    children: [
      {
        path: 'admin-technician',
        loadChildren: () => import('../admin-technician/admin-technician.module').then(m => m.AdminTechnicianPageModule),
        canActivate: [AuthAdminGuard]
      },
      {
        path: 'admin-users',
        loadChildren: () => import('../admin-users/admin-users.module').then(m => m.AdminUsersPageModule),
        canActivate: [AuthAdminGuard]
      },
      {
        path: 'hour-report',
        loadChildren: () => import('../hour-report/hour-report.module').then(m => m.HourReportPageModule),
        canActivate: [AuthAdminGuard]
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
