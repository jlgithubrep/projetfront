import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { PersonneComponent } from './personne/personne.component';

const routes: Routes = [
  { path: "article", component: ArticleComponent },
  { path: "commentaire", component: CommentaireComponent },
  { path: "personne", component: PersonneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
