import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user/form-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ModalDeleteUserComponent } from './modal-delete-user/modal-delete-user.component';



@NgModule({
  declarations: [FormUserComponent, ListUserComponent, ModalDeleteUserComponent],
  exports: [
    FormUserComponent, 
    ListUserComponent, 
    ModalDeleteUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
