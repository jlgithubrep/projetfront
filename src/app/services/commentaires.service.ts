import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';
import { Commentaire } from '../interfaces/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {

  url: string = "http://localhost:8080/articles/";

  mail: string;
  password: string;

  constructor(private http: HttpClient, private auth: AuthentificationService) { }

  addCommentOnArticle(idArticle: number, c: Commentaire) {
    this.mail = this.auth.getItem("mail_connecte");
    this.password = this.auth.getItem("mdp_connecte");
    let user = this.mail + ":" + this.password;
    const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));
    return this.http.post(this.url + idArticle + "/comment/", c, { headers: headers });

  }


}
