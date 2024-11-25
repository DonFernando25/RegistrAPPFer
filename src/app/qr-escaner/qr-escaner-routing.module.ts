import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrEscanerPage } from './qr-escaner.page';

const routes: Routes = [
  {
    path: '',
    component: QrEscanerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrEscanerPageRoutingModule {}
