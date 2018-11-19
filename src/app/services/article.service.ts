import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../interfaces/Article';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url: string = "http://localhost:8080/";


  articles: Article[] = new Array;

  mail: string;
  password: string;

  constructor(private http: HttpClient, private auth : AuthentificationService) { }



  getAllArticles() {
    // let user = this.username + ":" + this.password;
    // const headers = new HttpHeaders().set("Authorization", "Basic " + btoa(user));
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    return this.http.get<Array<Article>>(this.url + "articles/");
  }

  getArticlesByAuthor() {
    this.mail = this.auth.getItem("mail_connecte");
    this.password = this.auth.getItem("mdp_connecte");
    let user = this.mail + ":" + this.password;
    const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));
    return this.http.get<Array<Article>>(this.url + "articlesparauteur?auteur="+this.auth.getItem("nom_connecte"), { headers: headers });
  }

  findById(id: number) {
    return this.http.get<Article>(this.url + "articles/" + id);
  }

  addArticle(p: Article) {
    this.mail= this.auth.getItem("mail_connecte");
    this.password = this.auth.getItem("mdp_connecte");
    let user = this.mail + ":" + this.password;

    const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');

    //return this.http.post(this.url + "article/", p, { headers: headers });
    return this.http.post(this.url + "article/", p, { headers: headers });
  }

  supprArticle(i: number) {
    this.mail= this.auth.getItem("mail_connecte");
    this.password = this.auth.getItem("mdp_connecte");
    let user = this.mail + ":" + this.password;
    const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');

    //return this.http.delete(this.url + "articleDelete/" + i, { headers: headers });
    return this.http.delete(this.url + "articleDelete/" + i, { headers: headers });
  }

  updateArticle(i: number, p: Article) {
    this.mail= this.auth.getItem("mail_connecte");
    this.password = this.auth.getItem("mdp_connecte");
    let user = this.mail + ":" + this.password;
    const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');

    //return this.http.put(this.url + "articleUpdate/" + i, p, { headers: headers });
    return this.http.put(this.url + "articleUpdate/" + i, p, { headers: headers });
  }

}
