import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr-escaner',
  templateUrl: './qr-escaner.page.html',
  styleUrls: ['./qr-escaner.page.scss'],
})
export class QrEscanerPage {
  qrCode: string | null = null;

  constructor(private navCtrl: NavController) {}

  async startScanner() {
    try {
      
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        
        BarcodeScanner.hideBackground();

        const result = await BarcodeScanner.startScan(); 

        if (result.hasContent) {
          this.qrCode = result.content; 
          alert(`Código escaneado: ${this.qrCode}`);
        }
      } else {
        alert('No se concedieron permisos para usar la cámara.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      BarcodeScanner.showBackground();
    }
  }

  goBack() {
    this.navCtrl.back();
  }
  


}
