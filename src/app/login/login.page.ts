import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';


  constructor(private router: Router, private navCtrl: NavController,private alertController: AlertController) { }

  async login() {
    if (this.username && this.password) {
      this.router.navigate(['/inicio'], { state: { username: this.username } });
    } else {
      const alert = await this.alertController.create({
        header: 'Campos incompletos',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }
  


  goToResetPassword() {
    this.router.navigate(['/restablecer']);  
  }


  goBack() {
    this.navCtrl.back();
  }
  

}
