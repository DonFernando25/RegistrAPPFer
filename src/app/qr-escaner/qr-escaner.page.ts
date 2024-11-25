import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr-escaner',
  templateUrl: './qr-escaner.page.html',
  styleUrls: ['./qr-escaner.page.scss'],
})
export class QrEscanerPage {
  qrCode: string | null = null;

  constructor(private navCtrl: NavController) {}

  qrCodeResult: string | null = null;

  onCodeResult(result: string) {
    this.qrCodeResult = result; 
    alert(`Código escaneado: ${result}`);
  }

  
  goBack() {
    this.navCtrl.back();
  }
}
