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

  ngOnInit() {
  }

}
