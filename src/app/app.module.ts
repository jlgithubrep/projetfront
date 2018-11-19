import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { PersonneComponent } from './personne/personne.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GestionarticleComponent } from './gestionarticle/gestionarticle.component';
import { PersonneService } from './services/personne.services';
import { AuthentificationService } from './services/authentification.service';
import { ArticleService } from './services/article.service';
import { ArticledetailsComponent } from './articledetails/articledetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    PersonneComponent,
    CommentaireComponent,
    LoginComponent,
    FooterComponent,
    MenuComponent,
    InscriptionComponent,
    GestionarticleComponent,
    ArticledetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonneService,AuthentificationService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
