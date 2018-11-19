import { Commentaire } from "./Commentaire";

export interface Article {
    idArticle: number;
    titre: string;
    auteurArticle: string;
    tag: string;
    datePublication: Date;
    etat: string;
    nbVue: number;
    contenuArticle: string;
    commentaires : Commentaire[]; 
}