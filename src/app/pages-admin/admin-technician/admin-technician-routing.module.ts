import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTechnicianPage } from './admin-technician.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTechnicianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTechnicianPageRoutingModule {}
