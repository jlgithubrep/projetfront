import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private articleService : ArticleService) {
    this.articleService.getAllArticles().subscribe(res=>{
      this.articles = res['_embedded'].articles;
    });
  }

  articles : Article[] = new Array;
  ngOnInit() {
  }

}
