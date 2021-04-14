import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgendaPage } from './agenda.page';

import { AgendaPageRoutingModule } from './agenda-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AgendaPage }]),
    AgendaPageRoutingModule,
  ],
  declarations: [AgendaPage]
})
export class AgendaPageModule {}
