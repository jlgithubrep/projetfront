import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/Article';

@Component({
  selector: 'app-articlesbytag',
  templateUrl: './articlesbytag.component.html',
  styleUrls: ['./articlesbytag.component.css']
})
export class ArticlesbytagComponent implements OnInit {

  tag: string;

  articles: Article[] = new Array();

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {

    this.route.paramMap.subscribe(res => {
      this.tag = res.get("t");

      this.articleService.getArticlesByTag(this.tag).subscribe(res => {
        this.articles = res;
      });
    });

  }

  ngOnInit() {

  }

}
