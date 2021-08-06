import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalServerConfigurationPageRoutingModule } from './modal-server-configuration-routing.module';

import { ModalServerConfigurationPage } from './modal-server-configuration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalServerConfigurationPageRoutingModule
  ],
  declarations: [ModalServerConfigurationPage]
})
export class ModalServerConfigurationPageModule {}
