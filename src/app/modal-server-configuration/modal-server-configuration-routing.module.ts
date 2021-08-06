import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalServerConfigurationPage } from './modal-server-configuration.page';

const routes: Routes = [
  {
    path: '',
    component: ModalServerConfigurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalServerConfigurationPageRoutingModule {}
