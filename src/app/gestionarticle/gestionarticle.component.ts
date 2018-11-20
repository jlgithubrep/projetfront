import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/Article';

@Component({
  selector: 'app-gestionarticle',
  templateUrl: './gestionarticle.component.html',
  styleUrls: ['./gestionarticle.component.css']
})
export class GestionarticleComponent implements OnInit {


  articles: Article[] = new Array();

  constructor(private articleService: ArticleService) {
    this.articleService.getArticlesByAuthor().subscribe(res => {
      this.articles = res;
    });
  }

  supprimerArticle(idArticle : number){

    console.log(idArticle);
    this.articleService.supprArticle(idArticle).subscribe(res=>{
      this.articleService.getArticlesByAuthor().subscribe(res2=>{
        this.articles = res2;
      });
    });
  }

  ngOnInit() {
  }

}
