import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubUser } from '../../models/github-user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  private baseUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  searchUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.baseUrl}/${username}`);
  }
  
}