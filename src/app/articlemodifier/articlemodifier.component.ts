import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/Article';
import { Commentaire } from '../interfaces/Commentaire';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-articlemodifier',
  templateUrl: './articlemodifier.component.html',
  styleUrls: ['./articlemodifier.component.css']
})
export class ArticlemodifierComponent implements OnInit {

  idArticle: number;

  art: Article = {
    idArticle: 0,
    titre: "",
    auteurArticle: "",
    tag: "",
    datePublication: null,
    etat: "",
    nbVue: 0,
    contenuArticle: "",
    commentaires: [{
      idCommentaire: 0,
      auteurCommentaire: "",
      contenuCommentaire: "",
      dateCommentaire: null,
      etatCommentaire: "",
      personne: null
    }]
  };

  //modif d'un article
  //idArticle: number;
  titre: string;
  //auteurArticle: string;
  tag: string;
  //datePublication: Date;
  //etat: string;
  //nbVue: number;
  contenuArticle: string;
  //commentaires: Commentaire[];

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private auth: AuthentificationService, private router: Router) {
    this.route.paramMap.subscribe(res => {
      this.idArticle = Number(res.get("idArticle"));
      console.log(this.idArticle);
    });
    this.articleService.findById(this.idArticle).subscribe(res => {
      this.art = res;

      this.titre = this.art.titre;
      this.tag = this.art.tag;
      this.contenuArticle = this.art.contenuArticle;


    });

  }

  modifierArticle() {
    let articleMod: Article = {
      idArticle: this.idArticle,
      titre: this.titre,
      auteurArticle: this.auth.getItem("nom_connecte"),
      tag: this.tag,
      datePublication: new Date,
      etat: "valide",
      nbVue: this.art.nbVue,
      contenuArticle: this.contenuArticle,
      commentaires: this.art.commentaires
    };


    this.articleService.updateArticle(this.idArticle, articleMod).subscribe(res => {
      this.router.navigateByUrl('/gestionarticle');
    });
  }

  ngOnInit() {
  }

}
