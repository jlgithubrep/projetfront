import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../interfaces/Article';
import { ArticleService } from '../services/article.service';

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

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    this.route.paramMap.subscribe(res => {
      this.idArticle = Number(res.get("idArticle"));
      console.log(this.idArticle);
    });
    this.articleService.findById(this.idArticle).subscribe(res => {
      this.art = res;

      console.log(this.art.commentaires[0]);

    });

  }

  ngOnInit() {


  }

}
