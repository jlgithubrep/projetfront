import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.services';
import { Personne } from '../interfaces/Personne';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  //ajout/inscription user
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
  mdpConfirm: string;
  selectNewsletter: number;

  passwordnotmatching: boolean;

  tabAllEmail: string[];
  mailExistant: boolean;


  constructor(private personneService: PersonneService) {
    this.passwordnotmatching = false;
    this.mailExistant = false;
  }



  //ajout/inscription user
  ajouterPersonne() {

    if (this.mdp != this.mdpConfirm) {
      this.passwordnotmatching = true;
    } else {

      this.personneService.getAllEmail().subscribe(res => {
        this.tabAllEmail = res;

        this.tabAllEmail.forEach(element => {
          if (element == this.mail) {
            this.mailExistant = true
          }
        });

        if (!this.mailExistant) {

          let p: Personne = {
            id: null,
            abonne: this.selectNewsletter,
            mail: this.mail,
            mdp: this.mdp,
            nom: this.nom,
            prenom: this.prenom,
            type: "utilisateur"
          };

          this.personneService.addPersonne(p).subscribe(res => {
            this.nom = "";
            this.prenom = "";
            this.mail = "";
            this.mdp = "";
            this.mdpConfirm="";
          });
        }
      });
    }
  }

  ngOnInit() {
  }

}
