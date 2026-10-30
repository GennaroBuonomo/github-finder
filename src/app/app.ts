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
  inCaricamento: boolean = false; // 1. NUOVA VARIABILE

  constructor(private githubService: GithubService) {}
  
  cercaUtente(username: string) {
    if (!username.trim()) return;
    
    this.utenteCorrente = null;
    this.errore = false;
    this.inCaricamento = true; // 2. INIZIA IL CARICAMENTO
    
    this.githubService.searchUser(username).subscribe({
      next: (dati) => {
        this.utenteCorrente = dati;
        this.inCaricamento = false; // 3. FINITO (SUCCESSO)
      },
      error: (err) => {
        this.errore = true;
        this.inCaricamento = false; // 3. FINITO (ERRORE)
        console.error(err);
      }
    });
  }
}