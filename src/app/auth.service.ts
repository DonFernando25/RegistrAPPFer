import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private validUsername = 'usuario'; 
  private validPassword = '1234';    

  
  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  
  logout() {
    this.isAuthenticated = false;
  }
}
