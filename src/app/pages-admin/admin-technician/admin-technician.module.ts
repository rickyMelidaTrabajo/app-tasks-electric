import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTechnicianPageRoutingModule } from './admin-technician-routing.module';

import { AdminTechnicianPage } from './admin-technician.page';
import { TechnicianModule } from 'src/app/components/technician/technician.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTechnicianPageRoutingModule,
    TechnicianModule

  ],
  declarations: [AdminTechnicianPage]
})
export class AdminTechnicianPageModule { }
