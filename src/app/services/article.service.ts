import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../interfaces/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  articles: Article[] = new Array;

  username: string = "user";
  password: string = "";

  getAllArticles() {
    // let user = this.username + ":" + this.password;
    // const headers = new HttpHeaders().set("Authorization", "Basic " + btoa(user));
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    return this.http.get<Array<Article>>(this.url + "articles/");
  }

  findById(id: number) {
    return this.http.get<Article>(this.url + "articles/" + id);
  }

  addArticle(p: Article) {
    let user = this.username + ":" + this.password;
    const headers = new HttpHeaders().set("Authorization", "Basic " + btoa(user));
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    return this.http.post(this.url + "article/", p, { headers: headers });
  }

  supprArticle(i: number) {
    let user = this.username + ":" + this.password;
    const headers = new HttpHeaders().set("Authorization", "Basic " + btoa(user));
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    return this.http.delete(this.url + "articleDelete/" + i, { headers: headers });
  }

  updateArticle(i: number, p: Article) {
    let user = this.username + ":" + this.password;
    const headers = new HttpHeaders().set("Authorization", "Basic " + btoa(user));
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    return this.http.put(this.url + "articleUpdate/" + i, p, { headers: headers });
  }

}
