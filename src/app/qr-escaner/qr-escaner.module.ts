import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrEscanerPageRoutingModule } from './qr-escaner-routing.module';

import { QrEscanerPage } from './qr-escaner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrEscanerPageRoutingModule
  ],
  declarations: [QrEscanerPage]
})
export class QrEscanerPageModule {}
