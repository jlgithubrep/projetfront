import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../interfaces/Article';
import { ArticleService } from '../services/article.service';
import { CommentairesService } from '../services/commentaires.service';
import { Commentaire } from '../interfaces/Commentaire';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-articledetails',
  templateUrl: './articledetails.component.html',
  styleUrls: ['./articledetails.component.css']
})
export class ArticledetailsComponent implements OnInit {

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


  //ajout d'un commentaire sur l'article
  contenuCommentaire: string;


  //   {
  //     "idCommentaire": null,
  //     "auteurCommentaire": "dalton",
  //     "contenuCommentaire": "zelfkjzlefknomm",
  //     "dateCommentaire": "2018-04-28T12:00:00.000+0000",
  //     "etatCommentaire": "valide"
  // }

  aff: boolean = false;//pour cacher les zones de modification de commentaires
  idAffMod: number;//pour recupere l'id du commentaire pour le quel on veut afficher la zone de modif


  //modif de commentaire
  commentaireModif: string;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private commentaireService: CommentairesService, private auth: AuthentificationService) {
    this.route.paramMap.subscribe(res => {
      this.idArticle = Number(res.get("idArticle"));
      console.log(this.idArticle);
    });
    this.articleService.findById(this.idArticle).subscribe(res => {
      this.art = res;

      console.log(this.art.commentaires[0]);

    });

  }


  addComment(i: number) {

    let c: Commentaire = {
      idCommentaire: null,
      auteurCommentaire: this.auth.getItem("nom_connecte"),
      contenuCommentaire: this.contenuCommentaire,
      dateCommentaire: new Date,
      etatCommentaire: "valide",
      personne: null
    };

    //pour avoir l'affichage à jour
    this.commentaireService.addCommentOnArticle(i, c).subscribe(res => {
      this.contenuCommentaire = "";
      this.articleService.findById(i).subscribe(res => {
        this.art = res;
      });
    });



  }

  afficheModifComm(i: number) {

    //pour afficher les infos deja connues dans les zones de modifs
    this.commentaireService.findCommentById(i).subscribe(res => {
      this.commentaireModif = res.contenuCommentaire;
    });


    this.aff = !this.aff;//bascule entre false et true
    this.idAffMod = i;//idAffMod est testé dans le ngIf du form de modif
  }

  confirmModif(i: number) {
    console.log("confirm mod: " + i);

    let c: Commentaire = {
      idCommentaire: i,
      auteurCommentaire: this.auth.getItem("nom_connecte"),
      contenuCommentaire: this.commentaireModif,
      dateCommentaire: new Date,
      etatCommentaire: "valide",
      personne: null
    };

    //modification par le service:
    this.commentaireService.updateCommentaire(this.idArticle, i, c).subscribe(res => {
      //pour avoir l'affichage à jour
      this.articleService.findById(this.idArticle).subscribe(res => {
        this.art = res;
      });
    });


    this.aff = !this.aff;
    this.commentaireModif = "";

  }

  supprimerCommentaire(i: number) {
    this.commentaireService.supprCommentaire(i).subscribe(res => {
      //pour avoir l'affichage à jour
      this.articleService.findById(this.idArticle).subscribe(res => {
        this.art = res;
      });
    });
  }


  ngOnInit() {


  }

}
