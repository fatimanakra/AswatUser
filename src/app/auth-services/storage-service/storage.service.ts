import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private TOKEN_KEY = 'auth-token';

  constructor() { }

  // Méthode pour récupérer le jeton du stockage local
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Méthode pour enregistrer le jeton dans le stockage local
  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Méthode pour supprimer le jeton du stockage local
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
