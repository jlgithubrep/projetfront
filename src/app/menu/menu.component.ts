import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  tags : string[];

  constructor(private auth: AuthentificationService, private articleService: ArticleService) {
    this.articleService.getAllTags().subscribe(res => {
      console.log(res);
      this.tags = res;
    });
  }

  logout() {

    console.log("session clear" + sessionStorage.length + this.auth.getItem("nom_connecte"));
    this.auth.logoff();
  }

  ngOnInit() {
  }

}
