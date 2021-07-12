import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from '../models/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private server: string = 'http://localhost:8081';


  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Articles[]>{
    return this.http.get<Articles[]>(this.server.concat("/allArticles"))
  }

  saveArticles(article: Articles): Observable<Articles>{
    return this.http.post<Articles>(this.server.concat("/saveArticle"), article)
  }

  getArticle(articleId: number): Observable<Articles>{
    return this.http.get<Articles>(this.server.concat("/findById/" + articleId))
  }
}
