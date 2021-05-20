import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupsPage } from './groups.page';

import { GroupsPageRoutingModule } from './groups-routing.module';
import { GroupItemComponent } from 'src/app/components/group-item/group-item.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GroupsPageRoutingModule
  ],
  declarations: [GroupsPage, GroupItemComponent]
})
export class GroupsPageModule {}
