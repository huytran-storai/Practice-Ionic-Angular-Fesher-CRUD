import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageStorePageRoutingModule } from './manage-store-routing.module';

import { ManageStorePage } from './manage-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageStorePageRoutingModule
  ],
  declarations: [ManageStorePage]
})
export class ManageStorePageModule {}
