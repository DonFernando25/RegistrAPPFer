import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertController: AlertController,
    private authService: AuthService 
  ) {}

  async login() {
    if (this.username && this.password) {
      
      if (this.authService.login(this.username, this.password)) {
        
        this.router.navigate(['/inicio'], { state: { username: this.username } });
      } else {
        
        const alert = await this.alertController.create({
          header: 'Error de autenticación',
          message: 'Nombre de usuario o contraseña incorrectos.',
          buttons: ['OK']
        });
        await alert.present();
      }
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

