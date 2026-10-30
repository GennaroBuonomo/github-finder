import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  cercaUtente(username: string) {
    if (!username.trim()) return;
    
    // Quando premiamo invio o clicchiamo "Cerca", stamperà qui il nome
    console.log("Stai cercando l'utente:", username);
  }
  
}