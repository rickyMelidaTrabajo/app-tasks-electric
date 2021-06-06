import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTechnicianPageRoutingModule } from './admin-technician-routing.module';

import { AdminTechnicianPage } from './admin-technician.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTechnicianPageRoutingModule
  ],
  declarations: [AdminTechnicianPage]
})
export class AdminTechnicianPageModule {}
