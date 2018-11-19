import { Component, OnInit } from '@angular/core';
import { Commentaire } from '../interfaces/Commentaire';
import { AuthentificationService } from '../services/authentification.service';
import { Article } from '../interfaces/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent implements OnInit {

  //ajout d'un nouvel article
  idArticle: number;
  titre: string;
  auteurArticle: string;
  tag: string;
  datePublication: Date;
  etat: string;
  nbVue: number;
  contenuArticle: string;
  commentaires: Commentaire[];


  constructor(private articleService: ArticleService, private auth: AuthentificationService) { }


  ajouterArticle() {
    let a: Article = {
      idArticle: null,
      titre: this.titre,
      auteurArticle: this.auth.getItem("nom_connecte"),
      tag: this.tag,
      datePublication: new Date,
      etat: "valide",
      nbVue: 0,
      contenuArticle: this.contenuArticle,
      commentaires: []
    };

    this.articleService.addArticle(a).subscribe(res => {
      this.titre = "";
      this.contenuArticle = "";
    });

  }


  ngOnInit() {
  }

}
