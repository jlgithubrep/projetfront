import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { PersonneComponent } from './personne/personne.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GestionarticleComponent } from './gestionarticle/gestionarticle.component';
import { ArticledetailsComponent } from './articledetails/articledetails.component';
import { AjoutarticleComponent } from './ajoutarticle/ajoutarticle.component';
import { ArticlemodifierComponent } from './articlemodifier/articlemodifier.component';
import { ArticlesbytagComponent } from './articlesbytag/articlesbytag.component';

const routes: Routes = [
  //{ path: "", component: HomeComponent },
  { path: "", component: ArticleComponent },
  { path: "article", component: ArticleComponent },
  { path: "articledetails/:idArticle", component: ArticledetailsComponent },
  { path: "commentaire", component: CommentaireComponent },
  { path: "personne", component: PersonneComponent },
  { path: "login", component: LoginComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "gestionarticle", component: GestionarticleComponent },
  { path: "ajoutarticle", component: AjoutarticleComponent },
  { path: "articlemodifier/:idArticle", component: ArticlemodifierComponent },
  { path: "tag/:t", component: ArticlesbytagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./shop/home/home.component";
import {ShopComponent} from "./shop/shop.component";
import {ProductsComponent} from "./shop/products/products.component";
import {RegisterComponent} from "./shop/register/register.component";
import {CreateaccountComponent} from "./shop/register/createaccount/createaccount.component";
import {LoginBackComponent} from "./backend/login-back/login-back.component";
import {HomeBackComponent} from "./backend/home-back/home-back.component";
import {ClientsBackComponent} from "./backend/clients-back/clients-back.component";
import {CategoriesBackComponent} from "./backend/categories-back/categories-back.component";
import {ProductsBackComponent} from "./backend/products-back/products-back.component";
import {OrdersBackComponent} from "./backend/orders-back/orders-back.component";
import {AdminsComponent} from "./backend/admins/admins.component";
import {CreateAdminsComponent} from "./backend/admins/create-admins/create-admins.component";

const routes: Routes = [
 { path:'', component: HomeComponent},
 { path:'register', redirectTo: 'register/create' },
 { path:'register', component: RegisterComponent, children: [
     {path:'create', component: CreateaccountComponent }
   ]
 },

 // routes backoffice
 { path : 'admin/login', component: LoginBackComponent},
 { path : 'admin', component: HomeBackComponent, children: [
     //{ path: '', redirectTo: 'admin/login'},
     { path: 'clients', component: ClientsBackComponent},
     { path: 'categories', component: CategoriesBackComponent},
     { path: 'products', component: ProductsBackComponent},
     { path : 'orders', component : OrdersBackComponent},
     { path : 'admins', component : AdminsComponent},
     { path : 'admins/create', component: CreateAdminsComponent}
   ]
 },
 // en dernier + discard
 { path: ':id', component: ProductsComponent},

];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }


*/