import { Component } from '@angular/core';
import { GithubService } from './services/github';
import { GithubUser } from '../models/github-user';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  utenteCorrente: GithubUser | null = null;
  errore: boolean = false;
  inCaricamento: boolean = false;

  constructor(private githubService: GithubService) {}
  
  // Ora riceviamo l'intero input HTML, non solo la stringa
  cercaUtente(inputElement: HTMLInputElement) {
    const username = inputElement.value; // Estraiamo il testo
    
    if (!username.trim()) return;
    
    this.utenteCorrente = null;
    this.errore = false;
    this.inCaricamento = true; 
    
    this.githubService.searchUser(username).subscribe({
      next: (dati) => {
        this.utenteCorrente = dati;
        this.inCaricamento = false; 
        inputElement.value = ''; // 2. SVUOTA L'INPUT IN CASO DI SUCCESSO
      },
      error: (err) => {
        this.errore = true;
        this.inCaricamento = false; 
        inputElement.value = ''; // 3. SVUOTA L'INPUT ANCHE IN CASO DI ERRORE
        console.error(err);
      }
    });
  }
}