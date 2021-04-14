import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountUpdatePageRoutingModule } from './account-update-routing.module';

import { AccountUpdatePage } from './account-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountUpdatePageRoutingModule
  ],
  declarations: [AccountUpdatePage]
})
export class AccountUpdatePageModule {}
