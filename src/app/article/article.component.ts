import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: Article[] = new Array();

  tags: string[] = new Array();

  constructor(private articleService: ArticleService) {
    this.articleService.getAllArticles().subscribe(res => {
      this.articles = res;

      this.articleService.getAllTags().subscribe(res2 => {
        this.tags = res2;
      });

    });
  }


  ngOnInit() {
  }

}
