import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { PersonneComponent } from './personne/personne.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path: "article", component: ArticleComponent },
  { path: "commentaire", component: CommentaireComponent },
  { path: "personne", component: PersonneComponent },
  { path: "login", component :LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
