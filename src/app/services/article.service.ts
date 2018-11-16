import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../interfaces/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url: string = "http://localhost:8080/articles/";

  constructor(private http: HttpClient) { }

  articles: Article[] = new Array;

  headers: HttpHeaders = new HttpHeaders();

  getAllArticles() {
    return this.http.get<Array<Article>>(this.url);
  }

  findById(id: number) {
    return this.http.get<Article>(this.url + id);
  }

  addArticle(p: Article) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    return this.http.post(this.url, p, { headers: this.headers });
  }

  supprArticle(i: number) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    return this.http.delete(this.url + i, { headers: this.headers });
  }

  updatePersonne(i: number, p: Article) {
    return this.http.put(this.url + i, p);
  }
}
