import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'https://sentinela.sosystemsolucoes.com.br/api';

@Injectable({
  providedIn: 'root',
})
// Para logar no google
// http://sentinela.sosystemsolucoes.com.br/api/schedulings/google-auth
// Para gerar o link google meet
// http://sentinela.sosystemsolucoes.com.br/api/schedulings/callmeet
export class MeetService {
  constructor(private http: HttpClient) {}

  loginGoogle() {
    window.open("http://sentinela.sosystemsolucoes.com.br/api/schedulings/google-auth", "_blank")
    // return this.http.get(`${baseUrl}/schedulings/google-auth`);
  }

  createRoomMeet() {
    return this.http.get(`${baseUrl}/schedulings/callmeet`);
  }

  // Método para salvar o token após a autenticação
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Método para obter o token armazenado
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método de logout para remover o token
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
