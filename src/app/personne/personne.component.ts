import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.services';
import { Personne } from '../interfaces/Personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personnes: Personne[] = new Array;

  //modif
  nomModif: string;
  prenomModif: string;
  mailModif: string;
  mdpModif: string;

  aff: boolean = false;//pour cacher les zones de modification de commentaires
  idAffMod: number;//pour recupere l'id du commentaire pour le quel on veut afficher la zone de modif


  constructor(private personneService: PersonneService) {
    this.personneService.getAllPersonne().subscribe(res => {
      //this.personnes = res['_embedded'].personnes;
      this.personnes =res;
    });
  }

  //admin
  supprimerPersonne(id: number) {
    console.log(id);
    //console.log(this.personnes[2]);
    this.personneService.supprPersonne(id).subscribe(res => {
      this.personneService.getAllPersonne().subscribe(res => {
        this.personnes = res;
      });
    });
  }

  //admin, à dupliquer pour user seul
  afficheModifComm(i: number) {

    //pour afficher les infos deja connues dans les zones de modifs
    this.personneService.findById(i).subscribe(res => {
      this.nomModif = res.nom;
      this.prenomModif = res.prenom;
      this.mailModif = res.mail;
      this.mdpModif = res.mdp;
    });


    this.aff = !this.aff;//bascule entre false et true
    this.idAffMod = i;//idAffMod est testé dans le ngIf du form de modif
  }

  //admin, à dupliquer pour user seul
  confirmModif(i: number) {
    console.log("confirm mod: " + i);

    //this.commentaires[i].contenu = this.commModif;
    //this.commentaires[i].date = new Date();

    let p: Personne = { id: i, abonne: 0, mail: this.mailModif, mdp: this.mdpModif, nom: this.nomModif, prenom: this.prenomModif, type: "utilisateur" };

    //modification par le service:
    this.personneService.updatePersonne(i, p).subscribe(res => {
      //pour avoir l'affichage à jour
      this.personneService.getAllPersonne().subscribe(res => {
        this.personnes = res;
      });

    });

    this.aff = !this.aff;
    this.nomModif = "";
    this.prenomModif = "";

  }

  ngOnInit() {
  }

}
