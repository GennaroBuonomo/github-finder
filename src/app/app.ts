import { Component } from '@angular/core';
import { GithubService } from './services/github';
import { GithubUser } from '../models/github-user';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html', /* Uso i nomi che avevi prima */
  styleUrl: './app.css'
})
export class App {
  // 1. Variabili per salvare i dati o l'errore
  utenteCorrente: GithubUser | null = null;
  errore: boolean = false;

  // 2. Iniettiamo il nostro servizio
  constructor(private githubService: GithubService) {}
  
  cercaUtente(username: string) {
    if (!username.trim()) return;
    
    // 3. Resettiamo la vista prima di ogni ricerca
    this.utenteCorrente = null;
    this.errore = false;
    
    // 4. Facciamo la vera chiamata HTTP e ci "abboniamo" (subscribe) alla risposta
    this.githubService.searchUser(username).subscribe({
      next: (dati) => {
        this.utenteCorrente = dati; // Successo: salviamo i dati!
      },
      error: (err) => {
        this.errore = true; // Fallimento: utente non trovato
        console.error(err);
      }
    });
  }
}