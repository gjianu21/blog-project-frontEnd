import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private server: string = 'http://localhost:8081';
  
  constructor(
    private http: HttpClient
  ) { }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.server.concat("/createUser"), user);
  }

  logInUser(userEmail: String): Observable<String>{
    return this.http.post<String>(this.server.concat("/logIn"), userEmail)
  }
}
