import { Personne } from "./Personne";

export interface Commentaire {
    idCommentaire:number;
    auteurCommentaire : string;
    contenuCommentaire : string;
    dateCommentaire : Date;
    etatCommentaire : string;
    personne : Personne;
}