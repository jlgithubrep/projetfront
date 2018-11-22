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
    console.log(user);
    const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));
    return this.http.post(this.url + idArticle + "/comment/", c, { headers: headers });

  }

  findCommentById(id: number) {
    return this.http.get<Commentaire>("http://localhost:8080/commentaire/" + id);
  }

  updateCommentaire(ia: number, ic: number, c: Commentaire) {
    this.mail = this.auth.getItem("mail_connecte");
    this.password = this.auth.getItem("mdp_connecte");
    let user = this.mail + ":" + this.password;
    const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));
    return this.http.put(this.url + ia + "/comment/" + ic, c, { headers: headers });
    //return this.http.put(this.url + "personneUpdate/" + i, p);
  }

  supprCommentaire(i: number) {
    this.mail= this.auth.getItem("mail_connecte");
    this.password = this.auth.getItem("mdp_connecte");
    let user = this.mail + ":" + this.password;
    console.log(this.mail + ":" + this.password);
    const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));
    return this.http.delete("http://localhost:8080/commentaireDelete/" + i, { headers: headers });

}


}
