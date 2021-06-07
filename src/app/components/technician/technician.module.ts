import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTechnicianComponent } from './list-technician/list-technician.component'
import { FormTechnicianComponent } from './form-technician/form-technician.component';
import { ModalDeleteTechnicianComponent } from './modal-delete-technician/modal-delete-technician.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ListTechnicianComponent, FormTechnicianComponent, ModalDeleteTechnicianComponent],
  exports: [
    ListTechnicianComponent,
    FormTechnicianComponent,
    ModalDeleteTechnicianComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class TechnicianModule { }
