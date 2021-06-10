import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUsersPageRoutingModule } from './admin-users-routing.module';

import { AdminUsersPage } from './admin-users.page';
import { UserModule } from "../../components/user/user.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUsersPageRoutingModule,
    UserModule
  ],
  declarations: [AdminUsersPage]
})
export class AdminUsersPageModule {}
