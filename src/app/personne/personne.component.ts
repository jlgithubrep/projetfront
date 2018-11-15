import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.services';
import { Personne } from '../interfaces/Personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  constructor(private personneService: PersonneService) {
    this.personneService.getAllPersonne().subscribe(res => {
      this.personnes = res['_embedded'].personnes;
    });
  }

  personnes: Personne[] = new Array;


  //ajout/inscription user
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
  selectNewsletter : number;


  //modif
  nomModif: string;
  prenomModif: string;


  aff: boolean = false;//pour cacher les zones de modification de commentaires
  idAffMod: number;//pour recupere l'id du commentaire pour le quel on veut afficher la zone de modif

  //ajout/inscription user
  ajouterPersonne() {
    let p: Personne = { id: null, abonne: this.selectNewsletter, mail: this.mail, mdp: this.mdp, nom: this.nom, prenom: this.prenom, type: "utilisateur" };

    this.personneService.addPersonne(p).subscribe(res => {
      this.nom = "";
      this.prenom = "";
      this.mail = "";
      this.mdp = "";
    });
  }


  //admin
  supprimerPersonne(id: number) {
    console.log(id);
    //console.log(this.personnes[2]);
    this.personneService.supprPersonne(id).subscribe(res => {
      this.personneService.getAllPersonne().subscribe(res => {
        this.personnes = res['_embedded'].personnes;
      });
    });
  }

  //admin, à dupliquer pour user seul
  afficheModifComm(i: number) {

    //pour afficher les infos deja connues dans les zones de modifs
    this.personneService.findById(i).subscribe(res => {
      this.nomModif = res.nom;
      this.prenomModif = res.prenom;
    });


    this.aff = !this.aff;//bascule entre false et true
    this.idAffMod = i;//idAffMod est testé dans le ngIf du form de modif
  }

  //admin, à dupliquer pour user seul
  confirmModif(i: number) {
    console.log("confirm mod: " + i);

    //this.commentaires[i].contenu = this.commModif;
    //this.commentaires[i].date = new Date();

    let p: Personne = { id: 1, abonne: 0, mail: "mail.test@gmail.com", mdp: "mdptest", nom: this.nomModif, prenom: this.prenomModif, type: "utilisateur" };

    //modification par le service:
    this.personneService.updatePersonne(i, p).subscribe(res => {
      //pour avoir l'affichage à jour
      this.personneService.getAllPersonne().subscribe(res => {
        this.personnes = res['_embedded'].personnes;
      });

    });

    this.aff = !this.aff;
    this.nomModif = "";
    this.prenomModif = "";

  }

  ngOnInit() {
  }

}
