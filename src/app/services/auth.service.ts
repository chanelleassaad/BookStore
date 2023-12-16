import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  login(username: string, password: string): boolean {
    // Implement your actual authentication logic here
    // For simplicity, this example just checks if the username and password are non-empty
    if (username && password) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    // Implement your logout logic here
    this.isLoggedIn = false;
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
